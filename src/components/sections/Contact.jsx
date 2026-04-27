import React from 'react'
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa'
import { RevealOnScroll } from '../RevealOnScroll'

export default function Contact() {
  const contacts = [
    {
      icon: <FaEnvelope className="text-2xl text-white" />,
      label: 'Email',
      link: 'mailto:filiperamos212@gmail.com',
    },
    {
      icon: <FaLinkedin className="text-2xl text-white" />,
      label: 'LinkedIn',
      link: 'https://www.linkedin.com/in/filipearamos/',
    },
    {
      icon: <FaGithub className="text-2xl text-white" />,
      label: 'GitHub',
      link: 'https://github.com/Dialexy',
    },
  ]

  return (
    <section id="contact" className="flex items-center justify-center py-32">
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-stone-400 to-neutral-100 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-neutral-400 mb-10 max-w-md mx-auto">
            Open to internships, placements, and collaborative projects.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {contacts.map((item, idx) => (
              <a
                key={idx}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center gap-3 p-8 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-white/30 transition-all duration-200"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-white/5 rounded-full">
                  {item.icon}
                </div>
                <span className="text-sm text-neutral-400">{item.label}</span>
              </a>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  )
}
