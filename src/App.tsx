import About from './sections/About'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import Header from './sections/Header'
import Hero from './sections/Hero'
import Marquee from './sections/Marquee'
import MenuMobile from './sections/Menu'
import Numbers from './sections/Numbers'
import Plans from './sections/Plans'

const App = () => {
  return (
    <div>
      <MenuMobile />
      <Header />
      <Hero />
      <Marquee />
      <About />
      <Plans />
      <Numbers />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
