export default function Hey() {
  return (
    <section id="about" className="mx-auto max-w-[1400px] px-[18px] py-[72px] d:px-10 d:pt-[140px] d:pb-[120px]">
      <div className="grid grid-cols-1 items-end gap-[22px] d:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)_minmax(0,1fr)] d:gap-8">
        <div className="sv sv-up flex flex-col justify-between gap-4 self-stretch d:gap-[160px]">
          <h2 className="sv sv-inL m-0 text-[40px] font-black leading-none tracking-[-1px] d:text-[96px] d:tracking-[-4px]">Hey!<span className="text-lime">*</span></h2>
          <p className="m-0 text-[22px] font-bold leading-[1.3] tracking-[-0.4px]">I&apos;m Zameer, a Computer Systems Engineering student at MUET, focused on QA, security and full stack.</p>
        </div>
        <div className="sv sv-tilt box-border flex min-h-[300px] flex-col justify-between rounded-[22px] bg-lime p-7 text-ink d:aspect-[4/4.6] d:min-h-0">
          <span className="font-mono text-[13px] font-bold tracking-[1.5px] text-[#3c4a0c]">/HOW I WORK</span>
          <div className="text-[44px] font-black leading-[0.92] tracking-[-2px] d:text-[64px] d:tracking-[-3px]">
            Does it work?<br />
            <span className="text-[#5d6b25]">How well?</span><br />
            <span className="underline decoration-[5px] underline-offset-[6px]">What breaks?</span>
          </div>
        </div>
        <div className="sv sv-up flex flex-col gap-4 text-base leading-[1.6] text-soft">
          <p className="m-0">I don&apos;t just build software. I like understanding how it works, how it can be improved, and what can go wrong.</p>
          <p className="m-0">I build complete web apps, test them with clear test cases and defect reports, and look at them the way an attacker would.</p>
          <a href="#contact" className="inline-flex items-center gap-2.5 font-semibold text-bone hover:text-bone no-underline">
            Get in touch <span className="inline-flex size-[26px] items-center justify-center rounded-[7px] border border-lime text-lime">↗</span>
          </a>
        </div>
      </div>
    </section>
  )
}
