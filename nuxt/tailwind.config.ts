import type {Config} from 'tailwindcss';

export default {
  darkMode: 'class',
  content: [
    'app.{js,ts,vue}',
    'components/**/*.{vue,js}',
    'composables/**/*.{js,ts}',
    'formkit.theme.ts',
    'layouts/**/*.vue',
    'pages/**/*.vue',
    'plugins/**/*.{js,ts}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins, sans-serif'],
        'kenteken': ['Kenteken, sans-serif'],
      },
      colors: {
        blue: {
          700: '#0046B1',
          800: '#003B94',
        },
        lime: {
          300: '#B3FD4B',
        },
        neutral: {
          200: '#F9F6EE',
        },
      },
    },
    container: {
      center: true,
      padding: '1rem',
    },
  },
} satisfies Config;
