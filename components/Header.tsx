'use client'
import { useEffect, useState } from 'react'
import { navLinks } from '@/lib/content'

export default function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const esc = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', esc)
    return () => document.removeEventListener('keydown', esc)
  }, [open])

  return (
    <header className="sticky top-4 z-30 flex justify-center px-4">
      <nav className="relative flex w-[340px] max-w-full items-center justify-between gap-3 rounded-2xl bg-bone py-2.5 pr-2.5 pl-[18px] shadow-[0_10px_30px_-12px_rgba(0,0,0,0.6)] d:w-[820px] d:py-2 d:pr-2 d:pl-5">
        <a href="#top" className="text-[19px] font-black tracking-[-0.3px] text-ink no-underline hover:text-ink">IMEER</a>

        <div className="hidden items-center gap-0.5 d:flex">
          {navLinks.map(([href, label]) => (
            <a key={href} href={href} className="rounded-lg px-2.5 py-2 text-[14px] font-semibold text-ink no-underline transition-colors hover:bg-[#e4e2da] hover:text-ink">{label}</a>
          ))}
        </div>

        <a href="#contact" className="hidden items-center gap-2 rounded-[10px] bg-ink px-4 py-2.5 text-[14px] font-bold text-bone no-underline transition-transform hover:-translate-y-px hover:text-bone d:inline-flex">
          Let&apos;s talk <span className="text-lime">↗</span>
        </a>

        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(!open)}
          className="flex h-9 w-11 cursor-pointer items-center justify-center gap-[3px] rounded-[10px] border-0 bg-ink d:hidden"
        >
          {[0, 1, 2].map((i) => <span key={i} className="size-1 rounded-full bg-lime" />)}
        </button>

        {open && (
          <div id="mobile-menu" className="absolute inset-x-0 top-[calc(100%+8px)] flex flex-col rounded-2xl bg-bone p-2 shadow-[0_20px_40px_-16px_rgba(0,0,0,0.7)] d:hidden">
            {[...navLinks, ['#contact', "Let's talk ↗"] as const].map(([href, label]) => (
              <a key={href} href={href} onClick={() => setOpen(false)} className="rounded-xl px-4 py-3 text-[16px] font-bold text-ink no-underline hover:bg-[#e4e2da] hover:text-ink">{label}</a>
            ))}
          </div>
        )}
      </nav>
    </header>
  )
}
