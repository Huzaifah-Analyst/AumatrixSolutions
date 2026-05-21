import { motion } from 'framer-motion'
import { Globe, Bot, Zap, BarChart3, Smartphone, Code2, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: Globe,
    color: '#2563eb',
    bg: '#eff6ff',
    title: 'Website Design & Development',
    desc: 'Premium, conversion-focused websites built with React, Next.js, and WordPress. From landing pages to full web apps.',
    tags: ['React', 'Next.js', 'WordPress', 'Tailwind'],
    featured: true,
  },
  {
    icon: Bot,
    color: '#7c3aed',
    bg: '#f5f3ff',
    title: 'AI Agents & Chatbots',
    desc: 'Intelligent AI agents that answer calls, handle bookings, respond to customers 24/7 — without any human needed.',
    tags: ['AI Calling Agent', 'Chatbot', 'GPT-4', 'Automation'],
    featured: true,
  },
  {
    icon: Zap,
    color: '#059669',
    bg: '#ecfdf5',
    title: 'Business Automation',
    desc: 'Automate repetitive tasks — certificate generation, data entry, email workflows, report creation, and more.',
    tags: ['Python', 'n8n', 'Zapier', 'Custom Scripts'],
    featured: false,
  },
  {
    icon: Code2,
    color: '#dc2626',
    bg: '#fef2f2',
    title: 'Custom Bot Development',
    desc: 'Telegram bots, Discord bots, tracking bots, scraping bots — if it can be automated, we build it.',
    tags: ['Telegram', 'Discord', 'Web Scraping', 'API'],
    featured: false,
  },
  {
    icon: BarChart3,
    color: '#d97706',
    bg: '#fffbeb',
    title: 'ML & NLP Solutions',
    desc: 'Sentiment analysis, text classification, data pipelines, and machine learning models tailored to your business.',
    tags: ['Python', 'NLP', 'TensorFlow', 'HuggingFace'],
    featured: false,
  },
  {
    icon: Smartphone,
    color: '#0891b2',
    bg: '#ecfeff',
    title: 'Lead Generation Tools',
    desc: 'Custom tools that find verified business leads — names, phones, emails, websites — exported to CSV instantly.',
    tags: ['Web Scraping', 'APIs', 'CSV Export', 'Custom'],
    featured: false,
  },
]

export default function Services() {
  return (
    <section id="services" className="py-28" style={{ background: 'var(--gray-50)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="section-tag">What We Do</span>
          <h2 className="text-4xl lg:text-5xl font-black leading-tight mb-4" style={{ color: 'var(--gray-900)', letterSpacing: '-1px' }}>
            Services That Drive
            <span className="gradient-text"> Real Results</span>
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: 'var(--gray-600)' }}>
            From a simple landing page to a full AI-powered business system — we build it all.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`card p-7 relative overflow-hidden ${s.featured ? 'ring-2 ring-blue-200' : ''}`}
            >
              {s.featured && (
                <span className="absolute top-4 right-4 text-xs font-bold px-2 py-1 rounded-full"
                  style={{ background: '#dbeafe', color: '#1d4ed8' }}>
                  Popular
                </span>
              )}
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{ background: s.bg }}>
                <s.icon size={22} style={{ color: s.color }} />
              </div>
              <h3 className="text-lg font-bold mb-3" style={{ color: 'var(--gray-900)' }}>{s.title}</h3>
              <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--gray-600)' }}>{s.desc}</p>
              <div className="flex flex-wrap gap-2 mb-5">
                {s.tags.map(t => (
                  <span key={t} className="text-xs font-medium px-2 py-1 rounded-md"
                    style={{ background: s.bg, color: s.color }}>
                    {t}
                  </span>
                ))}
              </div>
              <a href="#contact" className="flex items-center gap-1 text-sm font-semibold transition-all group"
                style={{ color: s.color }}>
                Get Started <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
