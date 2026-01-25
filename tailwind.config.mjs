/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // モノリエブランドカラー
        'monolier': {
          'brown': '#7C5D3B',
          'dark': '#5D4E37',
          'light': '#FAF7F2',
          'cream': '#FFFDF8',
          'accent': '#F9A825',
        }
      },
      fontFamily: {
        'sans': ['"Noto Sans JP"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
