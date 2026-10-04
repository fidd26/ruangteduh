const icons = {
	leaf: '<path d="M20 4c-8 0-14 3.5-14 10a6 6 0 0 0 6 6c6.5 0 10-6 8-16Z"/><path d="M4 21c2-5 6-8 12-11"/>',
	home: '<path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1Z"/>',
	heart: '<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z"/>',
	message: '<path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8A8.5 8.5 0 0 1 8.7 3.9a8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8Z"/>',
	plus: '<path d="M12 5v14M5 12h14"/>',
	search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
	book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z"/>',
	user: '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
	hand: '<path d="M8 11V5a2 2 0 0 1 4 0v5-7a2 2 0 0 1 4 0v8-6a2 2 0 0 1 4 0v9a7 7 0 0 1-7 7h-1a7 7 0 0 1-5.6-2.8L3 14a2 2 0 0 1 3-2.6L8 14"/>',
	flag: '<path d="M4 22V4m0 0c7-5 9 5 16 0v12c-7 5-9-5-16 0"/>',
	dots: '<circle cx="12" cy="5" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="12" cy="19" r="1"/>',
	lock: '<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
	send: '<path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>',
	play: '<path d="m8 5 12 7-12 7z"/>',
	upload: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m17 8-5-5-5 5M12 3v12"/>',
	bell: '<path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9"/><path d="M10 21h4"/>',
	shield: '<path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z"/><path d="m9 12 2 2 4-4"/>',
	chevron: '<path d="m9 18 6-6-6-6"/>',
	google: '<path d="M20.1 12.2c0-.7-.1-1.4-.2-2.1H12v4h4.5a3.9 3.9 0 0 1-1.7 2.6v2.2h2.8c1.6-1.5 2.5-3.8 2.5-6.7Z"/><path d="M12 20.4c2.3 0 4.2-.8 5.6-2.1l-2.8-2.2c-.8.5-1.7.9-2.8.9-2.2 0-4.1-1.5-4.8-3.5H4.3v2.2a8.5 8.5 0 0 0 7.7 4.7Z"/><path d="M7.2 13.5a5.1 5.1 0 0 1 0-3.1V8.2H4.3a8.5 8.5 0 0 0 0 7.5Z"/><path d="M12 6.9c1.2 0 2.3.4 3.2 1.3l2.4-2.4A8.1 8.1 0 0 0 12 3.6a8.5 8.5 0 0 0-7.7 4.7l2.9 2.2c.7-2.1 2.6-3.6 4.8-3.6Z"/>',
	check: '<path d="m5 12 4 4L19 6"/>',
	settings: '<path d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z"/><path d="m19.4 15 .1.1a2 2 0 1 1-2.8 2.8l-.1-.1a2 2 0 0 0-3.4 1.4v.3a2 2 0 1 1-4 0v-.2A2 2 0 0 0 5.8 17l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a2 2 0 0 0-1.4-3.4h-.3a2 2 0 1 1 0-4h.2A2 2 0 0 0 3 4.2l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a2 2 0 0 0 3.4-1.4v-.3a2 2 0 1 1 4 0v.2A2 2 0 0 0 16.6 1l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a2 2 0 0 0 1.4 3.4h.3a2 2 0 1 1 0 4h-.2a2 2 0 0 0-1.5 3.8Z"/>',
};

const icon = (name, extra = '') => `<svg class="icon ${extra}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[name] || icons.leaf}</svg>`;
const app = document.querySelector('#app');
const categories = ['Semua', 'Keluarga', 'Sekolah', 'Pekerjaan', 'Romansa', 'Kesehatan mental', 'Lainnya'];
let view = 'welcome';
let authMode = 'login';
let activeCategory = 'Semua';
let storyCategory = '';
let mediaFilter = 'Semua';
let searchTerm = '';
let uploadedName = '';
let userName = localStorage.getItem('ruangteduh-name') || 'Teman Teduh';
let posts = [
	{ id: 1, name: 'Langit Pagi', initials: 'LP', avatar: '', time: '12 menit lalu', category: 'Pekerjaan', badge: 'friend', title: 'Rasanya lelah selalu terlihat baik-baik saja', body: 'Di kantor aku selalu jadi orang yang bisa diandalkan. Tapi belakangan rasanya capek sekali, dan aku bingung harus cerita ke siapa. Takut dianggap tidak profesional kalau jujur sedang kewalahan.', hugs: 24, understands: 12, comments: 8 },
	{ id: 2, name: 'Bunga Kecil', initials: 'BK', avatar: 'peach', time: '38 menit lalu', category: 'Keluarga', badge: '', title: 'Belajar menetapkan batas dengan keluarga', body: 'Aku mulai mencoba bilang “tidak” untuk hal-hal yang memang di luar kemampuanku. Tidak mudah, tapi hari ini aku berhasil melakukannya sekali. Rasanya campur aduk.', hugs: 19, understands: 21, comments: 5 },
	{ id: 3, name: 'Ruang Pulih', initials: 'RP', avatar: 'lilac', time: '1 jam lalu', category: 'Romansa', badge: 'professional', title: 'Setelah hubungan berakhir, kapan rasanya akan lebih ringan?', body: 'Sudah tiga minggu sejak kami berpisah. Teman-teman bilang aku akan baik-baik saja, tapi ada hari ketika hal kecil mengingatkanku lagi. Apa kalian pernah melalui ini?', hugs: 36, understands: 17, comments: 14 },
	{ id: 4, name: 'Awan Teduh', initials: 'AT', avatar: 'sun', time: '2 jam lalu', category: 'Sekolah', badge: '', title: 'Takut mengecewakan orang tua soal nilai', body: 'Nilai ujianku tidak seperti yang diharapkan. Aku sudah berusaha, tapi sekarang takut bicara jujur di rumah. Semoga ada yang paham rasanya.', hugs: 15, understands: 9, comments: 3 },
];
let messages = [{ mine: false, text: 'Hai, aku di sini untuk mendengarkan. Kamu tidak perlu merapikan ceritamu dulu. Apa yang terasa paling berat hari ini?' }];
let helpedMedia = new Set();

