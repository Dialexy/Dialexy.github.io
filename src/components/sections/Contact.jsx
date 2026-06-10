import { useState } from 'react'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { RevealOnScroll } from '../RevealOnScroll'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xqeodkpr'

const socials = [
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

const inputClass =
  'w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-neutral-200 placeholder:text-neutral-600 focus:outline-none focus:border-white/30 transition-colors duration-200'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState(null)

  const validate = () => {
    const errs = {}
    if (!formData.name.trim()) errs.name = 'Name is required.'
    if (!formData.email.trim()) {
      errs.email = 'Email is required.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Enter a valid email address.'
    }
    if (!formData.message.trim()) errs.message = 'Message is required.'
    return errs
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setErrors({})
    setStatus(null)
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(formData),
      })
      if (res.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

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

          <form
            onSubmit={handleSubmit}
            noValidate
            aria-label="Contact form"
            className="mb-10 text-left rounded-xl border border-white/10 p-8"
          >
            {status === 'success' && (
              <div
                role="alert"
                className="mb-6 p-4 rounded-lg bg-green-500/10 border border-green-500/30 text-green-400 text-sm text-center"
              >
                Message sent! I&apos;ll get back to you soon.
              </div>
            )}
            {status === 'error' && (
              <div
                role="alert"
                className="mb-6 p-4 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm text-center"
              >
                Something went wrong. Please try again later.
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm text-neutral-400 mb-2">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  aria-required="true"
                  aria-describedby={errors.name ? 'name-error' : undefined}
                  aria-invalid={!!errors.name}
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className={inputClass}
                />
                {errors.name && (
                  <p id="name-error" role="alert" className="mt-1.5 text-xs text-red-400">
                    {errors.name}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="email" className="block text-sm text-neutral-400 mb-2">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  aria-required="true"
                  aria-describedby={errors.email ? 'email-error' : undefined}
                  aria-invalid={!!errors.email}
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className={inputClass}
                />
                {errors.email && (
                  <p id="email-error" role="alert" className="mt-1.5 text-xs text-red-400">
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-sm text-neutral-400 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                aria-required="true"
                aria-describedby={errors.message ? 'message-error' : undefined}
                aria-invalid={!!errors.message}
                value={formData.message}
                onChange={handleChange}
                rows={5}
                placeholder="What's on your mind?"
                className={`${inputClass} resize-none`}
              />
              {errors.message && (
                <p id="message-error" role="alert" className="mt-1.5 text-xs text-red-400">
                  {errors.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-neutral-50 text-black py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(255,255,255,0.8)]"
            >
              Send Message
            </button>
          </form>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {socials.map((item, idx) => (
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
