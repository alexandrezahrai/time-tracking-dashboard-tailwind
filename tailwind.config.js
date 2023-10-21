/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        lg: "992px",
        xl: "1440px",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "32px",
          md: "44px",
        },
      },
      colors: {
        primary: {
          blue: "hsl(246, 80%, 60%)",
          "light-red-work": "hsl(15, 100%, 70%)",
          "soft-blue-play": "hsl(195, 74%, 62%)",
          "light-red-study": "hsl(348, 100%, 68%)",
          "lime-green-exercise": "hsl(145, 58%, 55%)",
          violet: "hsl(264, 64%, 52%)",
          "soft-orange-self-care": "hsl(43, 84%, 65%)",
        },
        neutral: {
          "very-dark-blue": "hsl(226, 43%, 10%)",
          "dark-blue": "hsl(235, 46%, 20%)",
          "desaturated-blue": "hsl(235, 45%, 61%)",
          "pale-blue": "hsl(236, 100%, 87%)",
        },
      },
      boxShadow: {
        custom:
          "0 100px 140px -50px rgba(0,0,0,0.25), 0 0 20px 0 rgba(0,0,0,0.03)",
      },
    },
  },
  plugins: [],
};