function brand() { return `<div class="brand"><span class="brand-mark">${icon('leaf')}</span>RuangTeduh</div>`; }
function welcomeArt() { return `<svg class="welcome-artwork" viewBox="0 0 620 620" fill="none" aria-hidden="true"><circle cx="314" cy="300" r="221" fill="#d5e0d3"/><circle cx="314" cy="300" r="167" fill="#e4ebe0"/><path d="M122 421c36-98 129-158 248-130 53 13 86 53 119 109 25 42 29 104-9 121-39 17-98-7-139-8-67-1-171 56-219 0-20-24-16-61 0-92Z" fill="#a4b99f"/><path d="M201 414c5-78 47-140 113-159 70-20 124 18 142 67 18 49-12 118-38 146-20 21-74 37-120 22-47-14-100-37-97-76Z" fill="#f3d3bc"/><path d="M254 366c-1-30 17-54 42-53 24 1 34 24 30 52-3 19-16 35-34 34-20 0-37-13-38-33Z" fill="#344b40"/><path d="M334 365c-1-30 17-54 42-53 24 1 34 24 30 52-3 19-16 35-34 34-20 0-37-13-38-33Z" fill="#344b40"/><path d="M287 434c28 16 62 15 91-3" stroke="#b97865" stroke-width="7" stroke-linecap="round"/><path d="M206 294c-26-68-4-122 40-151 42-27 116-18 145 21 23 30 31 72 17 114-24-18-48-41-67-63-24 38-80 67-135 79Z" fill="#5c7861"/><path d="M442 178c17-23 46-26 63-9 18 17 16 45-5 62-13 11-36 12-52 2-20-13-20-37-6-55Z" fill="#e5bf76"/><path d="M441 396c52-8 101 18 119 56" stroke="#fffefa" stroke-width="7" stroke-linecap="round" opacity=".75"/><path d="M147 187c8-25 30-40 54-40" stroke="#fffefa" stroke-width="7" stroke-linecap="round" opacity=".7"/><path d="M104 262c12-13 28-18 45-15" stroke="#fffefa" stroke-width="7" stroke-linecap="round" opacity=".7"/><circle cx="451" cy="113" r="9" fill="#d98773"/><circle cx="116" cy="342" r="7" fill="#d98773"/><path d="M390 117c15 14 23 31 25 51" stroke="#96ad93" stroke-width="6" stroke-linecap="round"/></svg>`; }

function renderWelcome() {
	app.innerHTML = `<section class="welcome"><div class="welcome-art">${brand()}${welcomeArt()}<div class="welcome-copy"><span class="eyebrow">Sebuah ruang untukmu</span><h1 class="serif">Tidak apa-apa untuk tidak baik-baik saja.</h1><p>Tarik napas. Di sini, ceritamu diterima tanpa perlu dihakimi.</p></div><div class="welcome-foot"><span></span>Ruang aman, tumbuh bersama</div></div><section class="auth-panel"><div class="brand">${brand()}</div>${renderAuthForm()}<div class="auth-professional">Seorang profesional? <button data-view="professional">Daftar & verifikasi identitas ${icon('chevron')}</button></div></section></section>`;
}

