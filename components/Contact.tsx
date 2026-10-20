'use client'
import { useState } from 'react'
import { EMAIL, GITHUB, LINKEDIN } from '@/lib/content'

type Status = { kind: 'idle' | 'sending' | 'sent' | 'error'; msg?: string }
const field = 'h-[52px] -mt-2 box-border border-0 border-b border-edge bg-transparent px-0.5 text-[18px] text-bone outline-offset-2 placeholder:text-muted'
const label = 'text-[13px] font-bold tracking-[1px] text-muted'
const pill = 'inline-flex min-h-11 items-center rounded-full border border-edge px-[18px] font-semibold no-underline'

export default function Contact() {
  const [status, setStatus] = useState<Status>({ kind: 'idle' })

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    setStatus({ kind: 'sending' })
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(data.error || 'Could not send right now. Please email me directly.')
      form.reset()
      setStatus({ kind: 'sent', msg: 'Thanks! Your message is on its way.' })
    } catch (err) {
      setStatus({ kind: 'error', msg: err instanceof Error ? err.message : 'Something went wrong.' })
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-[1376px] px-[18px] pt-10 pb-[72px] d:px-7 d:pb-[120px]">
      <div className="sv sv-pop flex flex-wrap gap-12 rounded-[24px] border border-line2 bg-card px-5 py-7 d:rounded-[32px] d:p-12">
        <div className="flex min-w-0 flex-[1_1_380px] flex-col gap-5">
          <h2 className="sv sv-inL m-0 text-[40px] font-black leading-[.9] tracking-[-1px] d:text-[96px] d:tracking-[-5px]">Let&apos;s talk<span className="text-lime">.</span></h2>
          <p className="m-0 max-w-[420px] text-[17px] leading-[1.6] text-soft">Hiring for QA, looking for an intern, or have a project? Send a message — it lands straight in my inbox.</p>
          <a href={`mailto:${EMAIL}`} className="text-[22px] font-bold underline decoration-lime underline-offset-[6px] [overflow-wrap:anywhere]">{EMAIL}</a>
          <div className="flex gap-2.5">
            <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className={pill}>LinkedIn ↗</a>
            <a href={GITHUB} target="_blank" rel="noopener noreferrer" className={pill}>GitHub ↗</a>
          </div>
        </div>
        <form onSubmit={submit} className="flex min-w-0 flex-[1_1_400px] flex-col gap-3.5">
          <label htmlFor="c-name" className={label}>NAME</label>
          <input id="c-name" name="name" required maxLength={80} autoComplete="name" placeholder="Your name" className={field} />
          <label htmlFor="c-email" className={label}>EMAIL</label>
          <input id="c-email" name="email" type="email" required maxLength={254} autoComplete="email" placeholder="you@company.com" className={field} />
          <label htmlFor="c-msg" className={label}>MESSAGE</label>
          <textarea id="c-msg" name="message" rows={4} required minLength={10} maxLength={2000} placeholder="Tell me about the role or project" className={`${field} !h-auto resize-y py-2.5 leading-normal`} />
          {/* honeypot: hidden from people, bots fill it */}
          <input name="company" tabIndex={-1} autoComplete="off" aria-hidden="true" className="absolute -left-[9999px] size-px opacity-0" />
          <button type="submit" disabled={status.kind === 'sending'} className="mt-2.5 min-h-[54px] cursor-pointer rounded-full border-0 bg-lime text-[17px] font-extrabold text-ink disabled:cursor-wait disabled:opacity-70">
            {status.kind === 'sending' ? 'Sending…' : 'Send message ↗'}
          </button>
          <p role="status" aria-live="polite" className={`m-0 text-[15px] font-semibold empty:hidden ${status.kind === 'error' ? 'text-coral' : 'text-lime'}`}>{status.msg}</p>
        </form>
      </div>
    </section>
  )
}
