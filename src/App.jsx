import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Work from './components/Work'
import Team from './components/Team'
import Contact from './components/Contact'

export default function App() {
  return (
    <div style={{ background: '#ffffff' }}>
      <Header />
      <Hero />
      <Services />
      <Work />
      <Team />
      <Contact />
    </div>
  )
}
