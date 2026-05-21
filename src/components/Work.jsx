import { motion } from 'framer-motion'
import { ExternalLink, Globe, Bot, Code2, Wrench, FileText, Star } from 'lucide-react'

const projects = [
  {
    icon: Globe,
    color: '#2563eb',
    bg: '#eff6ff',
    tag: 'Website Redesign',
    title: 'Bennett Motor Werks',
    desc: 'Complete premium homepage redesign for a European luxury auto repair shop in Dallas, Texas. Dark theme, AI chatbot, animated hero, free estimate form, and mobile-first design.',
    tech: ['React', 'Vite', 'Tailwind', 'Framer Motion'],
    result: 'Live on Vercel — full redesign delivered',
    link: 'https://bennett-motor-werks.vercel.app',
    client: 'Dallas, USA',
    stars: 5,
    featured: true,
  },
  {
    icon: Code2,
    color: '#7c3aed',
    bg: '#f5f3ff',
    tag: 'Mathematical Tool',
    title: 'AliceNumbers — Collatz Proof Tool',
    desc: 'Interactive HTML/JS visualization tool for exploring Collatz conjecture transformation sequences. Built for Australian mathematician Dominic Cooper.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Canvas API'],
    result: 'Phase 1 delivered — Phase 2 pipeline open',
    link: '#',
    client: 'Australia',
    stars: 5,
    featured: false,
  },
  {
    icon: Wrench,
    color: '#059669',
    bg: '#ecfdf5',
    tag: 'Automation System',
    title: 'Certificate Automation System',
    desc: 'Automated certificate generation and distribution system for a Turkish client. Bulk processing, custom templates, and automated email delivery.',
    tech: ['Python', 'Automation', 'PDF', 'Email API'],
    result: '$225 project — delivered on time',
    link: '#',
    client: 'Turkey',
    stars: 5,
    featured: false,
  },
  {
    icon: Bot,
    color: '#dc2626',
    bg: '#fef2f2',
    tag: 'Tracking Bot',
    title: 'USPS Tracking Bot',
    desc: 'Automated USPS package tracking bot for a Spanish e-commerce client. Real-time tracking updates, status notifications, and bulk tracking support.',
    tech: ['Python', 'Web Scraping', 'Bot', 'Automation'],
    result: '5-star review received',
    link: '#',
    client: 'Spain',
    stars: 5,
    featured: false,
  },
  {
    icon: Code2,
    color: '#d97706',
    bg: '#fffbeb',
    tag: 'Full Stack App',
    title: 'Aluminum Zemer v2',
    desc: 'Full stack web application — v2 completed with enhanced features, improved UI, and optimized backend performance.',
    tech: ['React', 'Node.js', 'Database', 'API'],
    result: 'V2 successfully deployed',
    link: 'https://alumyj.com',
    client: 'International',
    stars: 5,
    featured: false,
  },
]

export default function Work() {
  return (
    <section id="work" className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="section-tag">Our Work</span>
          <h2 className="text-4xl lg:text-5xl font-black leading-tight mb-4"
            style={{ color: 'var(--gray-900)', letterSpacing: '-1px' }}>
            Real Projects,
            <span className="gradient-text"> Real Results</span>
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: 'var(--gray-600)' }}>
            Every project in our portfolio is a real client — no mockups, no fake work.
          </p>
        </motion.div>

        {/* Featured project */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 card p-0 overflow-hidden"
          style={{ border: '2px solid #bfdbfe' }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-5">
            {/* Preview */}
            <div className="lg:col-span-3 relative overflow-hidden flex items-center justify-center flex-col gap-3" style={{ minHeight: '280px', background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 60%, #1e3a5f 100%)' }}>
              <div className="absolute inset-0 pointer-events-none" style={{
                backgroundImage: 'linear-gradient(rgba(37,99,235,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.07) 1px, transparent 1px)',
                backgroundSize: '40px 40px'
              }} />
              <div className="relative text-white text-center px-8">
                <div className="text-3xl font-black mb-2 tracking-tight">Bennett Motor Werks</div>
                <div className="text-sm mb-5" style={{ color: '#94a3b8' }}>Premium Dark Theme Redesign · Dallas, USA</div>
                <a href="https://bennett-motor-werks.vercel.app" target="_blank" rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-opacity hover:opacity-90"
                  style={{ background: '#2563eb', color: 'white' }}>
                  <ExternalLink size={14} /> View Live Site
                </a>
              </div>
              <span className="absolute top-4 left-4 text-xs font-bold px-3 py-1 rounded-full"
                style={{ background: '#2563eb', color: 'white' }}>
                Featured Project
              </span>
            </div>
            {/* Content */}
            <div className="lg:col-span-2 p-8 flex flex-col justify-between">
              <div>
                <span className="section-tag mb-3">Website Redesign</span>
                <h3 className="text-2xl font-black mb-3" style={{ color: 'var(--gray-900)' }}>
                  Bennett Motor Werks
                </h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--gray-600)' }}>
                  Complete premium homepage redesign for a European luxury auto repair shop in Dallas, Texas.
                  Dark theme, AI chatbot, animated hero, free estimate form, and fully responsive.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {['React', 'Vite', 'Tailwind', 'Framer Motion'].map(t => (
                    <span key={t} className="text-xs font-medium px-2 py-1 rounded-md"
                      style={{ background: '#eff6ff', color: '#2563eb' }}>{t}</span>
                  ))}
                </div>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={13} fill="#f59e0b" style={{ color: '#f59e0b' }} />)}
                  <span className="text-xs ml-1" style={{ color: 'var(--gray-400)' }}>Client: Dallas, USA</span>
                </div>
              </div>
              <a href="https://bennett-motor-werks.vercel.app" target="_blank" rel="noreferrer"
                className="btn-primary text-sm w-full justify-center">
                View Live Site <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Other projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.filter(p => !p.featured).map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card p-7"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: p.bg }}>
                  <p.icon size={18} style={{ color: p.color }} />
                </div>
                <div className="flex items-center gap-1">
                  {[...Array(p.stars)].map((_, j) => <Star key={j} size={11} fill="#f59e0b" style={{ color: '#f59e0b' }} />)}
                </div>
              </div>
              <span className="text-xs font-semibold px-2 py-1 rounded-full mb-3 inline-block"
                style={{ background: p.bg, color: p.color }}>{p.tag}</span>
              <h3 className="font-bold text-lg mb-2" style={{ color: 'var(--gray-900)' }}>{p.title}</h3>
              <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--gray-600)' }}>{p.desc}</p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {p.tech.map(t => (
                  <span key={t} className="text-xs px-2 py-1 rounded-md"
                    style={{ background: 'var(--gray-100)', color: 'var(--gray-600)' }}>{t}</span>
                ))}
              </div>
              <div className="flex items-center justify-between pt-3"
                style={{ borderTop: '1px solid var(--gray-100)' }}>
                <span className="text-xs font-medium" style={{ color: p.color }}>✓ {p.result}</span>
                {p.link && p.link !== '#' ? (
                  <a href={p.link} target="_blank" rel="noreferrer"
                    className="flex items-center gap-1 text-xs font-semibold transition-opacity hover:opacity-70"
                    style={{ color: p.color }}>
                    <ExternalLink size={11} /> View
                  </a>
                ) : (
                  <span className="text-xs" style={{ color: 'var(--gray-400)' }}>{p.client}</span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
