'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Search } from 'lucide-react'

const CursorFollower = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    window.addEventListener('mousemove', updateMousePosition)
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  if (!isVisible) return null

  return (
    <>
      {/* Main cursor glow - more visible */}
      <motion.div
        className="fixed pointer-events-none z-[9999] mix-blend-screen"
        animate={{
          x: mousePosition.x - 25,
          y: mousePosition.y - 25,
        }}
        transition={{
          type: "spring",
          damping: 15,
          stiffness: 400,
          mass: 0.3,
        }}
      >
        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-yellow-300/60 via-green-300/60 to-emerald-400/60 blur-lg" />
      </motion.div>

      {/* Secondary larger glow - more visible */}
      <motion.div
        className="fixed pointer-events-none z-[9998] mix-blend-screen"
        animate={{
          x: mousePosition.x - 40,
          y: mousePosition.y - 40,
        }}
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 350,
          mass: 0.4,
        }}
      >
        <div className="w-20 h-20 rounded-full bg-gradient-to-r from-yellow-200/40 via-green-200/40 to-emerald-300/40 blur-xl" />
      </motion.div>

      {/* Trailing effect - more visible */}
      <motion.div
        className="fixed pointer-events-none z-[9997] mix-blend-screen"
        animate={{
          x: mousePosition.x - 50,
          y: mousePosition.y - 50,
        }}
        transition={{
          type: "spring",
          damping: 25,
          stiffness: 300,
          mass: 0.5,
        }}
      >
        <div className="w-24 h-24 rounded-full bg-gradient-to-r from-yellow-100/25 via-green-100/25 to-emerald-200/25 blur-2xl" />
      </motion.div>

      {/* Magnifying glass icon instead of dot */}
      <motion.div
        className="fixed pointer-events-none z-[10000]"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
        }}
        transition={{
          type: "spring",
          damping: 10,
          stiffness: 500,
          mass: 0.1,
        }}
      >
        <div className="w-6 h-6 flex items-center justify-center">
          <Search className="w-5 h-5 text-green-400 drop-shadow-[0_0_8px_rgba(34,197,94,0.8)]" strokeWidth={2.5} />
        </div>
      </motion.div>
    </>
  )
}

export default CursorFollower
