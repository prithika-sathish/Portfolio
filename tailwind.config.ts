import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'neon-green': '#00ff41',
        'neon-pink': '#ff0080',
        'neon-blue': '#0080ff',
        'neon-purple': '#8000ff',
        'neon-cyan': '#00ffff',
        'neon-orange': '#ff4000',
        'neon-yellow': '#ffff00',
        'glass-white': 'rgba(255, 255, 255, 0.03)',
        'glass-border': 'rgba(255, 255, 255, 0.08)',
        'pitch-black': '#000000',
        'deep-black': '#0a0a0a',
        'void-black': '#050505',
        'matrix-green': '#00ff00',
        'cyber-blue': '#00d4ff',
      },
      backdropBlur: {
        'xs': '2px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 3s infinite',
        'rain': 'rain 2s linear infinite',
        'wave': 'wave 4s ease-in-out infinite',
        'stars': 'stars 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        rain: {
          '0%': { transform: 'translateY(-100vh)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateY(100vh)', opacity: '0' },
        },
        wave: {
          '0%, 100%': { transform: 'translateX(0px) translateY(0px)' },
          '25%': { transform: 'translateX(5px) translateY(-5px)' },
          '50%': { transform: 'translateX(-5px) translateY(-10px)' },
          '75%': { transform: 'translateX(-5px) translateY(-5px)' },
        },
        stars: {
          '0%': { transform: 'translateY(0px)' },
          '100%': { transform: 'translateY(-100vh)' },
        },
      },
      backgroundImage: {
        'galaxy-gradient': 'radial-gradient(ellipse at center, #000000 0%, #0a0a0a 50%, #000000 100%)',
        'ocean-gradient': 'linear-gradient(135deg, #000000 0%, #001122 50%, #000000 100%)',
        'cloud-gradient': 'linear-gradient(135deg, #000000 0%, #111111 50%, #000000 100%)',
        'hero-gradient': 'radial-gradient(ellipse at center, #000000 0%, #050505 50%, #000000 100%)',
        'cyber-grid': 'linear-gradient(90deg, transparent 98%, #00ff41 100%), linear-gradient(transparent 98%, #00ff41 100%)',
      },
    },
  },
  plugins: [],
}
export default config
