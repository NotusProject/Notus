/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './node_modules/@tauri-controls/svelte/**/*.{js,svelte,ts}',
      './src/**/*.{html,js,svelte,ts}',
    "./node_modules/@tauri-controls/svelte/dist/**/*.{js,svelte,ts}"
  ],
  darkMode: 'selector',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Geist Sans', 'sans-serif']
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

