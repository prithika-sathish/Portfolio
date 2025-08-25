'use client'

import { motion } from 'framer-motion'
import { Trophy, Award, Users, BookOpen, Zap } from 'lucide-react'

const LeadershipSection = () => {
  const achievements = [
    {
      title: "Winner – Build to Deploy (Mar 2025)",
      description: "1st place / 100+ teams (ML model in 12 hrs)",
      icon: Trophy,
      color: "text-yellow-400"
    },
    {
      title: "Winner – Hack Horizon (Oct 2024)",
      description: "1st place / 80+ teams (real-time solution)",
      icon: Trophy,
      color: "text-yellow-400"
    },
    {
      title: "Winner – Vertex Innovate (Feb 2025)",
      description: "1st place / 1000+ participants in software domain",
      icon: Trophy,
      color: "text-yellow-400"
    },
    {
      title: "Third Place – ImpactX 2.0 (Jan 2025)",
      description: "Innovative solution development",
      icon: Award,
      color: "text-orange-400"
    },
    {
      title: "Semi-Finalist – L&T CreaTech Challenge",
      description: "Top 2% among participants",
      icon: Award,
      color: "text-purple-400"
    },
    {
      title: "Spectrum Special Mention",
      description: "VIT Chennai among 1000+ participants",
      icon: Award,
      color: "text-blue-400"
    }
  ]

  const leadership = [
    {
      role: "Joint Secretary",
      organization: "Arrowdev Technical Club, SRMIST",
      icon: Users,
      description: "Leading technical initiatives and team coordination"
    }
  ]

  const certifications = [
    "Machine Learning – Andrew Ng (Coursera)",
    "Complete AI, ML & Data Science Bootcamp – Udemy"
  ]

  return (
    <section id="leadership" className="min-h-screen flex items-center justify-center relative">
      <div className="container-max section-padding">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Leadership & Achievements
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Recognized excellence in competitive programming, hackathons, and technical leadership
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-xl lg:text-2xl font-bold text-neon-green mb-6">
              🏆 Competition Achievements
            </h3>
            
            <div className="relative">
              {/* Milestone connecting line */}
              <div className="absolute left-3 top-6 bottom-0 w-0.5 bg-gradient-to-b from-neon-green via-neon-green/50 to-transparent"></div>
              
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative mb-4 last:mb-0"
                >
                  {/* Milestone dot */}
                  <div className="absolute left-2 top-2 w-2 h-2 bg-neon-green rounded-full border-2 border-gray-900 z-10"></div>
                  
                  <div className="glass p-4 rounded-lg hover:scale-105 transition-all duration-300 group ml-8">
                    <div className="flex items-start gap-3">
                      <achievement.icon className={`w-6 h-6 ${achievement.color} flex-shrink-0 group-hover:scale-110 transition-transform`} />
                      <div>
                        <h4 className="text-base font-semibold text-white mb-1 group-hover:text-neon-green transition-colors">
                          {achievement.title}
                        </h4>
                        <p className="text-gray-300 text-xs">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Leadership & Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Leadership Roles */}
            <div>
              <h3 className="text-xl lg:text-2xl font-bold text-neon-green mb-6">
                👥 Leadership Roles
              </h3>
              
              {leadership.map((role, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass p-4 rounded-lg mb-3 hover:scale-105 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-3">
                    <role.icon className="w-6 h-6 text-neon-green flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <div>
                      <h4 className="text-base font-semibold text-white mb-1 group-hover:text-neon-green transition-colors">
                        {role.role}
                      </h4>
                      <p className="text-neon-green/80 text-xs mb-1">
                        {role.organization}
                      </p>
                      <p className="text-gray-300 text-xs">
                        {role.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-xl lg:text-2xl font-bold text-neon-green mb-6">
                📚 Certifications
              </h3>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
                className="glass p-4 rounded-lg"
              >
                <div className="space-y-3">
                  {certifications.map((cert, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3 group"
                    >
                      <BookOpen className="w-4 h-4 text-neon-green flex-shrink-0 group-hover:scale-110 transition-transform" />
                      <p className="text-gray-300 group-hover:text-white transition-colors text-xs">
                        {cert}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {[
            { number: "6+", label: "Competition Achievements" },
            { number: "1000+", label: "Participants Competed Against" },
            { number: "1", label: "Leadership Position" },
            { number: "2+", label: "Professional Certifications" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
              viewport={{ once: true }}
              className="glass p-4 rounded-lg text-center hover:scale-105 transition-all duration-300"
            >
              <div className="text-2xl lg:text-3xl font-bold text-neon-green mb-1">
                {stat.number}
              </div>
              <div className="text-gray-300 text-xs">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default LeadershipSection
