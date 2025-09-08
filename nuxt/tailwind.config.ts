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
      colors: {
        primary: '#FFCC01',
      },
    },
    container: {
      center: true,
      padding: '1rem',
    },
  },
} satisfies Config;
