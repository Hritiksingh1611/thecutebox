/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 🇮🇳 Indian Palette
        saffron: {
          50:  '#fff8f0',
          100: '#ffefd6',
          200: '#ffd9a3',
          300: '#ffbc6b',
          400: '#ff9933', // Indian flag saffron
          500: '#FF6B1A', // primary CTA
          600: '#e55a0d',
          700: '#c04508',
          800: '#9a360a',
          900: '#7d2e0d',
        },
        marigold: {
          50:  '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#FFB347',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
        },
        teal: {
          50:  '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#00897B', // peacock teal
          600: '#00796B',
          700: '#00695C',
          800: '#004D40',
          900: '#003330',
        },
        rose: {
          gulabi: '#E91E8C',
          light:  '#FF80C8',
          pale:   '#FFD6EE',
        },
        ivory: {
          DEFAULT: '#FFF8E7',
          warm:    '#FFF3D4',
          rich:    '#F5EDD5',
          dark:    '#EDE0C4',
        },
        indigo: {
          deep:  '#1A1035',
          rich:  '#2D1B69',
          mid:   '#3F51B5',
        },
        earth: {
          DEFAULT: '#8B4513',
          light:   '#A0522D',
          pale:    '#D2B48C',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans:    ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-indian':     'linear-gradient(135deg, #FFF8E7 0%, #ffefd6 50%, #FFF8E7 100%)',
        'gradient-hero':       'linear-gradient(160deg, #FFF8E7 0%, #ffefd6 40%, #fff3d4 100%)',
        'gradient-saffron':    'linear-gradient(135deg, #FF6B1A 0%, #ff9933 100%)',
        'gradient-festive':    'linear-gradient(135deg, #FF6B1A 0%, #E91E8C 100%)',
        'gradient-teal':       'linear-gradient(135deg, #00897B 0%, #004D40 100%)',
        'gradient-dark':       'linear-gradient(135deg, #1A1035 0%, #2D1B69 100%)',
        'rangoli-pattern':     "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FF6B1A' fill-opacity='0.06'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
      },
      boxShadow: {
        'warm':     '0 4px 20px rgba(255, 107, 26, 0.10)',
        'warm-sm':  '0 2px 8px rgba(255, 107, 26, 0.08)',
        'warm-lg':  '0 8px 40px rgba(255, 107, 26, 0.15)',
        'warm-xl':  '0 20px 60px rgba(255, 107, 26, 0.18)',
        'teal':     '0 4px 20px rgba(0, 137, 123, 0.15)',
        'gold':     '0 4px 20px rgba(255, 179, 71, 0.20)',
      },
      animation: {
        'fade-in':        'fadeIn 0.6s ease-out forwards',
        'slide-up':       'slideUp 0.5s ease-out forwards',
        'slide-in-right': 'slideInRight 0.4s ease-out forwards',
        'float':          'float 6s ease-in-out infinite',
        'spin-slow':      'spin 20s linear infinite',
        'pulse-soft':     'pulseSoft 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn:       { from: { opacity: '0' }, to: { opacity: '1' } },
        slideUp:      { from: { opacity: '0', transform: 'translateY(24px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
        slideInRight: { from: { opacity: '0', transform: 'translateX(32px)' }, to: { opacity: '1', transform: 'translateX(0)' } },
        float:        { '0%, 100%': { transform: 'translateY(0px)' }, '50%': { transform: 'translateY(-12px)' } },
        pulseSoft:    { '0%, 100%': { opacity: '1' }, '50%': { opacity: '0.7' } },
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
    },
  },
  plugins: [],
}
