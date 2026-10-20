import { tapeA, tapeB } from '@/lib/content'

function Row({ words, star, className }: { words: string[]; star: string; className: string }) {
  const items = words.map((w) => <span key={w} className="px-7">{w} <span className={star}>✳</span></span>)
  return (
    <div className={`marquee whitespace-nowrap font-black uppercase max-d:!text-[20px] ${className}`}>
      {items}
      <span aria-hidden="true" className="contents">{items}</span>
    </div>
  )
}

export default function Tapes() {
  return (
    <div className="pointer-events-none relative -mt-[34px] h-[110px] overflow-hidden d:-mt-[55px] d:h-[170px]" aria-label="Skills">
      <div className="absolute -inset-x-10 top-[52px] rotate-[2.4deg] overflow-hidden bg-bone py-3.5 text-ink">
        <Row words={tapeB} star="text-coral" className="rev text-[26px] tracking-[-0.3px]" />
      </div>
      <div className="absolute -inset-x-10 top-[56px] z-[2] -rotate-2 overflow-hidden bg-lime py-[18px] text-ink">
        <Row words={tapeA} star="text-ink" className="text-[34px] tracking-[-0.5px]" />
      </div>
    </div>
  )
}
