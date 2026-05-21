import { motion } from 'framer-motion'
import { Mail, MessageSquare, Globe, ArrowRight, Zap, Github, Linkedin } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', service: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 4000)
    setForm({ name: '', email: '', service: '', message: '' })
  }

  return (
    <>
      {/* Contact Section */}
      <section id="contact" className="py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="section-tag">Get In Touch</span>
            <h2 className="text-4xl lg:text-5xl font-black leading-tight mb-4"
              style={{ color: 'var(--gray-900)', letterSpacing: '-1px' }}>
              Ready to Build
              <span className="gradient-text"> Something Great?</span>
            </h2>
            <p className="text-lg max-w-xl mx-auto" style={{ color: 'var(--gray-600)' }}>
              Tell us about your project. We will get back to you within 24 hours with a plan and a quote.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Left info */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 flex flex-col gap-6"
            >
              {[
                { icon: Mail, color: '#2563eb', bg: '#eff6ff', title: 'Email Us', value: 'huzaifahnaseer377@gmail.com', href: 'mailto:huzaifahnaseer377@gmail.com' },
                { icon: MessageSquare, color: '#7c3aed', bg: '#f5f3ff', title: 'WhatsApp', value: '+92 336 151 0430', href: 'https://wa.me/923361510430' },
                { icon: Globe, color: '#059669', bg: '#ecfdf5', title: 'Based In', value: 'Rawalpindi / Islamabad, Pakistan', href: '#' },
              ].map((c, i) => (
                <a key={i} href={c.href}
                  className="flex items-center gap-4 p-5 card hover:no-underline">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: c.bg }}>
                    <c.icon size={18} style={{ color: c.color }} />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wide mb-0.5" style={{ color: 'var(--gray-400)' }}>{c.title}</div>
                    <div className="font-semibold text-sm" style={{ color: 'var(--gray-800)' }}>{c.value}</div>
                  </div>
                </a>
              ))}

              {/* Why us quick list */}
              <div className="card p-6 mt-2">
                <h4 className="font-bold mb-4" style={{ color: 'var(--gray-900)' }}>Why Aumatix?</h4>
                {[
                  'Free consultation — no commitment',
                  'Transparent pricing upfront',
                  'Fiverr Level 2 verified team',
                  '$4K+ earned, 10+ projects',
                  'Pakistan-based, globally experienced',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 mb-2">
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#2563eb' }} />
                    <span className="text-sm" style={{ color: 'var(--gray-600)' }}>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <div className="card p-8">
                {sent ? (
                  <div className="text-center py-12">
                    <div className="text-5xl mb-4">🎉</div>
                    <h3 className="text-xl font-black mb-2" style={{ color: 'var(--gray-900)' }}>Message Sent!</h3>
                    <p style={{ color: 'var(--gray-600)' }}>We will get back to you within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wide mb-2" style={{ color: 'var(--gray-400)' }}>Your Name</label>
                        <input required value={form.name} onChange={e => setForm({...form, name: e.target.value})}
                          placeholder="John Smith"
                          className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all"
                          style={{ background: 'var(--gray-50)', border: '1.5px solid var(--gray-200)', color: 'var(--gray-900)' }}
                          onFocus={e => e.target.style.borderColor = '#2563eb'}
                          onBlur={e => e.target.style.borderColor = 'var(--gray-200)'}
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wide mb-2" style={{ color: 'var(--gray-400)' }}>Email</label>
                        <input required type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})}
                          placeholder="john@company.com"
                          className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all"
                          style={{ background: 'var(--gray-50)', border: '1.5px solid var(--gray-200)', color: 'var(--gray-900)' }}
                          onFocus={e => e.target.style.borderColor = '#2563eb'}
                          onBlur={e => e.target.style.borderColor = 'var(--gray-200)'}
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wide mb-2" style={{ color: 'var(--gray-400)' }}>Service Needed</label>
                      <select required value={form.service} onChange={e => setForm({...form, service: e.target.value})}
                        className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all"
                        style={{ background: 'var(--gray-50)', border: '1.5px solid var(--gray-200)', color: form.service ? 'var(--gray-900)' : 'var(--gray-400)' }}>
                        <option value="">Select a service...</option>
                        <option>Website Design & Development</option>
                        <option>AI Agent / Chatbot</option>
                        <option>Business Automation</option>
                        <option>Custom Bot Development</option>
                        <option>ML / NLP Solution</option>
                        <option>Lead Generation Tool</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wide mb-2" style={{ color: 'var(--gray-400)' }}>Tell Us About Your Project</label>
                      <textarea required rows={4} value={form.message} onChange={e => setForm({...form, message: e.target.value})}
                        placeholder="What do you want to build? What's your budget and timeline?"
                        className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all resize-none"
                        style={{ background: 'var(--gray-50)', border: '1.5px solid var(--gray-200)', color: 'var(--gray-900)' }}
                        onFocus={e => e.target.style.borderColor = '#2563eb'}
                        onBlur={e => e.target.style.borderColor = 'var(--gray-200)'}
                      />
                    </div>
                    <button type="submit" className="btn-primary w-full justify-center py-3.5">
                      Send Message <ArrowRight size={16} />
                    </button>
                    <p className="text-xs text-center" style={{ color: 'var(--gray-400)' }}>
                      We respond within 24 hours · Free consultation · No commitment required
                    </p>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: 'var(--gray-900)' }}>
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: '#2563eb' }}>
                  <Zap size={16} color="white" fill="white" />
                </div>
                <span className="font-black text-lg text-white">Aumatix<span style={{ color: '#3b82f6' }}>.</span></span>
              </div>
              <p className="text-sm leading-relaxed mb-5" style={{ color: '#9ca3af' }}>
                We build websites, AI agents, and automation systems that help businesses grow.
                Based in Pakistan. Working with clients globally.
              </p>
              <div className="flex gap-3">
                <a href="https://github.com/Huzaifah-Analyst" target="_blank" rel="noreferrer"
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors hover:bg-gray-700"
                  style={{ background: '#1f2937', color: '#9ca3af' }}>
                  <Github size={15} />
                </a>
                <a href="#" className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors hover:bg-gray-700"
                  style={{ background: '#1f2937', color: '#9ca3af' }}>
                  <Linkedin size={15} />
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h5 className="text-white font-bold text-sm mb-4 uppercase tracking-wide">Services</h5>
              {['Web Development', 'AI Agents', 'Automation', 'Bot Development', 'ML / NLP', 'Lead Generation'].map(s => (
                <a key={s} href="#services" className="block text-sm mb-2 hover:text-white transition-colors" style={{ color: '#9ca3af' }}>{s}</a>
              ))}
            </div>

            {/* Company */}
            <div>
              <h5 className="text-white font-bold text-sm mb-4 uppercase tracking-wide">Company</h5>
              {[
                { label: 'Our Work', href: '#work' },
                { label: 'Team', href: '#team' },
                { label: 'Contact', href: '#contact' },
                { label: 'Fiverr Profile', href: 'https://www.fiverr.com/huzaifah273' },
                { label: 'Upwork Profile', href: 'https://www.upwork.com' },
              ].map(l => (
                <a key={l.label} href={l.href} className="block text-sm mb-2 hover:text-white transition-colors" style={{ color: '#9ca3af' }}>{l.label}</a>
              ))}
            </div>
          </div>

          <div style={{ borderTop: '1px solid #1f2937' }} className="pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="text-xs" style={{ color: '#6b7280' }}>© 2026 Aumatix Solutions. All Rights Reserved.</p>
            <p className="text-xs" style={{ color: '#6b7280' }}>Rawalpindi / Islamabad, Pakistan · Working Globally</p>
          </div>
        </div>
      </footer>
    </>
  )
}
