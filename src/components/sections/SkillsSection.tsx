'use client'

import { motion } from 'framer-motion'
import { Code, Database, Brain, Cloud, Wrench, Star } from 'lucide-react'

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code,
      skills: ["HTML5", "CSS", "JavaScript", "TypeScript", "React", "Tailwind CSS", "Material UI"],
      color: "from-blue-400 to-cyan-500"
    },
    {
      title: "Backend Development", 
      icon: Database,
      skills: ["Node.js", "Express.js", "Python (Flask, Django, FastAPI)"],
      color: "from-green-400 to-emerald-500"
    },
    {
      title: "AI/ML & Data Science",
      icon: Brain,
      skills: ["TensorFlow", "PyTorch", "OpenCV", "LangChain", "Hugging Face"],
      color: "from-purple-400 to-pink-500"
    },
    {
      title: "Database & Cloud",
      icon: Cloud,
      skills: ["MySQL", "PostgreSQL", "MongoDB", "Firebase", "Supabase"],
      color: "from-orange-400 to-red-500"
    },
    {
      title: "Tools & Technologies",
      icon: Wrench,
      skills: ["Git", "Docker", "GitHub Actions", "REST APIs"],
      color: "from-indigo-400 to-purple-500"
    }
  ]

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center relative">
      <div className="container-max section-padding">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive collection of technologies and frameworks I work with
          </p>
        </motion.div>

        {/* Glass Door Effect Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Main Skills Display */}
          <div className="glass p-6 lg:p-8 rounded-3xl relative overflow-hidden">
            {/* Glass Door Overlay */}
            <motion.div
              initial={{ x: 0 }}
              whileInView={{ x: "100%" }}
              transition={{ duration: 1.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/5 backdrop-blur-sm z-10"
            />

            <div className="relative z-0">
              {/* Skills Categories */}
              <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {skillCategories.map((category, categoryIndex) => (
                  <motion.div
                    key={category.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 + categoryIndex * 0.2 }}
                    viewport={{ once: true }}
                    className="space-y-4"
                  >
                    {/* Category Header */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${category.color} p-2`}>
                        <category.icon className="w-full h-full text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-white">
                        {category.title}
                      </h3>
                    </div>

                    {/* Skills Badges */}
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8, rotateY: 180 }}
                          whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                          transition={{ 
                            duration: 0.6, 
                            delay: 1 + categoryIndex * 0.2 + skillIndex * 0.1,
                            type: "spring",
                            stiffness: 100
                          }}
                          viewport={{ once: true }}
                          className="group"
                        >
                          <div className={`glass px-3 py-1.5 rounded-md text-center hover:scale-105 transition-all duration-300 border border-transparent hover:border-gradient-to-r ${category.color} relative overflow-hidden`}>
                            <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                            <div className="relative z-10">
                              <div className="text-xs font-medium text-white group-hover:text-neon-green transition-colors whitespace-nowrap">
                                {skill}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Glass Door Handle */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20"
          >
            <div className="w-6 h-16 bg-gradient-to-b from-white/30 to-white/10 rounded-full backdrop-blur-sm border border-white/20" />
          </motion.div>
        </motion.div>

        {/* Skills Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12"
        >
          {[
            { number: "15+", label: "Frontend Technologies" },
            { number: "8+", label: "Backend Frameworks" },
            { number: "10+", label: "AI/ML Libraries" },
            { number: "6+", label: "Database Systems" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 2.2 + index * 0.1 }}
              viewport={{ once: true }}
              className="glass p-4 rounded-xl text-center hover:scale-105 transition-all duration-300"
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

export default SkillsSection
