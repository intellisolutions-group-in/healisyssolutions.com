import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '600px',
      md: '900px',
      lg: '1200px',
      xl: '1536px',
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-plus-jakarta-sans)', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          light: '#D6F2FF',
          DEFAULT: '#3397FF',
          dark: '#2575DB',
          contrast: '#fbfbfb',
        },
        secondary: {
          light: '#FEF3CC',
          DEFAULT: '#fda105',
          dark: '#D98203',
          contrast: '#fbfbfb',
        },
        surface: {
          DEFAULT: '#ffffff',
          dark: '#26262a',
        },
        background: {
          DEFAULT: '#f5f5f9',
          dark: '#38383d',
        },
        muted: {
          DEFAULT: '#757575',
          dark: '#e0e0e0',
        },
        heading: {
          DEFAULT: '#424242',
          dark: '#f5f5f5',
        },
        brand: {
          blue: '#087ae7',
          'blue-dark': '#151733',
        },
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        card: '0px 2px 8px rgba(0,0,0,0.08)',
        'card-hover': '0px 8px 24px rgba(0,0,0,0.12)',
        nav: '0px 4px 20px rgba(0,0,0,0.1)',
      },
    },
  },
  plugins: [],
}

export default config
