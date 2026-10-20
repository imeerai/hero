import { EMAIL, GITHUB, LINKEDIN } from '@/lib/content'

const head = 'font-mono text-[12px] font-bold tracking-[1.5px] text-muted'
const ext = { target: '_blank', rel: 'noopener noreferrer' }

export default function Footer() {
  return (
    <footer className="border-t border-[#222] px-[18px] pt-[70px] d:px-7">
      <div className="mx-auto max-w-[1320px]">
        <div className="flex flex-wrap justify-between gap-10">
          <h3 className="m-0 flex-[1_1_420px] text-[40px] font-extrabold leading-[1.05] tracking-[-1.5px]">
            Build with purpose.<br /><span className="text-muted">Test thoroughly.</span><br /><span className="text-lime">Secure by design.</span>
          </h3>
          <nav aria-label="Footer" className="flex flex-wrap gap-[60px] text-[16px]">
            <div className="flex flex-col gap-2.5">
              <span className={head}>QUICK LINKS</span>
              <a href="#about" className="no-underline">About</a>
              <a href="#services" className="no-underline">Services</a>
              <a href="#work" className="no-underline">Work</a>
              <a href="#contact" className="no-underline">Contact</a>
            </div>
            <div className="flex flex-col gap-2.5">
              <span className={head}>CONTACT</span>
              <a href={`mailto:${EMAIL}`} className="no-underline">Email</a>
              <a href={LINKEDIN} {...ext} className="no-underline">LinkedIn</a>
              <a href={GITHUB} {...ext} className="no-underline">GitHub</a>
            </div>
          </nav>
        </div>
        <div className="sv sv-spread mt-[50px] overflow-hidden whitespace-nowrap text-center text-[24vw] font-black leading-[.78] tracking-[-12px] text-[#1d1d1c] d:text-[250px]">
          <span aria-hidden="true">IMEER.AI</span>
          <div className="flex flex-wrap justify-between gap-2 pt-[18px] pb-6 text-start text-[13px] font-normal leading-normal tracking-normal whitespace-normal text-muted">
            <span>© 2026 Zameer Abbas</span><span>imeer.dev</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