function renderAuthForm() {
	const isLogin = authMode === 'login';
	return `<form class="auth-form" id="auth-form"><span class="eyebrow">Selamat datang di RuangTeduh</span><h2>${isLogin ? 'Mari mulai perlahan' : 'Buat ruang untuk dirimu'}</h2><p>${isLogin ? 'Masuk dan temukan ruang yang aman untuk bercerita.' : 'Satu langkah kecil untuk mulai merasa didengar.'}</p><div class="auth-actions"><button class="button button-outline button-block" type="button" data-action="google">${icon('google')} Lanjutkan dengan Google</button><button class="button button-primary button-block" type="button" data-action="email-auth">${isLogin ? 'Masuk dengan email' : 'Daftar dengan email'}</button><button class="button button-quiet button-block" type="button" data-action="guest">Jelajahi sebagai tamu</button></div><div class="auth-switch">${isLogin ? 'Belum punya akun?' : 'Sudah punya akun?'} <button type="button" data-action="toggle-auth">${isLogin ? 'Daftar' : 'Masuk'}</button></div></form>`;
}

function renderEmailAuth() {
	const isLogin = authMode === 'login';
	app.innerHTML = `<section class="auth-plain"><div class="auth-plain-card"><button class="back-link" data-view="welcome">← Kembali</button>${brand()}<h2>${isLogin ? 'Masuk dengan email' : 'Daftar dengan email'}</h2><p>${isLogin ? 'Ruang teduhmu sudah menanti.' : 'Ceritamu layak mendapat ruang yang aman.'}</p><form id="email-form">${!isLogin ? '<div class="field"><label for="name">Nama panggilan</label><input id="name" name="name" placeholder="Nama yang nyaman untukmu" required /></div>' : ''}<div class="field"><label for="email">Email</label><input id="email" name="email" type="email" placeholder="nama@email.com" required /></div><div class="field"><label for="password">Kata sandi</label><input id="password" name="password" type="password" minlength="6" placeholder="Minimal 6 karakter" required /></div><button class="button button-primary button-block" type="submit">${isLogin ? 'Masuk' : 'Buat akun'}</button></form><div class="auth-switch">${isLogin ? 'Belum punya akun?' : 'Sudah punya akun?'} <button data-action="toggle-auth">${isLogin ? 'Daftar' : 'Masuk'}</button></div></div></section>`;
}

function navItem(name, title, iconName, extra = '') { return `<button class="nav-item ${view === name ? 'active' : ''} ${extra}" data-view="${name}">${icon(iconName)}${title}</button>`; }
function shell(content, title) {
	app.innerHTML = `<div class="shell"><aside class="sidebar">${brand()}<p class="nav-label">Ruangmu</p><nav class="nav-list">${navItem('community', 'Suara Hati', 'heart')}${navItem('chat', 'Teman Virtual', 'message')}${navItem('story', 'Bagikan Cerita', 'plus', 'story-nav')}${navItem('inspiration', 'Jeda & Inspirasi', 'book')}${navItem('profile', 'Profil & Pengaturan', 'user')}</nav><div class="sidebar-bottom"><div class="sidebar-note"><strong>Pelan-pelan saja.</strong>Kamu tidak harus punya semua jawabannya hari ini.</div><div class="user-mini"><div class="avatar">${initials(userName)}</div><div><strong>${escapeHtml(userName)}</strong><span>Anggota RuangTeduh</span></div></div></div></aside><section class="main-column"><header class="topbar"><span class="topbar-title">${title}</span><div class="topbar-actions"><button class="icon-button" aria-label="Cari cerita" data-action="focus-search">${icon('search')}</button><button class="icon-button" aria-label="Notifikasi" data-action="notifications">${icon('bell')}</button></div></header><div class="content">${content}</div></section>${rightRail()}${mobileNav()}</div>`;
}
function rightRail() {
	return `<aside class="right-rail"><label class="searchbox">${icon('search')}<input id="post-search" value="${escapeAttr(searchTerm)}" placeholder="Cari cerita atau topik..." aria-label="Cari cerita atau topik" /></label><section class="rail-section"><div class="rail-title">Sedang dibicarakan <span>✦</span></div><div class="trend"><span class="trend-number">01</span><div><strong>Belajar berkata tidak</strong><span>128 teman berbagi</span></div></div><div class="trend"><span class="trend-number">02</span><div><strong>Mulai lagi setelah kehilangan</strong><span>86 teman berbagi</span></div></div><div class="trend"><span class="trend-number">03</span><div><strong>Rasa cemas di tempat kerja</strong><span>64 teman berbagi</span></div></div></section><div class="professional-card"><span class="badge">${icon('shield')} Terverifikasi</span><h3>Dengarkan dari profesional</h3><p>Psikolog dan konselor terverifikasi hadir untuk menemanimu.</p><button class="button button-outline button-block" data-action="professionals">Kenali profesional</button></div></aside>`;
}
function mobileNav() {
	return `<nav class="mobile-nav" aria-label="Navigasi utama"><button class="${view === 'community' ? 'active' : ''}" data-view="community">${icon('home')}Beranda</button><button class="${view === 'chat' ? 'active' : ''}" data-view="chat">${icon('message')}Teman</button><button class="mobile-add" aria-label="Bagikan cerita" data-view="story">${icon('plus')}</button><button class="${view === 'inspiration' ? 'active' : ''}" data-view="inspiration">${icon('book')}Jeda</button><button class="${view === 'profile' ? 'active' : ''}" data-view="profile">${icon('user')}Profil</button></nav>`;
}
function initials(name) { return name.split(/\s+/).slice(0, 2).map((part) => part[0] || '').join('').toUpperCase(); }
function escapeHtml(value) { return String(value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]); }
function escapeAttr(value) { return escapeHtml(value); }
function heading(eyebrow, title, description, action = '') { return `<div class="content-header"><div><span class="eyebrow">${eyebrow}</span><h1>${title}</h1><p>${description}</p></div>${action}</div>`; }

