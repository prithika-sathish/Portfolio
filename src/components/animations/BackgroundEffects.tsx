'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface BackgroundEffectsProps {
  currentSection: number
}

const BackgroundEffects = ({ currentSection }: BackgroundEffectsProps) => {
  const [stars, setStars] = useState<Array<{ id: number; x: number; y: number; size: number }>>([])
  const [rainDrops, setRainDrops] = useState<Array<{ id: number; x: number; delay: number }>>([])

  useEffect(() => {
    // Generate stars for hero and projects sections
    const generateStars = () => {
      const newStars = []
      for (let i = 0; i < 100; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 3 + 1,
        })
      }
      setStars(newStars)
    }

    // Generate rain drops for experience section
    const generateRain = () => {
      const newRainDrops = []
      for (let i = 0; i < 50; i++) {
        newRainDrops.push({
          id: i,
          x: Math.random() * 100,
          delay: Math.random() * 2,
        })
      }
      setRainDrops(newRainDrops)
    }

    generateStars()
    generateRain()
  }, [])

  const getBackgroundGradient = () => {
    switch (currentSection) {
      case 0: // Hero - Matrix/Cyber
        return 'bg-pitch-black'
      case 1: // Experience - Neon Rain
        return 'bg-pitch-black'
      case 2: // Leadership - Cyber Grid
        return 'bg-pitch-black'
      case 3: // Projects - Neon Galaxy
        return 'bg-pitch-black'
      case 4: // Skills - Digital Matrix
        return 'bg-pitch-black'
      case 5: // Contact - Cyber Ocean
        return 'bg-pitch-black'
      default:
        return 'bg-pitch-black'
    }
  }

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        className={`absolute inset-0 transition-all duration-1000 ${getBackgroundGradient()}`}
        animate={{
          opacity: 1,
        }}
        transition={{ duration: 1 }}
      />

      {/* Stars for Hero and Projects sections */}
      <AnimatePresence>
        {(currentSection === 0 || currentSection === 3) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            {stars.map((star) => (
              <motion.div
                key={star.id}
                className="absolute bg-white rounded-full"
                style={{
                  left: `${star.x}%`,
                  top: `${star.y}%`,
                  width: `${star.size}px`,
                  height: `${star.size}px`,
                }}
                animate={{
                  opacity: [0.3, 1, 0.3],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: Math.random() * 3,
                }}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Rain for Experience section */}
      <AnimatePresence>
        {currentSection === 1 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            {rainDrops.map((drop) => (
              <motion.div
                key={drop.id}
                className="absolute w-0.5 h-8 bg-gradient-to-b from-transparent to-white/60"
                style={{
                  left: `${drop.x}%`,
                }}
                animate={{
                  y: ['0vh', '100vh'],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: drop.delay,
                  ease: 'linear',
                }}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Galaxy particles for Projects section */}
      <AnimatePresence>
        {currentSection === 3 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            {Array.from({ length: 20 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-neon-green/30 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: Math.random() * 4,
                }}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Ocean waves for Contact section */}
      <AnimatePresence>
        {currentSection === 5 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            {/* Multiple wave layers for depth */}
            <motion.div
              className="absolute bottom-0 left-0 w-full h-48 opacity-50"
              style={{
                background: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120' preserveAspectRatio='none'%3E%3Cpath d='M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z' fill='rgba(30,64,175,0.6)'%3E%3C/path%3E%3C/svg%3E") repeat-x`,
              }}
              animate={{
                x: [0, -200],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
            
            {/* Second wave layer */}
            <motion.div
              className="absolute bottom-0 left-0 w-full h-40 opacity-40"
              style={{
                background: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120' preserveAspectRatio='none'%3E%3Cpath d='M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z' fill='rgba(59,130,246,0.4)'%3E%3C/path%3E%3C/svg%3E") repeat-x`,
              }}
              animate={{
                x: [0, 150],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: 'linear',
              }}
            />

            {/* Third wave layer */}
            <motion.div
              className="absolute bottom-0 left-0 w-full h-36 opacity-35"
              style={{
                background: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120' preserveAspectRatio='none'%3E%3Cpath d='M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z' fill='rgba(29,78,216,0.3)'%3E%3C/path%3E%3C/svg%3E") repeat-x`,
              }}
              animate={{
                x: [0, -120],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: 'linear',
              }}
            />

            {/* Ocean bubbles */}
            {Array.from({ length: 15 }).map((_, i) => (
              <motion.div
                key={`bubble-${i}`}
                className="absolute w-3 h-3 bg-blue-400/30 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  bottom: `${Math.random() * 30}%`,
                }}
                animate={{
                  y: [0, -100, -200],
                  opacity: [0, 0.7, 0],
                  scale: [0.5, 1, 1.5],
                }}
                transition={{
                  duration: 6 + Math.random() * 4,
                  repeat: Infinity,
                  delay: Math.random() * 5,
                  ease: 'easeOut',
                }}
              />
            ))}

            {/* Ocean particles */}
            {Array.from({ length: 25 }).map((_, i) => (
              <motion.div
                key={`particle-${i}`}
                className="absolute w-1 h-1 bg-blue-200/50 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  bottom: `${Math.random() * 40}%`,
                }}
                animate={{
                  x: [0, Math.random() * 100 - 50],
                  y: [0, Math.random() * 50 - 25],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 8 + Math.random() * 4,
                  repeat: Infinity,
                  delay: Math.random() * 3,
                  ease: 'easeInOut',
                }}
              />
            ))}

            {/* Ocean depth gradient overlay */}
            <motion.div
              className="absolute bottom-0 left-0 w-full h-64 pointer-events-none"
              style={{
                background: 'linear-gradient(to top, rgba(15,23,42,0.4) 0%, rgba(30,58,138,0.2) 30%, rgba(59,130,246,0.1) 60%, transparent 100%)',
              }}
              animate={{
                opacity: [0.4, 0.7, 0.4],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default BackgroundEffects
