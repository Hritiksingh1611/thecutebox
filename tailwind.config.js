/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 🇮🇳 Multi-Festival Indian Palette
        saffron: {
          50:  '#fff8f0',
          100: '#ffefd6',
          200: '#ffd9a3',
          300: '#ffbc6b',
          400: '#ff9933',
          500: '#FF6B1A', // primary festive orange
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
        // Eid Emerald Green & Islamic Gold
        emeraldFestive: {
          50:  '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          500: '#10b981',
          700: '#047857',
          800: '#065f46',
          900: '#022c22',
        },
        // Christmas & Durga Puja Crimson Red
        crimson: {
          50:  '#fff1f2',
          100: '#ffe4e6',
          200: '#fecdd3',
          500: '#e11d48',
          600: '#be123c',
          700: '#9f1239',
          900: '#4c0519',
        },
        // Bengal & Royal Peacock Teal
        teal: {
          50:  '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          500: '#00897B',
          600: '#00796B',
          700: '#00695C',
          800: '#004D40',
        },
        rose: {
          gulabi: '#E91E8C',
          light:  '#FF80C8',
          pale:   '#FFD6EE',
        },
        ivory: {
          DEFAULT: '#FFFDF9',
          warm:    '#FFF6E9',
          rich:    '#F7EEDD',
          dark:    '#EADBC8',
        },
        indigo: {
          deep:  '#130E26',
          rich:  '#1F1640',
          mid:   '#2E2259',
        },
        earth: {
          DEFAULT: '#7C3F1E',
          light:   '#9C5832',
          pale:    '#D8A47F',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans:    ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-hero':       'linear-gradient(135deg, #FFFDF9 0%, #FFF3E0 35%, #FFE0B2 70%, #FFF6E9 100%)',
        'gradient-saffron':    'linear-gradient(135deg, #FF6B1A 0%, #ff9933 100%)',
        'gradient-festive':    'linear-gradient(135deg, #FF6B1A 0%, #E91E8C 50%, #00897B 100%)',
        'gradient-eid':        'linear-gradient(135deg, #022c22 0%, #065f46 50%, #047857 100%)',
        'gradient-christmas':  'linear-gradient(135deg, #9f1239 0%, #be123c 50%, #065f46 100%)',
        'gradient-kolkata':    'linear-gradient(135deg, #be123c 0%, #FF6B1A 50%, #f59e0b 100%)',
        'festive-pattern':     "radial-gradient(#FF6B1A 0.75px, transparent 0.75px), radial-gradient(#00897B 0.75px, #FFFDF9 0.75px)",
      },
      boxShadow: {
        'warm':     '0 4px 25px rgba(255, 107, 26, 0.12)',
        'warm-sm':  '0 2px 10px rgba(255, 107, 26, 0.08)',
        'warm-lg':  '0 12px 45px rgba(255, 107, 26, 0.18)',
        'warm-xl':  '0 24px 70px rgba(255, 107, 26, 0.22)',
        'gold':     '0 8px 30px rgba(245, 158, 11, 0.25)',
        'emerald':  '0 8px 30px rgba(16, 185, 129, 0.25)',
      },
      animation: {
        'fade-in':        'fadeIn 0.6s ease-out forwards',
        'slide-up':       'slideUp 0.5s ease-out forwards',
        'slide-in-right': 'slideInRight 0.4s ease-out forwards',
        'float':          'float 5s ease-in-out infinite',
        'float-reverse':  'floatReverse 6s ease-in-out infinite',
        'pulse-soft':     'pulseSoft 3s ease-in-out infinite',
        'sparkle':        'sparkle 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn:       { from: { opacity: '0' }, to: { opacity: '1' } },
        slideUp:      { from: { opacity: '0', transform: 'translateY(24px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
        slideInRight: { from: { opacity: '0', transform: 'translateX(32px)' }, to: { opacity: '1', transform: 'translateX(0)' } },
        float:        { '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' }, '50%': { transform: 'translateY(-10px) rotate(1deg)' } },
        floatReverse: { '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' }, '50%': { transform: 'translateY(12px) rotate(-1deg)' } },
        pulseSoft:    { '0%, 100%': { opacity: '1', transform: 'scale(1)' }, '50%': { opacity: '0.85', transform: 'scale(0.98)' } },
        sparkle:      { '0%, 100%': { transform: 'scale(1)', opacity: '1' }, '50%': { transform: 'scale(1.2) rotate(15deg)', opacity: '0.8' } },
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
    },
  },
  plugins: [],
}
