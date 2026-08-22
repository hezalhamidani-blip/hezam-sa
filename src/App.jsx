import Navbar        from './components/Navbar'
import Hero          from './components/Hero'
import Expertise     from './components/Expertise'
import Projects      from './components/Projects'
import Achievements  from './components/Achievements'
import Stats         from './components/Stats'
import Certifications from './components/Certifications'
import Contact       from './components/Contact'
import Footer        from './components/Footer'

export default function App() {
  return (
    <div className="font-tajawal text-dark">
      <Navbar />
      <Hero />
      <Expertise />
      <Projects />
      <Achievements />
      <Stats />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  )
}
