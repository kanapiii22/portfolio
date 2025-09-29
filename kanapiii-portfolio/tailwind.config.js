/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      colors: {
        // カスタムカラー名を定義します
        'custom-bg-lch': 'oklch(39.1% 0.09 240.876)', 
      },
    },
  },
  plugins: [],
}
