'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Download, Github, Linkedin, Mail, ArrowDown } from 'lucide-react'
import Image from 'next/image'

const HeroSection = () => {
  const [displayedText, setDisplayedText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(true)
  const [glitchActive, setGlitchActive] = useState(false)
  const fullText = 'Software Developer, AI & ML Enthusiast'
  
  useEffect(() => {
    let timeout: NodeJS.Timeout

    if (isTyping && currentIndex < fullText.length) {
      // Typing animation - add next character
      timeout = setTimeout(() => {
        setDisplayedText(prev => prev + fullText[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, 50) // 50ms per character
    } else if (isTyping && currentIndex >= fullText.length) {
      // Finished typing, wait then start clearing
      timeout = setTimeout(() => {
        setIsTyping(false)
      }, 2000) // Wait 2 seconds before clearing
    } else if (!isTyping && displayedText.length > 0) {
      // Clearing animation - remove last character
      timeout = setTimeout(() => {
        setDisplayedText(prev => prev.slice(0, -1))
      }, 30) // Faster clearing (30ms per character)
    } else if (!isTyping && displayedText.length === 0) {
      // Finished clearing, restart typing
      timeout = setTimeout(() => {
        setCurrentIndex(0)
        setIsTyping(true)
      }, 500) // Brief pause before restarting
    }

    return () => clearTimeout(timeout)
  }, [currentIndex, displayedText, isTyping, fullText])

  // Glitch effect trigger
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setGlitchActive(true)
      setTimeout(() => setGlitchActive(false), 200)
    }, 4000) // Glitch every 4 seconds
    
    return () => clearInterval(glitchInterval)
  }, [])
  const handleDownloadResume = () => {
    const link = document.createElement('a')
    link.href = '/Prithika_Sathish_Resume.pdf'
    link.download = 'Prithika_Sathish_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-start justify-center pt-8 lg:pt-12 relative overflow-hidden">
      {/* Glitch overlay effect */}
      <motion.div
        className={`absolute inset-0 pointer-events-none z-10 ${glitchActive ? 'opacity-30' : 'opacity-0'}`}
        animate={{
          opacity: glitchActive ? [0, 0.3, 0, 0.2, 0] : 0,
        }}
        transition={{ duration: 0.2 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-neon-green/10 via-transparent to-blue-500/10" 
             style={{
               backgroundImage: `
                 repeating-linear-gradient(
                   0deg,
                   transparent,
                   transparent 2px,
                   rgba(0, 255, 150, 0.03) 2px,
                   rgba(0, 255, 150, 0.03) 4px
                 )
               `
             }}
        />
      </motion.div>

      <div className="container-max section-padding relative z-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl lg:text-7xl font-bold relative overflow-hidden"
              >
                <motion.span
                  className="relative bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  style={{
                    backgroundImage: 'linear-gradient(110deg, #ffffff 0%, #ffffff 40%, #f8fafc 50%, #ffffff 60%, #d1d5db 100%)',
                    backgroundSize: '200% 100%',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  } as React.CSSProperties}
                >
                  Prithika Sathish
                </motion.span>
              </motion.h1>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-2xl lg:text-3xl font-semibold min-h-[3rem] flex items-center relative overflow-hidden"
              >
                <span className="relative text-neon-green">
                  {displayedText}
                  {/* Sliding shine effect for typing text */}
                  <motion.div
                    className="absolute inset-0"
                    animate={{
                      x: ['-100%', '100%'],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatDelay: 4,
                      ease: "easeInOut"
                    }}
                    style={{
                      background: 'linear-gradient(90deg, transparent, rgba(0,255,150,0.6), transparent)',
                      transform: 'skewX(-20deg)',
                    }}
                  />
                </span>
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" as const }}
                  className="ml-1 text-neon-green"
                >
                  |
                </motion.span>
              </motion.h2>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="space-y-4"
              >
                <p className="text-lg lg:text-xl text-gray-300 max-w-2xl leading-relaxed font-medium">
                  Every line of code is capital. I compound it into products that scale, optimize, and outperform
                </p>
                <p className="text-lg lg:text-xl text-gray-300 max-w-2xl leading-relaxed">
                  Building solutions at the intersection of full-stack engineering, AI/ML, and data-driven.
                </p>
              </motion.div>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <button
                onClick={handleDownloadResume}
                className="neon-button flex items-center gap-2 group"
              >
                <Download className="w-5 h-5 group-hover:animate-bounce" />
                MY RESUME
              </button>
              
              <button
                onClick={() => scrollToSection('projects')}
                className="glass glass-hover px-6 py-3 rounded-lg font-semibold flex items-center gap-2 group"
              >
                View Projects
                <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
              </button>
              
              <button
                onClick={() => scrollToSection('contact')}
                className="glass glass-hover px-6 py-3 rounded-lg font-semibold flex items-center gap-2 group"
              >
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Contact
              </button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex gap-4"
            >
              <a
                href="https://github.com/prithika-sathish"
                target="_blank"
                rel="noopener noreferrer"
                className="glass glass-hover p-3 rounded-lg group"
              >
                <Github className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </a>
              
              <a
                href="https://linkedin.com/in/prithika-sathish-78422022b"
                target="_blank"
                rel="noopener noreferrer"
                className="glass glass-hover p-3 rounded-lg group"
              >
                <Linkedin className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </a>
              
              <a
                href="mailto:prithikasathish.dev@gmail.com"
                className="glass glass-hover p-3 rounded-lg group"
              >
                <Mail className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Side - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center lg:justify-center -mt-4 lg:-mt-8"
          >
            <div className="relative">
              {/* Professional glow effect */}
              <motion.div
                animate={{ 
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="absolute inset-0 rounded-2xl bg-gradient-to-r from-neon-green/15 to-blue-500/15 blur-2xl scale-110"
              />
              
              <motion.div
                className="relative"
              >
                <div className="w-80 h-80 lg:w-[24rem] lg:h-[24rem] rounded-2xl overflow-hidden relative border-4 border-white/10 shadow-2xl">
                  <Image
                    src="/WhatsApp Image 2025-08-24 at 08.26.46_41d70b42.jpg"
                    alt="Prithika Sathish"
                    fill
                    className="object-cover object-center"
                    priority
                  />
                  {/* Very subtle highlight only */}
                  <div className="absolute top-0 left-0 w-full h-1/4 bg-gradient-to-b from-white/3 to-transparent rounded-2xl" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-gray-400"
        >
          <span className="text-sm">Scroll to explore</span>
          <ArrowDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default HeroSection
