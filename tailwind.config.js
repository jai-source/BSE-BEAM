/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // XP Blues (Major)
        'hill-green': '#1660C1',          // XP classic blue
        'hill-green-dark': '#0A246A',     // XP dark title blue
        'hill-green-mid': '#0F3A9B',      // XP deep blue
        'hill-green-deep': '#E8F2FC',     // XP pale blue bg
        'hill-green-light': '#5B9BD5',    // XP light blue
        // XP Sky Blues
        'sky-blue': '#5BA9E1',            // XP sky blue
        'sky-blue-mid': '#3A7BD5',        // XP medium blue
        'sky-blue-light': '#A6CAF0',      // XP title bar pale blue
        'sky-blue-lightest': '#C7DFF7',   // XP very light blue
        // Whites / Light Blues
        'cloud-white': '#FFFFFF',
        'cloud-white-soft': '#F0F7FF',    // near-white blue
        'cloud-white-muted': '#E8F2FC',   // soft blue tint
        // Theme variables
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
