import { services } from '@/lib/content'

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-[1376px] px-[18px] py-[72px] d:px-7 d:pt-10 d:pb-[120px]">
      <div className="mb-[30px] flex flex-wrap items-end justify-between gap-5">
        <div>
          <div className="mb-3 font-mono text-[13px] font-bold tracking-[2px] text-lime">(01) SERVICES</div>
          <h2 className="sv sv-inL m-0 text-[40px] font-black leading-[0.95] tracking-[-1px] d:text-[72px] d:tracking-[-3px]">What I do</h2>
        </div>
        <p className="m-0 max-w-[360px] text-base leading-[1.6] text-muted">Three things I care about, in the order I&apos;d put them on a job description.</p>
      </div>
      <div className="border-t border-line">
        {services.map((v) => (
          <div key={v.num} className="sv sv-inR group grid grid-cols-1 items-center gap-2.5 rounded-[4px] border-b border-line px-1 py-6 transition-colors duration-300 hover:bg-lime hover:text-ink d:grid-cols-[90px_minmax(0,1.2fr)_minmax(0,1fr)_40px] d:gap-6 d:px-4 d:py-[34px]">
            <span className="font-mono text-sm font-bold text-muted group-hover:text-ink d:text-lg">{v.num}</span>
            <div>
              <h3 className="m-0 text-[42px] font-extrabold leading-none tracking-[-1.5px]">{v.title}</h3>
              <p className="mt-2.5 mb-0 text-base leading-[1.5] text-muted group-hover:text-ink">{v.text}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {v.items.map((i) => (
                <span key={i} className="rounded-full border border-edge px-3.5 py-1.5 text-sm leading-normal font-medium text-chip group-hover:border-ink group-hover:text-ink">{i}</span>
              ))}
            </div>
            <span aria-hidden="true" className="hidden text-[28px] font-normal d:block">↗</span>
          </div>
        ))}
      </div>
    </section>
  )
}
