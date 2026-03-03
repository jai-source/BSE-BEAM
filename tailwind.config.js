/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Sun Oranges (Major)
        'hill-green': '#F97316',          // bright orange
        'hill-green-dark': '#C2410C',     // dark orange
        'hill-green-mid': '#EA580C',      // deep orange
        'hill-green-deep': '#FFF3D6',     // pale orange bg
        'hill-green-light': '#FB923C',    // light orange
        // Sun Yellows
        'sky-blue': '#EAB308',            // bright yellow
        'sky-blue-mid': '#F59E0B',        // amber
        'sky-blue-light': '#FCD34D',      // light yellow
        'sky-blue-lightest': '#FDE68A',   // pale yellow
        // Warm Whites / Creams
        'cloud-white': '#FFFFFF',
        'cloud-white-soft': '#FFFBF2',    // warm cream
        'cloud-white-muted': '#FFF3D6',   // soft orange tint
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
