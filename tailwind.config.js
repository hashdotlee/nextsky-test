/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js,liquid}'],
  theme: {
    extend: {
      spacing: {
        "page-width": "var(--page-width)",
      },
    },
  },
  plugins: [],
};
