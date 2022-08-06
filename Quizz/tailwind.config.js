/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      keyframes: {
        correct: {
          '0%': {'margin-left': '0px', 'margin-right': '0px'},
          '25%': {'margin-left': '15px', 'margin-right': '0px'},
          '50%': {'margin-left': '0px', 'margin-right': '0px'},
          '75%': {'margin-left': '0px', 'margin-right': '25px'},
          '100%': {'margin-left': '0px', 'margin-right': '0px'},
        },
        incorrect: {
          '0%': {'margin-left': '0px', 'margin-right': '0px'},
          '25%': {'margin-left': '20px', 'margin-right': '0px'},
          '50%': {'margin-left': '0px', 'margin-right': '20px'},
          '75%': {'margin-left': '10px', 'margin-right': '0px'},
          '100%': {'margin-left': '0px', 'margin-right': '0px'},
        }
      },
      animation: {
        correct: 'correct 0.5s cubic-bezier(0.4, 0, 0.6, 1) 1',
        incorrect: 'incorrect 0.5s cubic-bezier(0.4, 0, 0.6, 1) 1',
      },
    },
  },
  plugins: [],
}
