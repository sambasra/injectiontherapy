import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Primary teal #087E8B — 20% of UI
        brand: {
          50:  '#e6f5f6',
          100: '#b3e3e7',
          200: '#80d0d7',
          300: '#4dbec7',
          400: '#26b0bc',
          500: '#087E8B',
          600: '#076e79',
          700: '#065d66',
          800: '#044d53',
          900: '#033c40',
        },
        // Teal alias (same palette)
        teal: {
          50:  '#e6f5f6',
          100: '#b3e3e7',
          200: '#80d0d7',
          300: '#4dbec7',
          400: '#26b0bc',
          500: '#087E8B',
          600: '#076e79',
          700: '#065d66',
          800: '#044d53',
          900: '#033c40',
        },
        // Secondary indigo #334EAC
        secondary: {
          50:  '#eaecf6',
          100: '#c4cae8',
          200: '#9da8d9',
          300: '#7686ca',
          400: '#566dbe',
          500: '#334EAC',
          600: '#2c4497',
          700: '#243a82',
          800: '#1c2f6d',
          900: '#142558',
        },
        // Accent coral #E45A44 — <10% of UI
        accent: {
          50:  '#fdf0ee',
          100: '#f8d1cc',
          200: '#f4b2aa',
          300: '#ef9388',
          400: '#eb7b6a',
          500: '#E45A44',
          600: '#c74d39',
          700: '#aa4030',
          800: '#8d3328',
          900: '#702620',
        },
        // Site palette
        site: {
          bg:     '#F7FAFC',
          border: '#E7EEF2',
          text:   '#172026',
        },
      },
      maxWidth: {
        content: '1200px',
        prose: '780px',
      },
      spacing: {
        section: '64px',
        hero: '80px',
      },
      borderRadius: {
        card: '8px',
      },
    },
  },
  plugins: [],
}

export default config
