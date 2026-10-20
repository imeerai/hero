import Image from 'next/image'
import { featured, more, GITHUB } from '@/lib/content'

const ext = { target: '_blank', rel: 'noopener noreferrer' }
const pill = 'inline-flex min-h-[46px] items-center rounded-full px-5 no-underline'

export default function Work() {
  return (
    <section id="work" className="mx-auto max-w-[1376px] px-[18px] py-[72px] d:px-7 d:pt-10 d:pb-[120px]">
      <div className="mb-11 flex flex-wrap items-end justify-between gap-5">
        <div>
          <div className="mb-3 font-mono text-[13px] font-bold tracking-[2px] text-lime">(02) FEATURED WORK</div>
          <h2 className="sv sv-inL m-0 text-[40px] font-black leading-[0.95] tracking-[-1px] d:text-[72px] d:tracking-[-3px]">Built, tested,<br />shipped.</h2>
        </div>
        <a href={GITHUB} {...ext} className="inline-flex min-h-12 items-center rounded-full border border-edge px-[22px] font-semibold no-underline">View all on GitHub ↗</a>
      </div>

      <div className="flex flex-col gap-7">
        {featured.map((f) => (
          <article key={f.title} className={`sv sv-pop lift flex flex-col overflow-clip rounded-[28px] border border-line2 bg-card ${f.reverse ? 'd:flex-row-reverse' : 'd:flex-row'}`}>
            <div className="flex min-w-0 items-center bg-card2 p-[26px] d:flex-[1.25_1_0]">
              <Image src={f.image} alt={`${f.title} screenshot`} width={f.w} height={f.h} sizes="(min-width: 821px) 55vw, 100vw" className="sv sv-zoom block h-auto w-full rounded-2xl border border-line" />
            </div>
            <div className="flex min-w-0 flex-col justify-center gap-4 p-10 d:flex-[1_1_0]">
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-lime px-3 py-1 text-xs leading-normal font-extrabold tracking-[1px] text-ink">{f.label}</span>
                <span className="rounded-full border border-edge px-[11px] py-[3px] text-xs leading-normal text-chip">{f.type}</span>
              </div>
              <h3 className="m-0 text-[46px] font-black leading-none tracking-[-2px]">{f.title}</h3>
              <p className="m-0 text-base leading-[1.6] text-soft">{f.description}</p>
              <div className="flex flex-wrap gap-2">
                {f.tags.map((t) => <span key={t} className="font-mono text-xs text-muted">#{t}</span>)}
              </div>
              <div className="mt-1.5 flex flex-wrap gap-2.5">
                <a href={f.demo} {...ext} className={`${pill} bg-bone font-bold text-ink hover:text-ink`}>Live demo ↗</a>
                <a href={f.code} {...ext} className={`${pill} border border-edge font-semibold`}>Code</a>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-7 grid grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))] gap-5">
        {more.map((m) => (
          <a key={m.title} href={m.demo} {...ext} className="sv sv-up lift flex flex-col gap-3.5 rounded-[22px] border border-line2 bg-card p-4 no-underline">
            <div className="relative aspect-[16/10] overflow-hidden rounded-[14px]">
              <Image src={m.image} alt={`${m.title} screenshot`} fill sizes="(min-width: 821px) 33vw, 100vw" className="object-cover" />
            </div>
            <div className="flex items-center justify-between px-1.5 pb-1.5">
              <span className="text-xl font-extrabold tracking-[-0.5px] text-bone">{m.title}</span>
              <span className="text-[13px] text-muted">{m.type} ↗</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
