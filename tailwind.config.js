/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0F0F14',
        surface:    '#1A1A24',
        border:     '#2E2E3E',
        foreground: '#F2F2F7',   // shadcn/ui convention alias
        text:       '#F2F2F7',   // kept for backwards compat
        muted:      '#8B8B9E',
        amber:      '#F59E0B',
        coral:      '#FF6B6B',
        mint:       '#34D399',
      },
      fontFamily: {
        heading: ['Outfit', 'sans-serif'],
        body:    ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
