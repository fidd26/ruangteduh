# RuangTeduh API

Cloudflare Worker backend for the RuangTeduh Gemini chat. It is kept separate from the static frontend.

## Endpoint

`POST /api/chat`

Request body:

```json
{
  "messages": [
    { "role": "user", "text": "Aku sedang merasa kewalahan." }
  ]
}
```

Successful response:

```json
{ "reply": "Terima kasih sudah bercerita..." }
```

Only `user` and `model` roles are accepted. The most recent message must be from the user. The endpoint limits the request body, message count, and message length. It does not store or log chat content.

## Deploy

1. Install Node.js, then install Wrangler with `npm install --global wrangler`.
2. In this directory, run `npx wrangler login`.
3. Edit `ALLOWED_ORIGIN` in `wrangler.toml` to the exact production Vercel origin, for example `https://ruangteduh.vercel.app` (no trailing slash).
4. Add the Gemini API key as a Cloudflare secret: `npx wrangler secret put GEMINI_API_KEY`.
5. Deploy with `npx wrangler deploy`.

Do not put the Gemini API key in frontend code, `wrangler.toml`, or source control. Preview deployments have different origins; use a separate Worker environment/configuration for previews rather than allowing arbitrary origins.

## Local development

Set `ALLOWED_ORIGIN` in `wrangler.toml`, add the secret with `npx wrangler secret put GEMINI_API_KEY`, and run `npx wrangler dev`.

The frontend must send JSON to the deployed Worker URL at `/api/chat`. This backend is not connected to `apps.js` yet.