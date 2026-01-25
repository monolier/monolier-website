# 想造工房モノリエ 公式サイト

## セットアップ

```bash
# 依存関係インストール
npm install

# 開発サーバー起動
npm run dev

# ビルド（本番用）
npm run build
```

## ファイル構成

```
monolier-website/
├── public/
│   ├── images/
│   │   └── logo.png  ← ロゴ画像を配置
│   └── favicon.svg
├── src/
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro  ← トップページ
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── package.json
├── tailwind.config.mjs
└── tsconfig.json
```

## ロゴ画像の配置

`public/images/logo.png` にロゴ画像を配置してください。
（事業計画フォルダの `基盤/ロゴ/monolier-logo-横-color.png` を使用）

## デプロイ

GitHub + Cloudflare Pages で自動デプロイ

1. GitHubにpush
2. Cloudflare Pagesが自動でビルド
3. monolier.jp に公開
