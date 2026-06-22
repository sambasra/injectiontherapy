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
        lime:  '#eefab3',
        cream: '#f6f6f1',
        grn:   '#bde6af',
        blu:   '#599bd1',
      },
      maxWidth: {
        content: '1200px',
        prose: '780px',
      },
    },
  },
  plugins: [],
}

export default config