function postCard(post) {
	const badge = post.badge === 'professional' ? `<span class="badge">${icon('check')} Psikolog terverifikasi</span>` : post.badge === 'friend' ? '<span class="badge friend">✦ Teman Empatik</span>' : '';
	return `<article class="feed-post" data-category="${escapeAttr(post.category)}"><div class="post-head"><div class="avatar ${post.avatar}">${escapeHtml(post.initials)}</div><div class="post-meta"><strong>${escapeHtml(post.name)}</strong><span>${escapeHtml(post.time)}</span></div>${badge}<button class="post-menu" aria-label="Laporkan cerita" data-action="report" data-id="${post.id}">${icon('flag')}</button></div><h3>${escapeHtml(post.title)}</h3><p>${escapeHtml(post.body)}</p><div class="post-actions"><button class="reaction" data-action="react" data-kind="hugs" data-id="${post.id}">${icon('heart')} Peluk virtual <span>${post.hugs}</span></button><button class="reaction understand" data-action="react" data-kind="understands" data-id="${post.id}">${icon('hand')} Aku paham <span>${post.understands}</span></button><button class="reaction comment-count" data-action="comments" data-id="${post.id}">${icon('message')} ${post.comments} balasan</button></div></article>`;
}

function renderCommunity() {
	const matching = posts.filter((post) => (activeCategory === 'Semua' || post.category === activeCategory) && `${post.title} ${post.body} ${post.category}`.toLowerCase().includes(searchTerm.toLowerCase()));
	const filters = categories.map((category) => `<button class="filter-chip ${activeCategory === category ? 'active' : ''}" data-category-filter="${category}">${category}</button>`).join('');
	const content = `${heading('Komunitas', 'Suara Hati', 'Cerita dari teman-teman yang juga sedang menjalani hari mereka.', '<button class="button button-primary" data-view="story">+ Ceritakan milikmu</button>')}<div class="filters">${filters}</div>${matching.length ? matching.map(postCard).join('') : '<div class="empty-state">Belum ada cerita yang cocok. Coba kata kunci atau kategori lain.</div>'}`;
	shell(content, 'Suara Hati');
}

function renderStory() {
	const options = categories.slice(1).map((category) => `<option value="${category}" ${storyCategory === category ? 'selected' : ''}>${category}</option>`).join('');
	const content = `<div class="story-wrap">${heading('Ruang berbagi', 'Ceritakan yang terasa', 'Kamu boleh menulis sedikit atau banyak. Ceritamu akan diterima dengan hangat.')}<div class="story-prompt">${icon('heart')} <strong>Ambil waktumu.</strong> Tidak ada cara yang salah untuk bercerita. Pilih kategori agar teman lain lebih mudah menemukan dan memahami ceritamu.</div><form id="story-form"><div class="field"><label for="story-category">Kategori <span style="color:#b76658">*</span></label><select id="story-category" required><option value="">Pilih kategori cerita</option>${options}</select></div><div class="field"><label for="story-title">Judul cerita</label><input class="search-input" id="story-title" maxlength="90" placeholder="Apa yang sedang kamu rasakan?" required /></div><div class="field"><label for="story-body">Ceritamu</label><textarea id="story-body" maxlength="1200" placeholder="Tulis dengan cara yang terasa nyaman untukmu..." required></textarea><span style="font-size:10px;color:#929c94;text-align:right" id="story-count">0 / 1200</span></div><label class="toggle-row"><span><strong>Bagikan secara anonim</strong><span>Namamu tidak akan ditampilkan di cerita ini.</span></span><input class="switch" type="checkbox" id="anonymous-toggle" checked aria-label="Bagikan secara anonim" /></label><button class="button button-primary button-block" type="submit">${icon('heart')} Bagikan dengan komunitas</button></form></div>`;
	shell(content, 'Bagikan Cerita');
}

