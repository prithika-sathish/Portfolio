'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Code, Zap, Brain, Shield } from 'lucide-react'

const ProjectsSection = () => {
  const projects = [
    {
      name: "Chakra Markets – Retail Trading Intelligence Suite",
      description: "Real-time analytics platform with portfolio insights, goal-based allocation, and strategy payoff graphs using live NSE and Yahoo Finance APIs.",
      tech: ["Vite.js", "Node.js", "D3.js", "Material UI"],
      links: {
        github: "https://github.com/prithika-sathish/Chakramarkets"
      },
      icon: Code,
      gradient: "from-green-400 to-blue-500"
    },
    {
      name: "E-Waste Collector",
      description: "Gamified e-waste collection platform with YOLOv8 detection, QR tagging, and NGO collaboration for impact tracking.",
      tech: ["YOLOv8", "Arduino", "Node.js"],
      links: {
        github: "https://github.com/prithika-sathish/E-Collector"
      },
      icon: Zap,
      gradient: "from-purple-400 to-pink-500"
    },
    {
      name: "HerHaven – Women Wellness Platform",
      description: "Platform for scheme discovery, financial literacy, job discovery, and SOS safety features with location tracking.",
      tech: ["Node.js", "Firebase", "JavaScript"],
      links: {
        github: "https://github.com/prithika-sathish/Herhaven"
      },
      icon: Shield,
      gradient: "from-pink-400 to-red-500"
    },
    {
      name: "JobVerse – Job Simulation & Preparation",
      description: "Interactive platform with role simulations, AI-driven guidance, resume parsing, and skill-tracking workflows via n8n + Gemini API.",
      tech: ["n8n", "Gemini API", "Node.js"],
      links: {
        github: "https://github.com/prithika-sathish/JOB-Verse"
      },
      icon: Brain,
      gradient: "from-blue-400 to-purple-500"
    }
  ]

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center relative">
      <div className="container-max section-padding">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Innovative solutions spanning fintech, sustainability, social impact, and career development
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-2xl hover:scale-105 transition-all duration-300 group relative overflow-hidden"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
              
              <div className="relative z-10">
                {/* Project Icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                  viewport={{ once: true }}
                  className="mb-6"
                >
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${project.gradient} p-4 group-hover:scale-110 transition-transform duration-300`}>
                    <project.icon className="w-full h-full text-white" />
                  </div>
                </motion.div>

                {/* Project Title */}
                <motion.h3
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                  viewport={{ once: true }}
                  className="text-2xl font-bold text-white mb-4 group-hover:text-neon-green transition-colors duration-300"
                >
                  {project.name}
                </motion.h3>

                {/* Project Description */}
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
                  viewport={{ once: true }}
                  className="text-gray-300 mb-6 leading-relaxed"
                >
                  {project.description}
                </motion.p>

                {/* Tech Stack */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.6 }}
                  viewport={{ once: true }}
                  className="mb-6"
                >
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: index * 0.2 + 0.7 + techIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="px-3 py-1 bg-white/10 rounded-full text-sm font-medium text-neon-green border border-neon-green/30 hover:bg-neon-green/10 transition-colors duration-300"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                {/* Project Links */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.8 }}
                  viewport={{ once: true }}
                  className="flex gap-4"
                >
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-300 group/link"
                  >
                    <Github className="w-5 h-5 group-hover/link:scale-110 transition-transform" />
                    <span className="font-medium">GitHub</span>
                  </a>
                  
                  {project.links.demo && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-neon-green/20 hover:bg-neon-green/30 text-neon-green rounded-lg transition-all duration-300 group/link"
                    >
                      <ExternalLink className="w-5 h-5 group-hover/link:scale-110 transition-transform" />
                      <span className="font-medium">Live Demo</span>
                    </a>
                  )}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Projects */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            href="https://github.com/prithika-sathish"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 glass glass-hover rounded-xl font-semibold text-lg group"
          >
            <Github className="w-6 h-6 group-hover:scale-110 transition-transform" />
            View All Projects on GitHub
            <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default ProjectsSection
