'use client'
import { useEffect, useState } from 'react'
import { CV, EMAIL, GITHUB, LINKEDIN, roles } from '@/lib/content'

const WORD = 'SECURE'
const ABC = 'ABCDEFGHJKLMNPQRSTUVWXYZ#$%&@0123456789'

export default function Hero() {
  const [secure, setSecure] = useState('Secure')
  const [scr, setScr] = useState(false)
  const [clock, setClock] = useState('--:--:--')

  useEffect(() => {
    // cursor spotlight on the grid; stays under the pointer while scrolling
    let px = -9999, py = -9999
    const paint = () => {
      const sp = document.querySelector<HTMLElement>('.hero-spot')
      if (!sp) return
      const r = sp.getBoundingClientRect()
      sp.style.setProperty('--mx', px - r.left + 'px')
      sp.style.setProperty('--my', py - r.top + 'px')
    }
    const move = (e: PointerEvent | MouseEvent) => { px = e.clientX; py = e.clientY; paint() }
    document.addEventListener('pointermove', move, { passive: true })
    document.addEventListener('mousemove', move, { passive: true })
    window.addEventListener('scroll', paint, { passive: true })

    // live Karachi time in the status line
    const tick = () => setClock(new Date().toLocaleTimeString('en-GB', { timeZone: 'Asia/Karachi', hour: '2-digit', minute: '2-digit', second: '2-digit' }))
    tick()
    const clk = setInterval(tick, 1000)

    // SECURE decrypt effect, every 7s
    let sc: ReturnType<typeof setInterval> | undefined, loop: ReturnType<typeof setInterval> | undefined, t: ReturnType<typeof setTimeout> | undefined
    if (!matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const scramble = () => {
        let f = 0
        clearInterval(sc)
        sc = setInterval(() => {
          const done = Math.floor(++f / 3)
          setSecure(WORD.split('').map((ch, k) => (k < done ? ch : ABC[Math.floor(Math.random() * ABC.length)])).join(''))
          setScr(done < WORD.length)
          if (done >= WORD.length) clearInterval(sc)
        }, 45)
      }
      t = setTimeout(scramble, 500)
      loop = setInterval(scramble, 7000)
    }
    return () => {
      document.removeEventListener('pointermove', move)
      document.removeEventListener('mousemove', move)
      window.removeEventListener('scroll', paint)
      clearTimeout(t); clearInterval(sc); clearInterval(loop); clearInterval(clk)
    }
  }, [])

  return (
    <section id="top" className="relative mx-auto max-w-[1400px] px-[18px] py-[72px] d:min-h-[830px] d:px-10 d:pt-[70px] d:pb-0">
      <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 -inset-x-[200px] z-0 overflow-hidden">
        <div className="hero-grid absolute inset-0" />
        <div className="hero-spot absolute inset-0 max-d:hidden" />
        <div className="absolute top-1/2 right-[106px] -translate-y-1/2 rotate-180 text-[96px] leading-[.9] font-black tracking-[-2px] whitespace-nowrap text-[#1b1b19] select-none [writing-mode:vertical-rl] d:right-[calc(170px-max(0px,(100vw-1320px)/2))] d:text-[170px] d:tracking-[-4px]">IMEER.AI</div>
        <div className="orbit absolute top-[46%] left-1/2 -mt-[310px] -ml-[310px] size-[620px] rounded-full border border-dashed border-[#2f2f2d] max-d:hidden">
          <span className="absolute -top-1.5 left-1/2 -ml-1.5 size-3 rounded-full bg-lime" />
        </div>
        <div className="orbit rev absolute top-[46%] left-1/2 -mt-[450px] -ml-[450px] size-[900px] rounded-full border border-[#1f1f1e] max-d:hidden">
          <span className="absolute top-1/2 -left-1 -mt-1 size-2 rounded-full bg-coral" />
          <span className="absolute top-1/2 -right-1 -mt-1 size-2 rounded-[2px] bg-edge" />
        </div>
      </div>

      <svg className="floaty absolute top-[52px] left-[44px] z-[1] max-d:hidden" style={{ '--r': '-12deg' } as React.CSSProperties} width="86" height="86" viewBox="0 0 100 100" aria-hidden="true">
        <path d="M50 0 C55 35 65 45 100 50 C65 55 55 65 50 100 C45 65 35 55 0 50 C35 45 45 35 50 0Z" fill="#d4ff3a" />
      </svg>

      <div className="rise relative z-[1] mt-[18px] flex justify-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-line bg-[rgba(14,14,14,0.6)] px-3.5 py-2 font-mono text-[10px] font-bold tracking-[1.4px] whitespace-nowrap text-soft d:gap-2.5 d:px-4 d:text-[13px] d:tracking-[2px]">
          HI, I&apos;M <span className="font-sans text-[14px] font-extrabold tracking-[.2px] text-bone d:text-[16px] d:tracking-[1px]">Zameer Abbas</span>
          <span className="h-px w-3 bg-edge d:w-[18px]" />CS ENGINEER
        </span>
      </div>

      <h1 className="relative z-[1] mt-[22px] text-center text-[19vw] leading-[.88] font-black tracking-[-3px] text-bone uppercase d:mt-[18px] d:text-[176px] d:leading-[.85] d:tracking-[-7px]">
        <span className="rise d1 block">{[...'Test'].map((c, i) => <span key={i} className="lt">{c}</span>)}<span className="text-coral">.</span> <span className={scr ? 'text-lime' : 'text-bone'}>{secure}</span><span className="text-lime">.</span></span>
        <span className="rise d2 block text-edge">{[...'Build'].map((c, i) => <span key={i} className="lt lt2">{c}</span>)}.</span>
      </h1>

      <div className="rise d2 relative z-[1] mt-6 flex flex-wrap justify-center gap-2.5 d:mt-[34px] d:gap-3">
        <a href={CV} download className="cta-a inline-flex items-center gap-2 rounded-[10px] bg-lime px-4 py-2.5 text-[13px] font-extrabold text-ink no-underline hover:text-ink d:gap-2.5 d:rounded-xl d:px-[22px] d:py-3.5 d:text-[15px]">
          Download CV
          <svg className="size-[13px] d:size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 4v12M6 11l6 6 6-6M5 20h14" /></svg>
        </a>
        <a href="#work" className="cta-a inline-flex items-center gap-2 rounded-[10px] border border-edge px-4 py-2.5 text-[13px] font-bold text-bone no-underline d:gap-2.5 d:rounded-xl d:px-[22px] d:py-3.5 d:text-[15px]">
          View work <span className="text-coral">→</span>
        </a>
      </div>

      <div className="rise d3 relative z-[1] mt-[18px] flex flex-wrap items-center justify-center gap-x-[22px] gap-y-2.5 font-mono text-[10px] font-bold tracking-[1px] text-muted d:mt-[22px] d:text-[12px] d:tracking-[1.5px]">
        <span className="inline-flex items-center gap-2">
          <span className="pulse size-[7px] rounded-full bg-coral" />AVAILABLE FOR
          <span className="inline-block h-4 overflow-hidden align-bottom leading-4">
            <span className="roles flex flex-col text-lime">{[...roles, roles[0]].map((r, i) => <span key={i}>{r}</span>)}</span>
          </span>
        </span>
        <span className="hidden h-3 w-px bg-edge d:inline-block" />
        <span>KARACHI, PK · <span className="text-bone">{clock}</span> PKT</span>
      </div>

      <div className="rise d3 absolute top-[330px] left-2 z-[2] hidden flex-col items-center gap-2.5 d:flex">
        {[
          [GITHUB, 'GitHub', <path key="g" d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65S8.93 17.38 9 18v4M9 18c-4.51 2-5-2-7-2" />],
          [LINKEDIN, 'LinkedIn', <path key="l" d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" />],
          [`mailto:${EMAIL}`, 'Email', <path key="m" d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm18 3-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />],
        ].map(([href, label, icon]) => (
          <a key={label as string} href={href as string} aria-label={label as string} {...(label === 'Email' ? {} : { target: '_blank', rel: 'noopener noreferrer' })} className="flex size-10 items-center justify-center rounded-full border border-line bg-[rgba(14,14,14,0.7)] text-soft transition hover:translate-x-[3px] hover:border-lime hover:bg-lime hover:text-ink">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{icon}</svg>
          </a>
        ))}
        <span className="h-[70px] w-px bg-gradient-to-b from-edge to-transparent" />
      </div>

      <div className="relative z-[1] mt-11 flex flex-col items-start gap-2.5 d:absolute d:inset-x-10 d:bottom-[72px] d:mt-0 d:flex-row d:flex-wrap d:items-end d:justify-between d:gap-3">
        <span className="rise d3 text-[58px] leading-none font-black tracking-[-2px] text-bone d:text-[72px] d:tracking-[-3px]">©2026</span>
        <a href="#about" aria-label="Scroll to about" className="hidden flex-col items-center gap-2 font-mono text-[11px] font-bold tracking-[2px] text-muted no-underline hover:text-lime d:flex">
          <span className="flex h-9 w-[22px] justify-center rounded-xl border-[1.5px] border-edge pt-1.5"><span className="cue-dot h-2 w-1 rounded-[2px] bg-lime" /></span>SCROLL
        </a>
        <span className="rise d3 self-end text-right font-mono text-[12px] font-bold tracking-[1px] text-muted d:self-auto d:text-[14px]">
          /BUILDING SINCE 2022<br /><span className="text-bone">CS ENGINEER · MUET &apos;26</span>
        </span>
      </div>
    </section>
  )
}
