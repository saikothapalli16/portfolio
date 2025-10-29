/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        "unc-carolina": "#7BAFD4",
        "unc-navy": "#13294B",
        "unc-slate": "#E6EEF6",
        "unc-offwhite": "#F7FAFC",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "Arial"],
        serif: ["var(--font-serif)", "Georgia"],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
