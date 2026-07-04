import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { TrustBar } from '@/components/trust-bar'
import { About } from '@/components/about'
import { Services } from '@/components/services'
import { Industries } from '@/components/industries'
import { WhyChoose } from '@/components/why-choose'
import { Process } from '@/components/process'
import { CTA } from '@/components/cta'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <TrustBar />
      <About />
      <Services />
      <Industries />
      <WhyChoose />
      <Process />
      <CTA />
      <Contact />
      <Footer />
    </main>
  )
}
