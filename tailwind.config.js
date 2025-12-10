/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'pi-purple': '#7B3FF2',
        'pi-gold': '#FFC107',
        'innov-blue': '#0066CC',
      },
    },
  },
  plugins: [],
}
