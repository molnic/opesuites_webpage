/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          deep: '#050505',
          surface: '#121212',
          'surface-hover': '#1a1a1a',
        },
        text: {
          main: '#e6e6e6',
          muted: '#888888',
        },
        accent: {
          DEFAULT: '#d4af37',
          glow: 'rgba(212, 175, 55, 0.2)',
        },
        border: 'rgba(255, 255, 255, 0.08)',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      transitionTimingFunction: {
        'out-custom': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
      },
      animation: {
        'reveal': 'reveal 0.8s cubic-bezier(0.215, 0.61, 0.355, 1) forwards',
      },
      keyframes: {
        reveal: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
