/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // モノリエブランドカラー v2
        'monolier': {
          // ベースカラー
          'brown': '#7C5D3B',      // メインカラー・頼む
          'dark': '#2D2D2D',       // テキスト
          'light': '#F8F5F0',      // 背景
          'cream': '#FFFDF8',      // さらに薄い背景
          
          // サービスカラー（個人向け）
          'green': '#4A7C59',      // 学ぶ
          'teal': '#2A7B8C',       // 作る
          'coral': '#C75B39',      // 買う
          
          // サービスカラー（その他）
          'navy': '#2C3E50',       // 団体・事業者
          'gold': '#C9A86C',       // 参加する・アクセント
          'gray': '#5D5D5D',       // 実績・私たちについて
          
          // 互換性のため残す
          'accent': '#C9A86C',
        }
      },
      fontFamily: {
        'sans': ['"Noto Sans JP"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
