/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'theme-primary': 'var(--color-primary)',
        'theme-primary-light': 'var(--color-primary-light)',
        'theme-primary-dark': 'var(--color-primary-dark)',
        'theme-accent': 'var(--color-accent)',
        'theme-accent-hover': 'var(--color-accent-hover)',
        'theme-bg-main': 'var(--color-bg-main)',
        'theme-bg-secondary': 'var(--color-bg-secondary)',
        'theme-text-primary': 'var(--color-text-primary)',
        'theme-text-secondary': 'var(--color-text-secondary)',
        'theme-text-muted': 'var(--color-text-muted)',
        'theme-button-bg': 'var(--color-button-bg)',
        'theme-button-text': 'var(--color-button-text)',
        'theme-page-bg': 'var(--color-page-bg)',
        'theme-highlight': 'var(--color-highlight)',
        'theme-highlight-dim': 'var(--color-highlight-dim)',
      },
    },
  },
  plugins: [],
}
