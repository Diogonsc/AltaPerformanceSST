import Header from './components/Header'
import Hero from './components/Hero'
import PraticalTips from './components/PraticalTips'
import NRs from './components/NRs'
import EBook from './components/EBook'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import { BackToTop } from './components/BackToTop'
import ImagePreloader from './components/ImagePreloader'

function App() {
  // Imagens prioritárias para preload
  const priorityImages = [
    { src: '/optimized/logotipo.webp', priority: true },
    { src: '/optimized/profile.webp', priority: true }
  ]

  return (
    <div className="w-full">
      <ImagePreloader images={priorityImages} />
      <Header />
      <Hero />
      <PraticalTips />
      <NRs />
      <EBook />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </div>
  )
}

export default App
