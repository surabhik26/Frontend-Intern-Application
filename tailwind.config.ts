import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Quiz App Colors from Figma
        'quiz-blue': '#B3E5FC',
        'quiz-purple': '#E1BEE7',
        'quiz-teal': '#1A5F7A',
        'quiz-cyan': '#E0F7FA',
        'card-white': '#FFFFFF',
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'quiz-title': '42px',
        'quiz-subtitle': '14px',
        'quiz-question': '16px',
      },
      borderRadius: {
        'card': '24px',
        'option': '12px',
      },
      spacing: {
        'card': '48px',
      },
    },
  },
  plugins: [],
}

export default config