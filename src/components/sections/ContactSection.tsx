'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react'
import { useState } from 'react'
import BlockBreakerGame from '@/components/games/BlockBreakerGame'

const ContactSection = () => {
  const [showContactModal, setShowContactModal] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const contactInfo = {
    email: "prithikasathish.dev@gmail.com",
    linkedin: "https://linkedin.com/in/prithika-sathish-78422022b",
    github: "https://github.com/prithika-sathish",
    location: "Chennai, Tamil Nadu, India"
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Create mailto link with form data
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`)
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)
    window.open(`mailto:${contactInfo.email}?subject=${subject}&body=${body}`)
    setShowContactModal(false)
    setFormData({ name: '', email: '', message: '' })
  }

  const handleGameContact = () => {
    setShowContactModal(true)
  }

  return (
    <section id="contact" className="min-h-screen flex flex-col justify-center relative overflow-hidden">
      {/* Ocean-themed background overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-blue-900/10 to-transparent pointer-events-none" />
      
      <div className="container-max section-padding relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to collaborate on innovative projects? Let's build something amazing together!
          </p>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="glass p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-neon-green mb-6 text-center">Get In Touch</h3>
            
            {/* Single row layout for contact items */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <motion.a
                href={`mailto:${contactInfo.email}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 p-4 glass-hover rounded-lg group"
              >
                <Mail className="w-5 h-5 text-neon-green group-hover:scale-110 transition-transform flex-shrink-0" />
                <div className="min-w-0">
                  <div className="font-semibold text-white text-sm">Email</div>
                  <div className="text-gray-300 text-xs truncate">{contactInfo.email}</div>
                </div>
              </motion.a>

              <motion.a
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 p-4 glass-hover rounded-lg group"
              >
                <Linkedin className="w-5 h-5 text-neon-green group-hover:scale-110 transition-transform flex-shrink-0" />
                <div className="min-w-0">
                  <div className="font-semibold text-white text-sm">LinkedIn</div>
                  <div className="text-gray-300 text-xs">Professional Network</div>
                </div>
              </motion.a>

              <motion.a
                href={contactInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 p-4 glass-hover rounded-lg group"
              >
                <Github className="w-5 h-5 text-neon-green group-hover:scale-110 transition-transform flex-shrink-0" />
                <div className="min-w-0">
                  <div className="font-semibold text-white text-sm">GitHub</div>
                  <div className="text-gray-300 text-xs">Code Repository</div>
                </div>
              </motion.a>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 p-4 rounded-lg"
              >
                <MapPin className="w-5 h-5 text-neon-green flex-shrink-0" />
                <div className="min-w-0">
                  <div className="font-semibold text-white text-sm">Location</div>
                  <div className="text-gray-300 text-xs">{contactInfo.location}</div>
                </div>
              </motion.div>
            </div>

            {/* Quick Contact Button */}
            <motion.button
              onClick={() => setShowContactModal(true)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
              className="w-full neon-button flex items-center justify-center gap-2 text-lg py-4"
            >
              <Send className="w-6 h-6" />
              Send Message
            </motion.button>
          </div>
        </motion.div>

        {/* Block Breaker Game - Full Width */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="glass p-8 rounded-2xl"
        >
          <BlockBreakerGame onContactHit={handleGameContact} />
        </motion.div>
      </div>

      {/* Contact Modal */}
      {showContactModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowContactModal(false)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="glass p-8 rounded-2xl max-w-md w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-2xl font-bold text-neon-green mb-6 text-center">
              Send Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-white font-medium mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 glass rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-neon-green"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label className="block text-white font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 glass rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-neon-green"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label className="block text-white font-medium mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full p-3 glass rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-neon-green resize-none"
                  placeholder="Your message..."
                />
              </div>
              
              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setShowContactModal(false)}
                  className="flex-1 glass glass-hover px-6 py-3 rounded-lg font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 neon-button flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}

export default ContactSection
