import { motion } from 'framer-motion'
import { ArrowRight, Code2, Bot, Zap, Star } from 'lucide-react'

const floatingBadges = [
  { icon: Code2, label: 'Web Development', color: '#2563eb', bg: '#eff6ff', top: '22%', right: '8%', delay: 0.8 },
  { icon: Bot, label: 'AI Agents', color: '#7c3aed', bg: '#f5f3ff', top: '55%', right: '4%', delay: 1.1 },
  { icon: Zap, label: 'Automation', color: '#059669', bg: '#ecfdf5', top: '40%', left: '2%', delay: 1.4 },
]

const trustedBy = ['Bennett Motor Werks', 'Aluminum Zemer', 'Juan Acosta', 'Dominic Cooper']

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-24"
      style={{ background: 'linear-gradient(160deg, #ffffff 0%, #eff6ff 50%, #f5f3ff 100%)' }}>

      {/* Grid background */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'linear-gradient(rgba(37,99,235,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.05) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }} />

      {/* Blobs */}
      <div className="absolute top-20 right-20 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.1) 0%, transparent 70%)' }} />
      <div className="absolute bottom-20 left-20 w-64 h-64 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 70%)' }} />

      {/* Floating badges */}
      {floatingBadges.map((b, i) => (
        <motion.div key={i}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: b.delay, duration: 0.5 }}
          style={{ position: 'absolute', top: b.top, right: b.right, left: b.left }}
          className="hidden lg:flex items-center gap-2 px-4 py-2.5 rounded-xl shadow-lg"
          whileHover={{ scale: 1.05 }}
        >
          <motion.div animate={{ y: [0, -6, 0] }} transition={{ repeat: Infinity, duration: 3 + i * 0.5 }}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl shadow-md"
            style={{ background: b.bg, border: `1px solid ${b.color}20` }}>
            <b.icon size={15} style={{ color: b.color }} />
            <span className="text-xs font-semibold" style={{ color: b.color }}>{b.label}</span>
          </motion.div>
        </motion.div>
      ))}

      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="max-w-3xl">
          {/* Tag */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <span className="section-tag">
              <Zap size={12} />
              Pakistan's Premier AI & Web Agency
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.8 }}
            className="font-black leading-none mb-6"
            style={{ fontSize: 'clamp(42px, 6vw, 80px)', letterSpacing: '-2px', color: 'var(--gray-900)' }}
          >
            We Build Websites,{' '}
            <span className="gradient-text">AI Agents</span>
            {' '}& Automation
            <span style={{ color: 'var(--blue)' }}>.</span>
          </motion.h1>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-lg leading-relaxed mb-10 max-w-xl"
            style={{ color: 'var(--gray-600)' }}
          >
            Aumatix Solutions helps businesses grow through premium web design,
            intelligent AI agents, and custom automation systems — delivered on time, every time.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
            className="flex flex-wrap gap-4 mb-14"
          >
            <a href="#contact" className="btn-primary">
              Start Your Project <ArrowRight size={16} />
            </a>
            <a href="#work" className="btn-secondary">
              View Our Work
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="flex flex-wrap gap-8 mb-12"
          >
            {[
              { num: '$4K+', label: 'Earned on Fiverr' },
              { num: '10+', label: 'Projects Delivered' },
              { num: '5★', label: 'Average Rating' },
              { num: '100%', label: 'On-Time Delivery' },
            ].map(s => (
              <div key={s.label}>
                <div className="text-2xl font-black" style={{ color: 'var(--gray-900)' }}>{s.num}</div>
                <div className="text-xs" style={{ color: 'var(--gray-400)' }}>{s.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Trusted by */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }}>
            <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: 'var(--gray-400)' }}>
              Trusted by clients from
            </p>
            <div className="flex flex-wrap gap-3">
              {trustedBy.map(name => (
                <span key={name} className="text-xs font-medium px-3 py-1.5 rounded-full"
                  style={{ background: 'white', border: '1px solid var(--gray-200)', color: 'var(--gray-600)' }}>
                  {name}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
