'use client'

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <main className="grid min-h-dvh place-items-center bg-ink px-5 text-center">
      <div>
        <p className="font-mono text-[13px] font-bold tracking-[2px] text-coral">✗ 500 · SOMETHING BROKE</p>
        <h1 className="mt-4 text-[18vw] font-black uppercase leading-[.85] tracking-[-4px] d:text-[150px] d:tracking-[-6px]">Oops<span className="text-lime">.</span></h1>
        <p className="mx-auto mt-6 max-w-[420px] text-[17px] leading-relaxed text-soft">An unexpected error happened. It’s been noted — try again.</p>
        <button type="button" onClick={reset} className="cta-a mt-8 cursor-pointer rounded-xl border-0 bg-lime px-[22px] py-3.5 text-[15px] font-extrabold text-ink">Try again</button>
      </div>
    </main>
  )
}
