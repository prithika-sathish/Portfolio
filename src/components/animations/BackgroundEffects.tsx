'use client'

import { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence, useAnimation, useInView } from 'framer-motion'

interface BackgroundEffectsProps {
  currentSection: number
}

const BackgroundEffects = ({ currentSection }: BackgroundEffectsProps) => {
  const [stars, setStars] = useState<Array<{ id: number; x: number; y: number; size: number; color: string }>>([])
  const [rainDrops, setRainDrops] = useState<Array<{ id: number; x: number; delay: number }>>([])
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number; color: string; speed: number }>>([])
  const [mounted, setMounted] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref)
  const controls = useAnimation()

  // Generate elements on mount
  useEffect(() => {
    generateStars()
    generateRain()
    generateParticles()
    setMounted(true)
    
    // Refresh particles
    const refreshInterval = setInterval(() => {
      generateParticles()
    }, 10000)
    
    return () => clearInterval(refreshInterval)
  }, [])

  // Animate controls when section changes
  useEffect(() => {
    if (isInView) {
      controls.start({
        opacity: 1,
        scale: 1,
        transition: { 
          type: "spring", 
          stiffness: 300, 
          damping: 30,
          duration: 0.8 
        }
      })
    }
  }, [isInView, controls, currentSection])

  // Generate stars - minimal version
  const generateStars = () => {
    const newStars = []
    const starColors = ['rgba(0, 255, 65, 0.3)', 'rgba(59, 130, 246, 0.3)']
    
    // Reduced to just 20 subtle accent points
    for (let i = 0; i < 20; i++) {
      newStars.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1,
        color: starColors[Math.floor(Math.random() * starColors.length)]
      })
    }
    setStars(newStars)
  }

  // Generate rain drops
  const generateRain = () => {
    const newRainDrops = []
    for (let i = 0; i < 70; i++) {
      newRainDrops.push({
        id: i,
        x: Math.random() * 100,
        delay: Math.random() * 2,
      })
    }
    setRainDrops(newRainDrops)
  }

  // Generate floating particles - minimal version
  const generateParticles = () => {
    const newParticles = []
    const particleColors = ['rgba(0, 255, 65, 0.15)', 'rgba(59, 130, 246, 0.15)']
    
    // Reduced to 15 subtle particles
    for (let i = 0; i < 15; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 2,
        color: particleColors[Math.floor(Math.random() * particleColors.length)],
        speed: Math.random() * 25 + 15
      })
    }
    setParticles(newParticles)
  }

  // Get background gradient based on section
  const getBackgroundGradient = () => {
    switch (currentSection) {
      case 0: return 'bg-gradient-to-b from-pitch-black to-deep-black'
      case 1: return 'bg-gradient-to-b from-deep-black to-pitch-black'
      case 2: return 'bg-gradient-to-b from-pitch-black to-void-black'
      case 3: return 'bg-gradient-to-b from-void-black to-pitch-black'
      case 4: return 'bg-gradient-to-b from-pitch-black to-deep-black'
      case 5: return 'bg-gradient-to-b from-deep-black to-pitch-black'
      default: return 'bg-pitch-black'
    }
  }

  if (!mounted) {
    return null
  }

  return (
    <div ref={ref} className="fixed inset-0 -z-10 overflow-hidden">
      {/* Main background with smooth transitions */}
      <motion.div
        className={`absolute inset-0 transition-all duration-1000 ${getBackgroundGradient()}`}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Subtle floating particles - minimal and clean */}
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 pointer-events-none"
        >
          {particles.map((particle) => (
            <motion.div
              key={`particle-${particle.id}`}
              className="absolute rounded-full blur-sm"
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                background: particle.color,
              }}
              animate={{
                y: [0, -40, 0],
                x: [0, 20, 0, -20, 0],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: particle.speed,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Subtle accent dots for Hero and Projects sections */}
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
                key={`star-${star.id}`}
                className="absolute rounded-full blur-sm"
                style={{
                  left: `${star.x}%`,
                  top: `${star.y}%`,
                  width: `${star.size}px`,
                  height: `${star.size}px`,
                  background: star.color,
                }}
                animate={{
                  opacity: [0.2, 0.5, 0.2],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 4 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 3,
                }}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Minimal gradient accents for different sections */}
      <AnimatePresence>
        {currentSection === 2 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            {Array.from({ length: 3 }).map((_, i) => (
              <motion.div
                key={`accent-${i}`}
                className="absolute rounded-full"
                style={{
                  left: `${20 + i * 30}%`,
                  top: `${20 + i * 20}%`,
                  width: `${150 + i * 50}px`,
                  height: `${150 + i * 50}px`,
                  background: `radial-gradient(circle, rgba(0, 255, 65, 0.08) 0%, transparent 70%)`,
                  filter: 'blur(40px)',
                }}
                animate={{
                  opacity: [0.3, 0.5, 0.3],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 8 + i * 2,
                  repeat: Infinity,
                  delay: i * 2,
                }}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default BackgroundEffects