function renderChat() {
	const content = `${heading('Ruang pribadi', 'Teman Virtual', 'Tempat tenang untuk mengurai isi pikiranmu, tanpa penghakiman.')}<section class="chat-panel"><div class="chat-top"><div class="avatar">${icon('leaf')}</div><div><strong>Teman Teduh</strong><span>Hadir untuk mendengarkan</span></div><span class="secure-note">${icon('lock')} Ruang privat • demo lokal</span></div><div class="chat-messages" id="chat-messages">${messages.map((message) => `<div class="message ${message.mine ? 'mine' : ''}">${escapeHtml(message.text)}</div>`).join('')}</div><div class="quick-replies"><button data-quick="Yuk coba latihan napas 4-7-8">4-7-8 Breathing</button><button data-quick="Aku sedang merasa kewalahan">Aku kewalahan</button><button data-quick="Bantu aku mulai bercerita">Bantu aku mulai</button></div><form class="chat-compose" id="chat-form"><input id="chat-input" placeholder="Tulis apa yang ada di pikiranmu..." autocomplete="off" aria-label="Pesan untuk Teman Virtual" /><button type="submit" aria-label="Kirim pesan">${icon('send')}</button></form><div class="chat-disclaimer">Teman Virtual bukan pengganti bantuan profesional. Demo ini tidak mengirim pesan ke server.</div></section>`;
	shell(content, 'Teman Virtual');
	const messagesContainer = document.querySelector('#chat-messages');
	messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

const mediaItems = [
	{ id: 'breath', category: 'Relaksasi', title: 'Napas pelan, bahu lebih ringan', source: 'Ruang Teduh · 6 menit', color: '' },
	{ id: 'morning', category: 'Motivasi', title: 'Mulai dari langkah yang kecil', source: 'Nara Pradipta · 8 menit', color: 'coral' },
	{ id: 'rain', category: 'Relaksasi', title: 'Suara hujan untuk istirahat', source: 'Jeda Studio · 30 menit', color: 'blue' },
	{ id: 'talk', category: 'Podcast', title: 'Bertumbuh tanpa terburu-buru', source: 'Podcast Sebentar · 22 menit', color: 'gold' },
];
function renderInspiration() {
	const filters = ['Semua', 'Podcast', 'Motivasi', 'Relaksasi'].map((item) => `<button class="filter-chip ${mediaFilter === item ? 'active' : ''}" data-media-filter="${item}">${item}</button>`).join('');
	const media = mediaItems.filter((item) => mediaFilter === 'Semua' || item.category === mediaFilter).map((item) => `<article class="media-card"><div class="media-art ${item.color}"><strong>${escapeHtml(item.title)}</strong><span class="play-mark">${icon('play')}</span></div><div class="media-info"><strong>${escapeHtml(item.title)}</strong><span>${escapeHtml(item.source)}</span><div class="media-actions"><button data-action="helpful" data-id="${item.id}" class="${helpedMedia.has(item.id) ? 'selected' : ''}">${icon('heart')} ${helpedMedia.has(item.id) ? 'Membantu' : 'Ditemukan membantu'}</button><button data-action="play-media" data-title="${escapeAttr(item.title)}">Putar ${icon('play')}</button></div></div></article>`).join('');
	const content = `${heading('Ambil jeda', 'Jeda & Inspirasi', 'Sedikit ruang untuk bernapas, mendengar, dan kembali pada dirimu.')}<div class="filters">${filters}</div><div class="gallery-grid">${media}</div><section class="rail-section" style="margin-top:28px"><div class="rail-title">Punya sesuatu yang menenangkan?</div><p style="font-size:11px;color:#758178;line-height:1.6">Bagikan video YouTube yang mungkin membantu teman lain menemukan jeda.</p><form id="video-form" style="display:flex;gap:8px"><input class="search-input" type="url" placeholder="Tempel tautan YouTube..." required style="font-size:11px" /><button class="button button-primary" style="min-height:40px;padding:8px 12px">Bagikan</button></form></section>`;
	shell(content, 'Jeda & Inspirasi');
}

function renderProfile() {
	const days = Math.max(1, Number(localStorage.getItem('ruangteduh-days') || 12));
	const hugs = Number(localStorage.getItem('ruangteduh-hugs') || 7);
	const content = `${heading('Ruang pribadimu', 'Profil & Pengaturan', 'Ruang kecil yang kamu bangun dengan kebaikan sehari-hari.')}<section class="profile-head"><div class="avatar profile-avatar">${initials(userName)}</div><div><h2>${escapeHtml(userName)}</h2><p>Anggota sejak 21 September 2026</p></div><button class="icon-button" aria-label="Ubah profil" data-action="edit-profile" style="margin-left:auto">${icon('settings')}</button></section><section class="stats"><div class="stat"><strong>${posts.filter((post) => post.own).length}</strong><span>Cerita dibagikan</span></div><div class="stat"><strong>${hugs}</strong><span>Peluk diberikan</span></div><div class="stat"><strong>${days}</strong><span>Hari bergabung</span></div></section><div class="settings-list"><div class="rail-title">Pengaturan</div><div class="settings-row" data-action="privacy">${icon('shield')}<strong>Privasi & keamanan</strong><span>${icon('chevron')}</span></div><div class="settings-row" data-action="notifications">${icon('bell')}<strong>Notifikasi</strong><span>${icon('chevron')}</span></div><div class="settings-row" data-action="help">${icon('heart')}<strong>Bantuan & dukungan</strong><span>${icon('chevron')}</span></div></div><div class="logout-row"><button class="button button-danger" data-action="logout">Keluar dari akun</button></div>`;
	shell(content, 'Profil & Pengaturan');
}

function renderProfessional() {
	const content = `<div class="story-wrap">${heading('Untuk para pendamping', 'Daftar sebagai profesional', 'Bantu kami menjaga RuangTeduh sebagai tempat yang aman dan tepercaya.')}<div class="story-prompt">${icon('shield')} Identitas dan dokumen profesionalmu hanya digunakan untuk proses verifikasi dan tidak ditampilkan kepada publik.</div><form id="professional-form"><div class="field"><label for="pro-name">Nama lengkap</label><input id="pro-name" placeholder="Sesuai nama pada dokumen" required /></div><div class="field"><label for="pro-email">Email profesional</label><input id="pro-email" type="email" placeholder="nama@email.com" required /></div><div class="field"><label for="pro-role">Profesi</label><select id="pro-role" required><option value="">Pilih profesi</option><option>Psikolog</option><option>Psikiater</option><option>Konselor</option><option>Guru BK</option></select></div><div class="field"><label for="pro-number">Nomor lisensi / SIPP / NIP</label><input id="pro-number" placeholder="Masukkan nomor identitas profesional" required /></div><div class="field"><label>Dokumen bukti kredibilitas</label><label class="upload-box" for="professional-file">${icon('upload')}<span><strong>Klik untuk mengunggah</strong><br />Foto lisensi, SIPP/NIP, atau dokumen PDF</span><span id="upload-name">${uploadedName ? escapeHtml(uploadedName) : 'PNG, JPG, atau PDF'}</span></label></div><button class="button button-primary button-block" type="submit">Kirim untuk verifikasi</button><p style="text-align:center;font-size:10px;color:#8e9990">Proses verifikasi dilakukan oleh tim RuangTeduh.</p></form></div>`;
	shell(content, 'Verifikasi Profesional');
}

function render() {
	if (view === 'welcome') return renderWelcome();
	if (view === 'email') return renderEmailAuth();
	if (view === 'professional') return renderProfessional();
	if (view === 'story') return renderStory();
	if (view === 'chat') return renderChat();
	if (view === 'inspiration') return renderInspiration();
	if (view === 'profile') return renderProfile();
	return renderCommunity();
}

function toast(message) {
	const region = document.querySelector('#toast-region');
	const item = document.createElement('div');
	item.className = 'toast';
	item.textContent = message;
	region.append(item);
	setTimeout(() => item.remove(), 3200);
}
function confirmModal(title, body, onConfirm) {
	const backdrop = document.createElement('div');
	backdrop.className = 'modal-backdrop';
	backdrop.innerHTML = `<section class="modal" role="dialog" aria-modal="true"><h2>${escapeHtml(title)}</h2><p>${escapeHtml(body)}</p><div class="modal-footer"><button class="button button-outline" data-modal-cancel>Batal</button><button class="button button-primary" data-modal-confirm>Ya, lanjutkan</button></div></section>`;
	document.body.append(backdrop);
	backdrop.querySelector('[data-modal-cancel]').onclick = () => backdrop.remove();
	backdrop.querySelector('[data-modal-confirm]').onclick = () => { backdrop.remove(); onConfirm(); };
	backdrop.addEventListener('click', (event) => { if (event.target === backdrop) backdrop.remove(); });
}
function renderReplies(post, backdrop) {
	const replies = post.replies || [{ name: 'Teman Empatik', badge: 'friend', text: 'Terima kasih sudah berbagi. Kamu tidak harus selalu kuat sendirian. Semoga ada ruang kecil untukmu beristirahat hari ini.', hugs: 3, understands: 2 }];
	post.replies = replies;
	backdrop.querySelector('.replies-list').innerHTML = replies.map((reply, index) => `<article class="feed-post" style="margin:0 0 10px;padding:14px"><div class="post-head"><div class="avatar sun">${initials(reply.name)}</div><div class="post-meta"><strong>${escapeHtml(reply.name)}</strong></div>${reply.badge === 'professional' ? `<span class="badge">${icon('check')} Psikolog terverifikasi</span>` : '<span class="badge friend">✦ Teman Empatik</span>'}<button class="post-menu" aria-label="Laporkan balasan" data-action="reply-report" data-id="${post.id}" data-reply="${index}">${icon('flag')}</button></div><p style="margin-top:11px">${escapeHtml(reply.text)}</p><div class="post-actions"><button class="reaction" data-action="reply-react" data-kind="hugs" data-id="${post.id}" data-reply="${index}">${icon('heart')} Peluk <span>${reply.hugs}</span></button><button class="reaction understand" data-action="reply-react" data-kind="understands" data-id="${post.id}" data-reply="${index}">${icon('hand')} Aku paham <span>${reply.understands}</span></button></div></article>`).join('');
	backdrop.querySelector('.replies-count').textContent = `${replies.length} balasan`;
}
function commentsModal(post) {
	const backdrop = document.createElement('div');
	backdrop.className = 'modal-backdrop';
	backdrop.innerHTML = `<section class="modal" role="dialog" aria-modal="true"><h2>Balasan untuk ceritamu</h2><p>${escapeHtml(post.title)}</p><div class="replies-count" style="font-size:10px;color:#839087;margin-bottom:10px"></div><div class="replies-list" style="display:grid;gap:8px;max-height:44vh;overflow:auto"></div><form class="reply-compose" style="display:flex;gap:8px;margin-top:15px"><input class="search-input" aria-label="Tulis balasan" placeholder="Tulis balasan dengan empati..." required maxlength="500" /><button class="button button-primary" type="submit">Kirim</button></form><div class="modal-footer"><button class="button button-outline" data-modal-cancel>Tutup</button></div></section>`;
	document.body.append(backdrop);
	renderReplies(post, backdrop);
	backdrop.querySelector('[data-modal-cancel]').onclick = () => backdrop.remove();
	backdrop.addEventListener('click', (event) => { if (event.target === backdrop) backdrop.remove(); });
	backdrop.querySelector('.reply-compose').addEventListener('submit', (event) => {
		event.preventDefault();
		const input = event.currentTarget.querySelector('input');
		post.replies.push({ name: userName, badge: '', text: input.value.trim(), hugs: 0, understands: 0 });
		post.comments = post.replies.length;
		renderReplies(post, backdrop);
		input.value = '';
		renderCommunity();
	});
}

document.addEventListener('click', (event) => {
	const viewButton = event.target.closest('[data-view]');
	if (viewButton) { view = viewButton.dataset.view; if (view === 'email') authMode = authMode || 'login'; render(); return; }
	const filter = event.target.closest('[data-category-filter]');
	if (filter) { activeCategory = filter.dataset.categoryFilter; renderCommunity(); return; }
	const mediaFilterButton = event.target.closest('[data-media-filter]');
	if (mediaFilterButton) { mediaFilter = mediaFilterButton.dataset.mediaFilter; renderInspiration(); return; }
	const quick = event.target.closest('[data-quick]');
	if (quick) { sendChat(quick.dataset.quick); return; }
	const action = event.target.closest('[data-action]');
	if (!action) return;
	const { action: name, id } = action.dataset;
	if (name === 'toggle-auth') { authMode = authMode === 'login' ? 'signup' : 'login'; render(); }
	if (name === 'email-auth') { view = 'email'; render(); }
	if (name === 'guest' || name === 'google') { view = 'community'; render(); toast(name === 'google' ? 'Demo: sambungkan Google Sign-In untuk autentikasi nyata.' : 'Selamat datang. Kamu sedang menjelajah sebagai tamu.'); }
	if (name === 'react') {
		const post = posts.find((item) => item.id === Number(id));
		const kind = action.dataset.kind;
		post[kind] += 1;
		if (kind === 'hugs') localStorage.setItem('ruangteduh-hugs', String(Number(localStorage.getItem('ruangteduh-hugs') || 7) + 1));
		renderCommunity();
	}
	if (name === 'report') confirmModal('Laporkan cerita ini?', 'Laporan akan ditinjau oleh moderator. Konten yang melecehkan dapat dikenai peringatan hingga pemblokiran akun.', () => toast('Terima kasih, laporanmu sudah dicatat untuk moderator.'));
	if (name === 'comments') { const post = posts.find((item) => item.id === Number(id)); if (post) commentsModal(post); }
	if (name === 'reply-react') {
		const post = posts.find((item) => item.id === Number(id));
		const reply = post?.replies?.[Number(action.dataset.reply)];
		if (reply) { reply[action.dataset.kind] += 1; renderReplies(post, action.closest('.modal-backdrop')); }
	}
	if (name === 'reply-report') confirmModal('Laporkan balasan ini?', 'Balasan yang mengejek atau menyakiti dapat ditinjau moderator dan dikenai peringatan hingga pemblokiran akun.', () => toast('Terima kasih, laporan balasan sudah dikirim.'));
	if (name === 'focus-search') { const search = document.querySelector('#post-search'); if (search) search.focus(); else { view = 'community'; render(); document.querySelector('#post-search')?.focus(); } }
	if (name === 'notifications') toast('Belum ada notifikasi baru.');
	if (name === 'professionals') toast('Daftar profesional terverifikasi akan segera tersedia.');
	if (name === 'helpful') { helpedMedia.has(id) ? helpedMedia.delete(id) : helpedMedia.add(id); renderInspiration(); }
	if (name === 'play-media') toast(`Memutar: ${action.dataset.title} (pratinjau demo)`);
	if (name === 'logout') confirmModal('Keluar dari RuangTeduh?', 'Kamu bisa kembali kapan saja. Sesi demo ini akan diakhiri.', () => { view = 'welcome'; render(); });
	if (name === 'privacy') toast('Pengaturan privasi: kontrol ceritamu dengan mode anonim.');
	if (name === 'notifications') toast('Preferensi notifikasi disimpan di pengaturan akun.');
	if (name === 'help') toast('Untuk bantuan, hubungi teman@ruangteduh.id.');
	if (name === 'edit-profile') { const next = window.prompt('Nama panggilan baru:', userName); if (next?.trim()) { userName = next.trim(); localStorage.setItem('ruangteduh-name', userName); renderProfile(); } }
});

document.addEventListener('input', (event) => {
	if (event.target.id === 'post-search') { searchTerm = event.target.value; const cursor = event.target.selectionStart; renderCommunity(); const next = document.querySelector('#post-search'); next.focus(); next.setSelectionRange(cursor, cursor); }
	if (event.target.id === 'story-body') document.querySelector('#story-count').textContent = `${event.target.value.length} / 1200`;
});

document.addEventListener('submit', (event) => {
	event.preventDefault();
	if (event.target.id === 'email-form') {
		const data = new FormData(event.target);
		const enteredName = data.get('name') || data.get('email').toString().split('@')[0];
		userName = enteredName.toString().trim();
		localStorage.setItem('ruangteduh-name', userName);
		view = 'community'; render(); toast('Demo akun berhasil dibuka. Selamat datang.');
	}
	if (event.target.id === 'story-form') {
		const category = document.querySelector('#story-category').value;
		if (!category) return;
		const anonymous = document.querySelector('#anonymous-toggle').checked;
		const title = document.querySelector('#story-title').value.trim();
		const body = document.querySelector('#story-body').value.trim();
		posts.unshift({ id: Date.now(), name: anonymous ? 'Teman Anonim' : userName, initials: anonymous ? '?' : initials(userName), avatar: '', time: 'Baru saja', category, badge: '', title, body, hugs: 0, understands: 0, comments: 0, own: true });
		activeCategory = 'Semua'; searchTerm = ''; view = 'community'; render(); toast('Ceritamu sudah dibagikan dengan komunitas.');
	}
	if (event.target.id === 'chat-form') { const input = document.querySelector('#chat-input'); const text = input.value.trim(); if (text) sendChat(text); }
	if (event.target.id === 'video-form') { toast('Terima kasih sudah berbagi video. Tautanmu menunggu tinjauan moderator.'); event.target.reset(); }
	if (event.target.id === 'professional-form') {
		if (!uploadedName) { toast('Mohon unggah dokumen profesional terlebih dahulu.'); return; }
		toast('Pendaftaran diterima. Tim kami akan meninjau dokumenmu.');
		view = 'welcome'; render();
	}
});

function sendChat(text) {
	messages.push({ mine: true, text });
	const normalized = text.toLowerCase();
	let response = 'Terima kasih sudah mempercayakan cerita itu di sini. Kedengarannya cukup berat. Apa yang paling kamu butuhkan saat ini: ditemani, didengarkan, atau memikirkan langkah kecil berikutnya?';
	if (normalized.includes('napas') || normalized.includes('4-7-8')) response = 'Kita coba bersama, ya. Tarik napas lewat hidung selama 4 hitungan, tahan selama 7, lalu embuskan perlahan selama 8. Ulangi dengan nyaman, berhenti kapan saja jika terasa tidak nyaman.';
	else if (normalized.includes('kewalahan') || normalized.includes('overwhelmed')) response = 'Saat semuanya terasa terlalu banyak, kita tidak perlu menyelesaikan semuanya sekaligus. Coba sebutkan satu hal kecil yang paling mendesak, atau kita bisa diam sejenak dan bernapas bersama.';
	else if (normalized.includes('bantu aku mulai')) response = 'Kamu bisa mulai dari satu kalimat sederhana: “Akhir-akhir ini aku merasa...” Tidak harus runtut. Aku akan mendengarkan tanpa menghakimi.';
	messages.push({ mine: false, text: response });
	renderChat();
}

document.addEventListener('change', (event) => {
	if (event.target.id === 'professional-file' && event.target.files[0]) {
		uploadedName = event.target.files[0].name;
		const label = document.querySelector('#upload-name');
		if (label) label.textContent = uploadedName;
	}
});

render();
