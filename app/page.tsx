import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Tapes from '@/components/Tapes'
import Hey from '@/components/Hey'
import Statement from '@/components/Statement'
import Services from '@/components/Services'
import Work from '@/components/Work'
import Journey from '@/components/Journey'
import Faq from '@/components/Faq'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import ScrollFx from '@/components/ScrollFx'

export default function Page() {
  return (
    <>
      <div className="sprog" aria-hidden="true" />
      <ScrollFx />
      <div className="overflow-x-clip bg-ink text-bone">
        <Header />
        <main>
          <Hero />
          <Tapes />
          <Hey />
          <Statement />
          <Services />
          <Work />
          <Journey />
          <Faq />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}
