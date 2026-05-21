import { motion } from 'framer-motion'
import { Code2, Users, Linkedin, Github, Globe } from 'lucide-react'

const team = [
  {
    name: 'Huzaifah',
    role: 'Co-Founder & Full Stack Developer',
    img: '/huzaifah.jpg',
    bio: 'CS graduate from UET Taxila (2022–2026) with 4+ years of experience in full stack development, Python, ML/NLP, and automation. Specializes in React, Next.js, and AI-powered solutions.',
    skills: ['React / Next.js', 'Python & ML', 'Node.js', 'AI Agents', 'Automation', 'NLP'],
    icon: Code2,
    color: '#2563eb',
    bg: '#eff6ff',
    links: {
      github: 'https://github.com/Huzaifah-Analyst',
      fiverr: 'https://www.fiverr.com',
    }
  },
  {
    name: 'Affan',
    role: 'Co-Founder & Operations Lead',
    img: '/affan.jpg',
    bio: 'Frontend developer and operations specialist with strong client management and project scoping skills. Ensures every project is delivered on time with clear communication and zero surprises.',
    skills: ['Frontend Development', 'Client Management', 'Project Scoping', 'UI/UX', 'Operations', 'Strategy'],
    icon: Users,
    color: '#7c3aed',
    bg: '#f5f3ff',
    links: {
      linkedin: '#',
    }
  },
]

export default function Team() {
  return (
    <section id="team" className="py-28" style={{ background: 'var(--gray-50)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="section-tag">The Team</span>
          <h2 className="text-4xl lg:text-5xl font-black leading-tight mb-4"
            style={{ color: 'var(--gray-900)', letterSpacing: '-1px' }}>
            The People Behind
            <span className="gradient-text"> Aumatix</span>
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: 'var(--gray-600)' }}>
            A lean, focused team of builders who care deeply about delivering quality work.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="card p-8"
            >
              {/* Photo */}
              <div className="flex items-start gap-5 mb-6">
                <div className="relative flex-shrink-0">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-20 h-20 rounded-2xl object-cover"
                    style={{ border: `2px solid ${member.color}30` }}
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.nextSibling.style.display = 'flex'
                    }}
                  />
                  <div className="w-20 h-20 rounded-2xl items-center justify-center font-black text-2xl"
                    style={{ display: 'none', background: member.bg, color: member.color, border: `2px solid ${member.color}30` }}>
                    {member.name[0]}
                  </div>
                  {/* Role icon */}
                  <div className="absolute -bottom-2 -right-2 w-7 h-7 rounded-lg flex items-center justify-center"
                    style={{ background: member.color }}>
                    <member.icon size={13} color="white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-black mb-1" style={{ color: 'var(--gray-900)' }}>{member.name}</h3>
                  <p className="text-sm font-semibold mb-1" style={{ color: member.color }}>{member.role}</p>
                  <div className="flex gap-2 mt-2">
                    {member.links.github && (
                      <a href={member.links.github} target="_blank" rel="noreferrer"
                        className="w-7 h-7 rounded-lg flex items-center justify-center transition-all hover:scale-110"
                        style={{ background: 'var(--gray-100)', color: 'var(--gray-600)' }}>
                        <Github size={13} />
                      </a>
                    )}
                    {member.links.linkedin && (
                      <a href={member.links.linkedin} target="_blank" rel="noreferrer"
                        className="w-7 h-7 rounded-lg flex items-center justify-center transition-all hover:scale-110"
                        style={{ background: 'var(--gray-100)', color: 'var(--gray-600)' }}>
                        <Linkedin size={13} />
                      </a>
                    )}
                    {member.links.fiverr && (
                      <a href={member.links.fiverr} target="_blank" rel="noreferrer"
                        className="w-7 h-7 rounded-lg flex items-center justify-center transition-all hover:scale-110"
                        style={{ background: 'var(--gray-100)', color: 'var(--gray-600)' }}>
                        <Globe size={13} />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Bio */}
              <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--gray-600)' }}>{member.bio}</p>

              {/* Skills */}
              <div>
                <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: 'var(--gray-400)' }}>
                  Core Skills
                </p>
                <div className="flex flex-wrap gap-2">
                  {member.skills.map(skill => (
                    <span key={skill} className="text-xs font-medium px-2.5 py-1 rounded-md"
                      style={{ background: member.bg, color: member.color }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Company values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            { title: 'On-Time Delivery', desc: '100% of our projects delivered on or before the deadline. No exceptions.', emoji: '⏱️' },
            { title: 'Clear Communication', desc: 'You always know where your project stands. No ghosting, no surprises.', emoji: '💬' },
            { title: 'Quality First', desc: 'We do not ship work we are not proud of. Every pixel, every line of code matters.', emoji: '✨' },
          ].map((v, i) => (
            <div key={i} className="card p-6 text-center">
              <div className="text-3xl mb-3">{v.emoji}</div>
              <h4 className="font-bold mb-2" style={{ color: 'var(--gray-900)' }}>{v.title}</h4>
              <p className="text-sm" style={{ color: 'var(--gray-600)' }}>{v.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
