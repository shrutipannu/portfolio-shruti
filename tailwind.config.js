/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: ['Montserrat', 'sans-serif'],
      secondary: ['Poppins', 'sans-serif'],
      tertiary: 'Aldrich',
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors: {
        primary: '#0a0a0a',
        secondary: '#101428',
        dark: {
          100: '#0f1626',
          200: '#0c1220',
          300: '#09101C'
        },
        accent: {
          DEFAULT: '#7C3AED',
          hover: '#9461FB',
          light: '#B890FF',
          dark: '#6429DC'
        },
        neon: {
          purple: '#9D4EDD',
          blue: '#3B82F6'
        },
        text: {
          primary: '#F8F9FA',
          secondary: '#E2E8F0',
          muted: '#94A3B8'
        }
      },
      backgroundImage: {
        site: "url('../src/assets/site-bg.jpg')",
        about: "url('../src/assets/about.png')",
        services: "url('../src/assets/services.png')",
        'gradient-primary': 'linear-gradient(to right, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'neon-purple': '0 0 10px rgba(157, 78, 221, 0.5)',
        'neon-blue': '0 0 10px rgba(59, 130, 246, 0.5)',
      },
    },
  },
  plugins: [],
}

