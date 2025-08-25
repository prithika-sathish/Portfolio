'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import { motion } from 'framer-motion'

interface BlockBreakerGameProps {
  onContactHit: () => void
}

interface Ball {
  x: number
  y: number
  dx: number
  dy: number
  radius: number
}

interface Paddle {
  x: number
  y: number
  width: number
  height: number
}

interface Block {
  x: number
  y: number
  width: number
  height: number
  destroyed: boolean
  isContact: boolean
}

const BlockBreakerGame = ({ onContactHit }: BlockBreakerGameProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()
  const [gameStarted, setGameStarted] = useState(false)
  const [score, setScore] = useState(0)
  const [gameWon, setGameWon] = useState(false)

  const gameState = useRef({
    ball: { x: 200, y: 300, dx: 3, dy: -3, radius: 8 } as Ball,
    paddle: { x: 160, y: 360, width: 80, height: 10 } as Paddle,
    blocks: [] as Block[],
    keys: { left: false, right: false }
  })

  const initializeGame = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const blocks: Block[] = []
    const blockWidth = 90
    const blockHeight = 25
    const padding = 10
    const rows = 5
    const cols = 10
    const startX = (canvas.width - (cols * (blockWidth + padding) - padding)) / 2

    // Create regular blocks
    for (let row = 0; row < rows - 1; row++) {
      for (let col = 0; col < cols; col++) {
        blocks.push({
          x: startX + col * (blockWidth + padding),
          y: row * (blockHeight + padding) + 60,
          width: blockWidth,
          height: blockHeight,
          destroyed: false,
          isContact: false
        })
      }
    }

    // Create special contact block in the center of the last row
    const contactBlock: Block = {
      x: startX + (cols / 2 - 1) * (blockWidth + padding),
      y: (rows - 1) * (blockHeight + padding) + 60,
      width: blockWidth * 2 + padding,
      height: blockHeight,
      destroyed: false,
      isContact: true
    }
    blocks.push(contactBlock)

    gameState.current.blocks = blocks
    // Position ball to hit the contact block on first bounce
    gameState.current.ball = { x: contactBlock.x + contactBlock.width / 2, y: 300, dx: 0, dy: 4, radius: 10 }
    gameState.current.paddle = { x: canvas.width / 2 - 80, y: canvas.height - 50, width: 160, height: 15 }
    setScore(0)
    setGameWon(false)
  }, [])

  const drawInitialState = useCallback(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx) return

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    const { ball, paddle, blocks } = gameState.current

    // Draw ball (stationary)
    ctx.save()
    ctx.shadowColor = '#00ff88'
    ctx.shadowBlur = 15
    ctx.beginPath()
    ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2)
    ctx.fillStyle = '#00ff88'
    ctx.fill()
    ctx.restore()

    // Draw paddle
    const paddleGradient = ctx.createLinearGradient(paddle.x, paddle.y, paddle.x, paddle.y + paddle.height)
    paddleGradient.addColorStop(0, '#00ff88')
    paddleGradient.addColorStop(1, '#00cc6a')
    ctx.fillStyle = paddleGradient
    ctx.fillRect(paddle.x, paddle.y, paddle.width, paddle.height)

    // Draw all blocks
    blocks.forEach(block => {
      if (!block.destroyed) {
        if (block.isContact) {
          // Special styling for contact block - golden color
          const contactGradient = ctx.createLinearGradient(block.x, block.y, block.x, block.y + block.height)
          contactGradient.addColorStop(0, '#ffd700')
          contactGradient.addColorStop(1, '#ffb347')
          ctx.fillStyle = contactGradient
          ctx.fillRect(block.x, block.y, block.width, block.height)
          
          // Add glow effect
          ctx.save()
          ctx.shadowColor = '#ffd700'
          ctx.shadowBlur = 10
          ctx.fillRect(block.x, block.y, block.width, block.height)
          ctx.restore()
        } else {
          // Regular blocks
          const blockGradient = ctx.createLinearGradient(block.x, block.y, block.x, block.y + block.height)
          blockGradient.addColorStop(0, 'rgba(255, 255, 255, 0.3)')
          blockGradient.addColorStop(1, 'rgba(255, 255, 255, 0.1)')
          ctx.fillStyle = blockGradient
          ctx.fillRect(block.x, block.y, block.width, block.height)
          
          // Block border
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)'
          ctx.lineWidth = 1
          ctx.strokeRect(block.x, block.y, block.width, block.height)
        }
      }
    })
  }, [])

  const drawGame = useCallback(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx) return

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    const { ball, paddle, blocks } = gameState.current

    // Draw ball with glow effect
    ctx.save()
    ctx.shadowColor = '#00ff88'
    ctx.shadowBlur = 15
    ctx.beginPath()
    ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2)
    ctx.fillStyle = '#00ff88'
    ctx.fill()
    ctx.restore()

    // Draw paddle with gradient
    const paddleGradient = ctx.createLinearGradient(paddle.x, paddle.y, paddle.x, paddle.y + paddle.height)
    paddleGradient.addColorStop(0, '#00ff88')
    paddleGradient.addColorStop(1, '#00cc6a')
    ctx.fillStyle = paddleGradient
    ctx.fillRect(paddle.x, paddle.y, paddle.width, paddle.height)

    // Draw blocks
    blocks.forEach(block => {
      if (!block.destroyed) {
        if (block.isContact) {
          // Special styling for contact block - golden color
          const contactGradient = ctx.createLinearGradient(block.x, block.y, block.x, block.y + block.height)
          contactGradient.addColorStop(0, '#ffd700')
          contactGradient.addColorStop(1, '#ffb347')
          ctx.fillStyle = contactGradient
          ctx.fillRect(block.x, block.y, block.width, block.height)
          
          // Add glow effect
          ctx.save()
          ctx.shadowColor = '#ffd700'
          ctx.shadowBlur = 10
          ctx.fillRect(block.x, block.y, block.width, block.height)
          ctx.restore()
        } else {
          // Regular blocks
          const blockGradient = ctx.createLinearGradient(block.x, block.y, block.x, block.y + block.height)
          blockGradient.addColorStop(0, 'rgba(255, 255, 255, 0.3)')
          blockGradient.addColorStop(1, 'rgba(255, 255, 255, 0.1)')
          ctx.fillStyle = blockGradient
          ctx.fillRect(block.x, block.y, block.width, block.height)
          
          // Block border
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)'
          ctx.lineWidth = 1
          ctx.strokeRect(block.x, block.y, block.width, block.height)
        }
      }
    })

    // Draw score
    ctx.fillStyle = 'white'
    ctx.font = '16px Arial'
    ctx.textAlign = 'left'
    ctx.fillText(`Score: ${score}`, 10, 25)
  }, [score])

  const updateGame = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const { ball, paddle, blocks, keys } = gameState.current

    // Move paddle
    if (keys.left && paddle.x > 0) {
      paddle.x -= 6
    }
    if (keys.right && paddle.x < canvas.width - paddle.width) {
      paddle.x += 6
    }

    // Move ball
    ball.x += ball.dx
    ball.y += ball.dy

    // Ball collision with walls
    if (ball.x + ball.radius > canvas.width || ball.x - ball.radius < 0) {
      ball.dx = -ball.dx
    }
    if (ball.y - ball.radius < 0) {
      ball.dy = -ball.dy
    }

    // Ball collision with paddle
    if (
      ball.y + ball.radius > paddle.y &&
      ball.y - ball.radius < paddle.y + paddle.height &&
      ball.x > paddle.x &&
      ball.x < paddle.x + paddle.width
    ) {
      ball.dy = -ball.dy
      // Add some angle based on where it hits the paddle
      const hitPos = (ball.x - paddle.x) / paddle.width
      ball.dx = (hitPos - 0.5) * 6
    }

    // Ball collision with blocks
    blocks.forEach(block => {
      if (!block.destroyed) {
        if (
          ball.x > block.x &&
          ball.x < block.x + block.width &&
          ball.y > block.y &&
          ball.y < block.y + block.height
        ) {
          block.destroyed = true
          ball.dy = -ball.dy
          
          if (block.isContact) {
            onContactHit()
            setGameWon(true)
          } else {
            setScore(prev => prev + 10)
          }
        }
      }
    })

    // Reset ball if it goes off screen
    if (ball.y > canvas.height) {
      ball.x = canvas.width / 2
      ball.y = canvas.height / 2
      ball.dx = 3
      ball.dy = -3
    }
  }, [onContactHit])

  const gameLoop = useCallback(() => {
    if (!gameStarted) return

    updateGame()
    drawGame()
    animationRef.current = requestAnimationFrame(gameLoop)
  }, [gameStarted, updateGame, drawGame])

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') {
      gameState.current.keys.left = true
    }
    if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') {
      gameState.current.keys.right = true
    }
  }, [])

  const handleKeyUp = useCallback((e: KeyboardEvent) => {
    if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') {
      gameState.current.keys.left = false
    }
    if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') {
      gameState.current.keys.right = false
    }
  }, [])

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current
    if (!canvas) return

    const rect = canvas.getBoundingClientRect()
    const mouseX = e.clientX - rect.left
    gameState.current.paddle.x = Math.max(0, Math.min(mouseX - gameState.current.paddle.width / 2, canvas.width - gameState.current.paddle.width))
  }, [])

  const startGame = () => {
    setGameStarted(true)
    initializeGame()
  }

  useEffect(() => {
    initializeGame()
    drawInitialState()
    
    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('keyup', handleKeyUp)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('keyup', handleKeyUp)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [initializeGame, drawInitialState, handleKeyDown, handleKeyUp])

  useEffect(() => {
    if (gameStarted) {
      gameLoop()
    }
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [gameStarted, gameLoop])

  return (
    <div className="space-y-4">
      <motion.canvas
        ref={canvasRef}
        width={1000}
        height={400}
        onMouseMove={handleMouseMove}
        className="border border-white/20 rounded-lg bg-black/20 cursor-none w-full max-w-6xl mx-auto"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      />
      
      <div className="text-center space-y-4">
        {!gameStarted ? (
          <motion.button
            onClick={startGame}
            className="neon-button px-6 py-3"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Game
          </motion.button>
        ) : (
          <div className="space-y-2">
            <p className="text-gray-300 text-sm">
              Use arrow keys or A/D to move paddle, or move your mouse!
            </p>
            {gameWon && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-neon-green font-bold"
              >
                🎉 Contact block hit! Check your modal!
              </motion.div>
            )}
          </div>
        )}
        
        <motion.button
          onClick={() => {
            setGameStarted(false)
            initializeGame()
          }}
          className="glass glass-hover px-4 py-2 rounded-lg text-sm"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Reset Game
        </motion.button>
      </div>
    </div>
  )
}

export default BlockBreakerGame
