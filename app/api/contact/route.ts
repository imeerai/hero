import { NextRequest, NextResponse } from 'next/server'
import { EMAIL } from '@/lib/content'

// ponytail: in-memory per-IP limiter, resets on cold start and is per-instance.
// Vercel's firewall handles volumetric DDoS; move this to Upstash/KV if abuse gets real.
const hits = new Map<string, number[]>()
const WINDOW = 10 * 60_000
const MAX = 5

function limited(ip: string) {
  const now = Date.now()
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW)
  recent.push(now)
  hits.set(ip, recent)
  if (hits.size > 5000) hits.clear() // bound memory
  return recent.length > MAX
}

const EMAIL_RE = /^[^\s@]{1,64}@[^\s@]{1,190}\.[^\s@]{2,24}$/
const clean = (v: unknown, max: number) => (typeof v === 'string' ? v.trim().slice(0, max + 1) : '')

export async function POST(req: NextRequest) {
  // same-origin only
  const origin = req.headers.get('origin')
  let sameOrigin = false
  try { sameOrigin = !!origin && new URL(origin).host === req.headers.get('host') } catch {}
  if (!sameOrigin) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
  }
  if (!req.headers.get('content-type')?.includes('application/json')) {
    return NextResponse.json({ error: 'Unsupported content type' }, { status: 415 })
  }
  const ip = (req.headers.get('x-forwarded-for') ?? '').split(',')[0].trim() || 'unknown'
  if (limited(ip)) {
    return NextResponse.json({ error: 'Too many messages. Try again later.' }, { status: 429 })
  }

  const raw = await req.text()
  if (raw.length > 10_000) return NextResponse.json({ error: 'Message too large' }, { status: 413 })
  let body: Record<string, unknown>
  try { body = JSON.parse(raw) } catch { return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 }) }

  // honeypot: real users never fill this hidden field
  if (clean(body.company, 100)) return NextResponse.json({ ok: true })

  const name = clean(body.name, 80)
  const email = clean(body.email, 254)
  const message = clean(body.message, 2000)
  if (!name || name.length > 80) return NextResponse.json({ error: 'Please enter your name.' }, { status: 400 })
  if (!EMAIL_RE.test(email) || email.length > 254) return NextResponse.json({ error: 'Please enter a valid email.' }, { status: 400 })
  if (message.length < 10 || message.length > 2000) return NextResponse.json({ error: 'Message should be 10–2000 characters.' }, { status: 400 })

  const to = process.env.CONTACT_EMAIL || EMAIL
  try {
    const r = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(to)}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ name, email, message, _subject: `Portfolio message from ${name}`, _template: 'table', _captcha: 'false' }),
      signal: AbortSignal.timeout(8000),
    })
    if (!r.ok) throw new Error(String(r.status))
    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: 'Could not send right now. Please email me directly.' }, { status: 502 })
  }
}

export function GET() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405, headers: { Allow: 'POST' } })
}
