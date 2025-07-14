/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        // Paleta Holográfica Única
        'holo': {
          'cyan': '#00d4ff',
          'pink': '#ec4899',
          'purple': '#a855f7',
          'green': '#10b981',
          'yellow': '#fbbf24',
          'orange': '#f97316',
        },
        // Colores Neon Brillantes
        'neon': {
          'cyan': '#00ffff',
          'pink': '#ff007f',
          'purple': '#bf00ff',
          'green': '#00ff41',
          'yellow': '#ffff00',
          'orange': '#ff8000',
          'blue': '#0080ff',
          'red': '#ff0040',
        },
        // Colores de Fondo Oscuros
        'dark': {
          '900': '#0a0a0f',
          '800': '#1a1a2e',
          '700': '#16213e',
          '600': '#0f3460',
          '500': '#533483',
        },
        // Colores Glassmorphism
        'glass': {
          'light': 'rgba(255, 255, 255, 0.1)',
          'medium': 'rgba(255, 255, 255, 0.2)',
          'dark': 'rgba(0, 0, 0, 0.3)',
        }
      },
      fontFamily: {
        'cyber': ['Orbitron', 'monospace'],
        'mono': ['JetBrains Mono', 'monospace'],
        'display': ['Exo 2', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-neon': 'pulseNeon 2s ease-in-out infinite alternate',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'matrix': 'matrix 20s linear infinite',
        'hologram': 'hologram 3s ease-in-out infinite',
        'data-stream': 'dataStream 1.5s linear infinite',
        'cyber-pulse': 'cyberPulse 1s ease-in-out infinite',
        'scan-line': 'scanLine 2s linear infinite',
        'glitch': 'glitch 0.3s ease-in-out infinite',
        'particle': 'particle 10s linear infinite',
        'rotate-3d': 'rotate3d 10s linear infinite',
        'morph': 'morph 4s ease-in-out infinite',
        'quantum': 'quantum 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        pulseNeon: {
          '0%': { 
            boxShadow: '0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor',
            textShadow: '0 0 5px currentColor'
          },
          '100%': { 
            boxShadow: '0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor',
            textShadow: '0 0 10px currentColor'
          }
        },
        glow: {
          '0%': { filter: 'brightness(1) saturate(1)' },
          '100%': { filter: 'brightness(1.2) saturate(1.5)' }
        },
        matrix: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' }
        },
        hologram: {
          '0%, 100%': { 
            opacity: '0.8',
            transform: 'rotateY(0deg) scale(1)',
            filter: 'hue-rotate(0deg)'
          },
          '50%': { 
            opacity: '1',
            transform: 'rotateY(5deg) scale(1.02)',
            filter: 'hue-rotate(90deg)'
          }
        },
        dataStream: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' }
        },
        cyberPulse: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.05)', opacity: '0.8' }
        },
        scanLine: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' }
        },
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' }
        },
        particle: {
          '0%': { 
            transform: 'translateY(100vh) rotate(0deg)',
            opacity: '0'
          },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { 
            transform: 'translateY(-100vh) rotate(360deg)',
            opacity: '0'
          }
        },
        rotate3d: {
          '0%': { transform: 'rotateX(0deg) rotateY(0deg)' },
          '100%': { transform: 'rotateX(360deg) rotateY(360deg)' }
        },
        morph: {
          '0%, 100%': { borderRadius: '20px' },
          '25%': { borderRadius: '50px 20px' },
          '50%': { borderRadius: '20px 50px' },
          '75%': { borderRadius: '50px' }
        },
        quantum: {
          '0%, 100%': { 
            transform: 'scale(1) rotate(0deg)',
            filter: 'hue-rotate(0deg)'
          },
          '33%': { 
            transform: 'scale(1.1) rotate(120deg)',
            filter: 'hue-rotate(120deg)'
          },
          '66%': { 
            transform: 'scale(0.9) rotate(240deg)',
            filter: 'hue-rotate(240deg)'
          }
        }
      },
      backdropBlur: {
        'xs': '2px',
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
        '2xl': '24px',
        '3xl': '40px',
      },
      backgroundImage: {
        'cyber-grid': `
          linear-gradient(rgba(0, 212, 255, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 212, 255, 0.1) 1px, transparent 1px)
        `,
        'hologram': `
          linear-gradient(45deg, 
            rgba(0, 212, 255, 0.1) 0%, 
            rgba(236, 72, 153, 0.1) 25%, 
            rgba(168, 85, 247, 0.1) 50%, 
            rgba(16, 185, 129, 0.1) 75%, 
            rgba(0, 212, 255, 0.1) 100%)
        `,
        'neural-network': `
          radial-gradient(circle at 20% 80%, rgba(0, 212, 255, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(236, 72, 153, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 40% 40%, rgba(168, 85, 247, 0.1) 0%, transparent 50%)
        `,
      },
      boxShadow: {
        'neon-cyan': '0 0 20px #00ffff, 0 0 40px #00ffff, 0 0 60px #00ffff',
        'neon-pink': '0 0 20px #ff007f, 0 0 40px #ff007f, 0 0 60px #ff007f',
        'neon-purple': '0 0 20px #bf00ff, 0 0 40px #bf00ff, 0 0 60px #bf00ff',
        'neon-green': '0 0 20px #00ff41, 0 0 40px #00ff41, 0 0 60px #00ff41',
        'hologram': '0 8px 32px rgba(0, 212, 255, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
        'cyber': '0 4px 20px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(0, 212, 255, 0.3)',
        'glass': '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
      },
      clipPath: {
        'cyber': 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))',
        'diamond': 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
        'hexagon': 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    function({ addUtilities }) {
      const newUtilities = {
        '.glass-primary': {
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
        },
        '.glass-dark': {
          background: 'rgba(0, 0, 0, 0.3)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        },
        '.cyber-button': {
          background: 'linear-gradient(45deg, #00d4ff, #ec4899)',
          clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))',
          transition: 'all 0.3s ease',
        },
        '.cyber-button:hover': {
          transform: 'scale(1.05)',
          boxShadow: '0 0 20px #00d4ff, 0 0 40px #ec4899',
        },
        '.hologram-card': {
          background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
          backdropFilter: 'blur(15px)',
          border: '1px solid rgba(255,255,255,0.2)',
          position: 'relative',
          overflow: 'hidden',
        },
        '.hologram-card::before': {
          content: '""',
          position: 'absolute',
          top: '0',
          left: '-100%',
          width: '100%',
          height: '100%',
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
          transition: 'left 0.5s',
        },
        '.hologram-card:hover::before': {
          left: '100%',
        },
        '.text-glow': {
          textShadow: '0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor',
        },
        '.border-glow': {
          boxShadow: '0 0 10px currentColor, inset 0 0 10px currentColor',
        },
        '.neural-bg': {
          background: `
            radial-gradient(circle at 20% 80%, rgba(0, 212, 255, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(236, 72, 153, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(168, 85, 247, 0.1) 0%, transparent 50%),
            linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 50%, #16213e 100%)
          `,
        }
      }
      addUtilities(newUtilities)
    }
  ],
}