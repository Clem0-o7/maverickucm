/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // ---- Maverick UcM Institute brand tokens ----
        // Derived straight from the logo: bold red "MAVERICK" wordmark,
        // charcoal swoosh, muted slate book pages, cream "UcM" wordmark.
        ink: {
          DEFAULT: '#221F1D', // near-black charcoal (logo swoosh)
          soft: '#3B3733',
          faint: '#5A554F',
        },
        red: {
          DEFAULT: '#DA1E28', // logo red
          dark: '#A4131C',
          light: '#FBE4E6',
        },
        slate: {
          DEFAULT: '#7E8CA3', // logo page-flip blue-grey
          dark: '#5B6880',
          light: '#E7EAF0',
        },
        paper: {
          DEFAULT: '#F6F4EF', // warm off-white page background
          dim: '#ECE8DF',
        },
        cream: '#F0E9D8', // logo "UcM" wordmark cream
        line: '#DEDACF',
      },
      fontFamily: {
        display: ['"Big Shoulders Display"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        card: '0 1px 2px rgba(34,31,29,0.06), 0 8px 24px -12px rgba(34,31,29,0.18)',
        stamp: '0 2px 0 rgba(34,31,29,0.9)',
      },
      backgroundImage: {
        'grain': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
}
