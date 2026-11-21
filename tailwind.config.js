/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand palette - warm terracotta boutique
        terracotta: {
          50:  '#fdf4f0',
          100: '#fbe5da',
          200: '#f7cab4',
          300: '#f1a885',
          400: '#e97d52',
          500: '#B85C38', // primary brand
          600: '#a04a28',
          700: '#883a1e',
          800: '#6e2e17',
          900: '#5a2513',
        },
        rose: {
          warm: '#D4857A',
          light: '#E8B4A0',
          pale:  '#F5DDD5',
        },
        cream: {
          DEFAULT: '#F5EFE6',
          light:   '#FDFAF6',
          warm:    '#EDE5D8',
        },
        charcoal: {
          DEFAULT: '#2D2320',
          light:   '#4A3D3A',
          muted:   '#7A6E6C',
        },
        blush: '#E8B4A0',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-2xl': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'display-xl':  ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'display-lg':  ['3rem',    { lineHeight: '1.15', letterSpacing: '-0.015em', fontWeight: '600' }],
        'display-md':  ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '600' }],
        'display-sm':  ['1.875rem',{ lineHeight: '1.25', fontWeight: '600' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
        '38': '9.5rem',
      },
      animation: {
        'fade-in':       'fadeIn 0.6s ease-out forwards',
        'slide-up':      'slideUp 0.5s ease-out forwards',
        'slide-in-right':'slideInRight 0.4s ease-out forwards',
        'float':         'float 6s ease-in-out infinite',
        'shimmer':       'shimmer 2s linear infinite',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          from: { opacity: '0', transform: 'translateX(32px)' },
          to:   { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      backgroundImage: {
        'gradient-warm': 'linear-gradient(135deg, #F5EFE6 0%, #fbe5da 50%, #F5EFE6 100%)',
        'gradient-hero': 'linear-gradient(160deg, #FDFAF6 0%, #F5EFE6 40%, #fbe5da 100%)',
        'shimmer-gradient': 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)',
      },
      boxShadow: {
        'warm-sm':  '0 2px 8px rgba(45, 35, 32, 0.08)',
        'warm':     '0 4px 20px rgba(45, 35, 32, 0.10)',
        'warm-lg':  '0 8px 40px rgba(45, 35, 32, 0.12)',
        'warm-xl':  '0 20px 60px rgba(45, 35, 32, 0.15)',
        'product':  '0 4px 24px rgba(184, 92, 56, 0.12)',
        'product-hover': '0 12px 40px rgba(184, 92, 56, 0.20)',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
    },
  },
  plugins: [],
}
