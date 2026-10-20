'use client'
import { useState } from 'react'
import { faqs } from '@/lib/content'

export default function Faq() {
  const [open, setOpen] = useState(0)
  return (
    <section id="faq" className="mx-auto max-w-[1056px] px-[18px] py-[72px] d:px-7 d:pt-[60px] d:pb-[120px]">
      <div className="mb-10 text-center">
        <div className="mb-3 font-mono text-[13px] font-bold tracking-[2px] text-lime">(05) FAQ</div>
        <h2 className="sv sv-inL m-0 text-[40px] font-black leading-[.95] tracking-[-1px] d:text-[64px] d:tracking-[-3px]">Quick answers</h2>
      </div>
      <div className="flex flex-col gap-3">
        {faqs.map((f, i) => {
          const isOpen = open === i
          return (
            <div key={f.q} className={`sv sv-up overflow-hidden rounded-[20px] border bg-card ${isOpen ? 'border-lime' : 'border-line2'}`}>
              <button
                type="button"
                id={`faq-q${i}`}
                aria-expanded={isOpen}
                aria-controls={`faq-a${i}`}
                onClick={() => setOpen(isOpen ? -1 : i)}
                className="flex w-full cursor-pointer items-center justify-between gap-4 border-0 bg-transparent px-6 py-[22px] text-left text-[19px] font-bold text-bone"
              >
                {f.q}
                <span aria-hidden="true" className={`flex size-[34px] shrink-0 items-center justify-center rounded-full text-[20px] ${isOpen ? 'bg-lime text-ink' : 'bg-line2 text-bone'}`}>{isOpen ? '−' : '+'}</span>
              </button>
              <p id={`faq-a${i}`} role="region" aria-labelledby={`faq-q${i}`} hidden={!isOpen} className="m-0 px-6 pb-[22px] text-[16px] leading-[1.6] text-soft">{f.a}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
