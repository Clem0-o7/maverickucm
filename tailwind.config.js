/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // ---- Material 3 & Brand Tokens from Design.md ----
        surface: {
          DEFAULT: '#0A0A0A', // Base background Level 0
          dim: '#141414', // Level 1 containers
          bright: '#1C1C1E', // Level 2 elevated cards
        },
        primary: {
          DEFAULT: '#FF3B30',
          dark: '#CC2E26',
          light: '#FF7369',
        },
        ink: {
          DEFAULT: '#ffffff', // White/neutral-50 for main text
          soft: '#e5e2e1', // secondary text (on-surface)
          faint: '#909095', // muted text
        },
        red: {
          DEFAULT: '#FF3B30', // keep backward compat
          dark: '#c0000a', // inverse-primary
          light: 'rgba(255, 59, 48, 0.15)', // for chips
        },
        paper: {
          DEFAULT: '#0A0A0A',
          dim: '#141414',
          bright: '#1C1C1E',
        },
        line: 'rgba(255,255,255,0.1)', // for glassmorphism borders
      },
      fontFamily: {
        display: ['Montserrat', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        card: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        glow: '0 0 20px rgba(255, 59, 48, 0.25)',
        'glow-sm': '0 0 10px rgba(255, 59, 48, 0.15)',
        'glow-primary': '0 0 24px rgba(255, 59, 48, 0.4)',
      },
      backgroundImage: {
        'primary-gradient': 'linear-gradient(to right, #FF3B30, #c0000a)',
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)',
        'grain': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E\")",
      },
      borderRadius: {
        DEFAULT: '0.5rem',
        md: '0.75rem',
        lg: '1rem',
        xl: '1.5rem',
      },
      letterSpacing: {
        tightest: '-0.02em',
      }
    },
  },
  plugins: [],
}
