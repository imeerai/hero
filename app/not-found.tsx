import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="relative grid min-h-dvh place-items-center overflow-hidden bg-ink px-5 text-center">
      <div aria-hidden="true" className="hero-grid absolute inset-0" />
      <div className="relative">
        <p className="font-mono text-[13px] font-bold tracking-[2px] text-coral">✗ 404 · TEST FAILED</p>
        <h1 className="mt-4 text-[28vw] font-black uppercase leading-[.85] tracking-[-4px] d:text-[200px] d:tracking-[-8px]">Lost<span className="text-lime">.</span></h1>
        <p className="mx-auto mt-6 max-w-[420px] text-[17px] leading-relaxed text-soft">This page doesn’t exist, or it moved. Nothing broke — I checked.</p>
        <Link href="/" className="cta-a mt-8 inline-flex items-center gap-2.5 rounded-xl bg-lime px-[22px] py-3.5 text-[15px] font-extrabold text-ink no-underline hover:text-ink">Back home →</Link>
      </div>
    </main>
  )
}
