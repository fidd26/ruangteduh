const MAX_BODY_BYTES = 16_000;
const MAX_MESSAGES = 16;
const MAX_MESSAGE_LENGTH = 4_000;

const SYSTEM_INSTRUCTION = `Kamu adalah Teman Teduh, pendengar yang hangat dan tidak menghakimi. Balas dalam Bahasa Indonesia dengan empati dan singkat. Jangan mendiagnosis, meresepkan obat, atau mengaku sebagai tenaga profesional. Jika pengguna menunjukkan risiko menyakiti diri sendiri atau orang lain, dorong mereka untuk segera menghubungi orang tepercaya dan layanan darurat setempat. Kamu bukan pengganti bantuan profesional.`;

function jsonResponse(body, status, origin = '') {
	const headers = new Headers({
		'Cache-Control': 'no-store',
		'Content-Type': 'application/json; charset=utf-8',
	});

	if (origin) {
		headers.set('Access-Control-Allow-Origin', origin);
		headers.set('Vary', 'Origin');
	}

	return new Response(JSON.stringify(body), { status, headers });
}

function normalizeMessages(messages) {
	if (!Array.isArray(messages) || messages.length === 0 || messages.length > MAX_MESSAGES) {
		return null;
	}

	const normalized = [];
	for (const message of messages) {
		if (!message || !['user', 'model'].includes(message.role) || typeof message.text !== 'string') {
			return null;
		}

		const text = message.text.trim();
		if (!text || text.length > MAX_MESSAGE_LENGTH) return null;
		normalized.push({ role: message.role, parts: [{ text }] });
	}

	if (normalized[normalized.length - 1].role !== 'user') return null;
	return normalized;
}

export default {
	async fetch(request, env) {
		const origin = request.headers.get('Origin') || '';
		const allowedOrigin = env.ALLOWED_ORIGIN;

		if (!allowedOrigin || origin !== allowedOrigin) {
			return jsonResponse({ error: 'Origin tidak diizinkan.' }, 403);
		}

		if (request.method === 'OPTIONS') {
			return new Response(null, {
				status: 204,
				headers: {
					'Access-Control-Allow-Origin': allowedOrigin,
					'Access-Control-Allow-Methods': 'POST, OPTIONS',
					'Access-Control-Allow-Headers': 'Content-Type',
					'Access-Control-Max-Age': '86400',
					'Vary': 'Origin',
				},
			});
		}

		const url = new URL(request.url);
		if (request.method !== 'POST' || url.pathname !== '/api/chat') {
			return jsonResponse({ error: 'Endpoint tidak ditemukan.' }, 404, allowedOrigin);
		}

		if (!request.headers.get('Content-Type')?.includes('application/json')) {
			return jsonResponse({ error: 'Content-Type harus application/json.' }, 415, allowedOrigin);
		}

		const contentLength = Number(request.headers.get('Content-Length') || 0);
		if (contentLength > MAX_BODY_BYTES) {
			return jsonResponse({ error: 'Permintaan terlalu besar.' }, 413, allowedOrigin);
		}

		let payload;
		try {
			const rawBody = await request.text();
			if (new TextEncoder().encode(rawBody).length > MAX_BODY_BYTES) {
				return jsonResponse({ error: 'Permintaan terlalu besar.' }, 413, allowedOrigin);
			}
			payload = JSON.parse(rawBody);
		} catch {
			return jsonResponse({ error: 'JSON tidak valid.' }, 400, allowedOrigin);
		}

		const contents = normalizeMessages(payload?.messages);
		if (!contents) {
			return jsonResponse({ error: 'Format atau jumlah pesan tidak valid.' }, 400, allowedOrigin);
		}
		if (!env.GEMINI_API_KEY) {
			return jsonResponse({ error: 'Backend belum dikonfigurasi.' }, 503, allowedOrigin);
		}

		const model = env.GEMINI_MODEL || 'gemini-2.5-flash';
		const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent`;
		try {
			const geminiResponse = await fetch(endpoint, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'x-goog-api-key': env.GEMINI_API_KEY,
				},
				body: JSON.stringify({
					systemInstruction: { parts: [{ text: SYSTEM_INSTRUCTION }] },
					contents,
					generationConfig: { maxOutputTokens: 500, temperature: 0.7 },
				}),
			});

			if (!geminiResponse.ok) {
				return jsonResponse({ error: 'Layanan AI sedang tidak tersedia. Coba lagi nanti.' }, 502, allowedOrigin);
			}

			const result = await geminiResponse.json();
			const reply = result.candidates?.[0]?.content?.parts
				?.map((part) => part.text || '')
				.join('')
				.trim();

			if (!reply) {
				return jsonResponse({ error: 'AI belum dapat memberikan balasan.' }, 502, allowedOrigin);
			}

			return jsonResponse({ reply }, 200, allowedOrigin);
		} catch {
			return jsonResponse({ error: 'Tidak dapat menghubungi layanan AI.' }, 502, allowedOrigin);
		}
	},
};