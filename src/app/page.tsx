import AboutSection from './components/AboutSection'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import ProjectSection from './components/ProjectSection'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col bg-background'>
      <Navbar />
      <div className='mt-10 mx-auto px-12 py-4'>
        <HeroSection />
        <AboutSection />
        <ProjectSection />
      </div>
      <Footer />
    </main>
  )
}
