/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        screens: {
            xl: '1280px',
            '2xl': '1400px'
        }
    },
    screens: {
        xs: '480px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px'
    },
    colors: {
      'primary': '#2C2643',
      'secondary': '#43E7DF',
      'third':'#645E76',
      'forth':'#3639A4',
    },
    fontFamily: {
      'heading': ['Chivo', 'sans-serif'],
      'paragraph':['DM Sans', 'sans-serif'],
    },
    backgroundImage: {
      'banner': "url('/src/assets/bg-banner.png')",
      'apps': "url('/src/assets/apps-bg.png')",
      'line': "url('/src/assets/line.png')",
    }
    },
  },
  plugins: [],
}