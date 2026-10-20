# imeer.dev - Zameer Abbas portfolio

Next.js 16 (App Router) + Tailwind CSS 4. Dark "Option 2" design: lime / off-white on ink, coral accent.

## Run

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
```

Create a local environment file before running the app:

```bash
cp .env.example .env.local
```

`CONTACT_EMAIL` is set to `abbaszameer234@gmail.com`. The first message sent through the form triggers a one-time FormSubmit activation email to that inbox; click the link once.

## Deploy (Vercel)

1. Import the repository in Vercel with framework preset `Next.js`.
2. Add `CONTACT_EMAIL=abbaszameer234@gmail.com` under Environment Variables for Production, Preview, and Development.
3. Deploy the project.
4. Open Project Settings → Domains, add `imeer.dev`, then follow Vercel's DNS instructions.

The canonical site URL, Open Graph metadata, and sitemap already use `https://imeer.dev`.

## Where things are

| What                                           | Where                           |
| ---------------------------------------------- | ------------------------------- |
| All copy, links, projects, FAQ                 | `lib/content.ts`                |
| Colours, fonts, breakpoint (`d:` = ≥821px)     | `app/globals.css` `@theme`      |
| Load / scroll / hover motion                   | `app/globals.css`               |
| Sections                                       | `components/*.tsx`              |
| CV file                                        | `public/cv/Zameer-Abbas-CV.pdf` |
| Project screenshots                            | `public/images/projects/*.webp` |
| Contact API (validation, honeypot, rate limit) | `app/api/contact/route.ts`      |
| Security headers                               | `next.config.ts`                |
| Per-request CSP nonce                          | `proxy.ts`                      |

## Security

- Strict CSP: scripts only with a per-request nonce (`'strict-dynamic'`), no third-party origins, `frame-ancestors 'none'`, `object-src 'none'`, `form-action 'self'`.
- HSTS (preload), `nosniff`, `X-Frame-Options: DENY`, `Referrer-Policy`, `Permissions-Policy`, COOP/CORP, no `X-Powered-By`.
- Contact API: same-origin check, JSON only, 10 KB body cap, field validation, honeypot, 5 messages / 10 min per IP, 8 s upstream timeout, generic error messages.
- Fonts and images are self-hosted (no runtime calls to Google).
- Volumetric DDoS protection comes from Vercel's edge firewall; turn on "Attack Challenge Mode" in the Vercel dashboard if you ever get flooded. The in-memory rate limit is per instance — swap to Upstash/Vercel KV if the form gets abused.

## Motion

- Load: staggered rise, SECURE scramble every 7 s, rotating header ticker, floating sparkle, rotating rings, cursor spotlight on the grid.
- Tapes: two crossed marquees moving in opposite directions.
- Scroll: native CSS scroll-driven animations (`animation-timeline: view()`) — Chrome/Edge animate, other browsers show content without the effect. Scroll progress bar on top.
- `prefers-reduced-motion` turns all of it off.
