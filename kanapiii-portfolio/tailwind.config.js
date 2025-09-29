/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      colors: {
        // カスタムカラー名を定義します
        'custom-bg-lch': 'oklch(98.5% 0 0)', 
      },
    },
  },
  plugins: [],
}
