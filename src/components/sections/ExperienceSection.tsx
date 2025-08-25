'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, CheckCircle } from 'lucide-react'

const ExperienceSection = () => {
  const experience = {
    role: "Project Intern",
    company: "SRMIST Vadapalani",
    date: "Nov 2024 – Dec 2024",
    location: "Chennai, Tamil Nadu",
    details: [
      "Worked across Agile SDLC (requirement gathering → deployment).",
      "Built REST APIs with CSV export for structured, downloadable data access.",
      "Optimized search/filter algorithms for <200 ms response on datasets >1,000 records.",
      "Applied DB indexing and load optimization for high availability."
    ]
  }

  return (
    <section id="experience" className="min-h-screen flex items-center justify-center relative">
      <div className="container-max section-padding">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Building scalable solutions through hands-on development and agile methodologies
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="glass p-8 lg:p-12 rounded-2xl relative overflow-hidden"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0 bg-gradient-to-br from-neon-green/20 to-transparent" />
            </div>

            <div className="relative z-10">
              {/* Header */}
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
                <div>
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="text-2xl lg:text-3xl font-bold text-neon-green mb-2"
                  >
                    {experience.role}
                  </motion.h3>
                  
                  <motion.h4
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="text-xl lg:text-2xl font-semibold text-white mb-4"
                  >
                    {experience.company}
                  </motion.h4>
                </div>

                <div className="flex flex-col gap-2">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-2 text-gray-300"
                  >
                    <Calendar className="w-5 h-5 text-neon-green" />
                    <span>{experience.date}</span>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-2 text-gray-300"
                  >
                    <MapPin className="w-5 h-5 text-neon-green" />
                    <span>{experience.location}</span>
                  </motion.div>
                </div>
              </div>

              {/* Details */}
              <div className="space-y-4">
                {experience.details.map((detail, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3 group"
                  >
                    <CheckCircle className="w-6 h-6 text-neon-green mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors">
                      {detail}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Skills Used */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.1 }}
                viewport={{ once: true }}
                className="mt-8 pt-8 border-t border-white/10"
              >
                <h5 className="text-lg font-semibold text-white mb-4">Key Technologies & Methodologies</h5>
                <div className="flex flex-wrap gap-3">
                  {['Agile SDLC', 'REST APIs', 'Database Optimization', 'Performance Tuning', 'CSV Export', 'Search Algorithms'].map((skill, index) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 1.2 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="glass px-4 py-2 rounded-full text-sm font-medium text-neon-green border border-neon-green/30 hover:bg-neon-green/10 transition-colors"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection
