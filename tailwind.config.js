/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{liquid,json}'],
  theme: {
    extend: {
      colors: {
        orange: '#FF6633',
        green: '#006600',
        blue: '#00639C',
        yellow: '#FCE78D',
        pink: '#FFCCFF',
        navy: '#19264B',
      },
    },
  },
  plugins: [],
};
