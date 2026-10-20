import { journey } from '@/lib/content'

export default function Journey() {
  return (
    <section id="journey" className="mx-auto max-w-[1376px] px-[18px] py-[72px] d:px-7 d:pt-[120px] d:pb-[100px]">
      <div className="mb-3 font-mono text-[13px] font-bold tracking-[2px] text-lime">(04) JOURNEY</div>
      <h2 className="sv sv-inL mb-10 text-[40px] font-black leading-[.95] tracking-[-1px] d:text-[72px] d:tracking-[-3px]">Where I&apos;ve been</h2>
      <div className="border-t border-line">
        {journey.map((j) => (
          <div key={j.role} className="sv sv-inR flex flex-wrap items-baseline gap-x-8 gap-y-3 border-b border-line px-1 py-7">
            <span className="flex-[0_0_190px] font-mono text-[14px] font-bold text-muted">{j.when}</span>
            <div className="min-w-0 flex-[1_1_320px]">
              <h3 className="m-0 text-[28px] font-extrabold tracking-[-.8px]">{j.role}</h3>
              <p className="mt-1.5 mb-0 text-[15px] leading-[1.55] text-muted">{j.text}</p>
            </div>
            <span className="flex-[0_1_auto] text-[16px] font-semibold text-lime">{j.org}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
