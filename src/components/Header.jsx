import { useState, useEffect } from 'react'
import { Menu, X, Zap } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#team' },
  { label: 'Team', href: '#team' },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-3' : 'bg-transparent py-5'}`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'var(--blue)' }}>
              <Zap size={16} color="white" fill="white" />
            </div>
            <span className="font-black text-lg tracking-tight" style={{ color: 'var(--gray-900)' }}>
              Aumatix<span style={{ color: 'var(--blue)' }}>.</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map(link => (
              <a key={link.label} href={link.href}
                className="text-sm font-medium transition-colors duration-200 hover:text-blue-600"
                style={{ color: 'var(--gray-600)' }}>
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a href="#contact" className="btn-primary text-sm py-2.5 px-5">
              Get Free Consultation
            </a>
          </div>

          {/* Mobile toggle */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden p-2" style={{ color: 'var(--gray-800)' }}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-0 z-40 lg:hidden flex flex-col items-center justify-center gap-8"
            style={{ background: 'rgba(255,255,255,0.98)' }}
          >
            {navLinks.map(link => (
              <a key={link.label} href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-2xl font-bold hover:text-blue-600 transition-colors"
                style={{ color: 'var(--gray-800)' }}>
                {link.label}
              </a>
            ))}
            <a href="#contact" className="btn-primary mt-4" onClick={() => setMenuOpen(false)}>
              Get Free Consultation
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
