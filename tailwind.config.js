/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
		screens: {
      sm: '600px',
      md: '768px',
      lg: '1024px',
      xl: '1410px',
    },
		container: {
			center: true,
			padding: '1rem'
		},
    extend: {
		},
  },
  plugins: [],
}