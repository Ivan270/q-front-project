/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    './node_modules/primevue/**/*.{vue,js,ts,jsx,tsx}', //primevue
    'formkit.theme.ts'
  ],
  theme: {
    extend: {
      
    },
  },
  plugins: [],
}
