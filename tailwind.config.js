/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3139FB",
        secondary: "#FFFADD",
        accent: "#FF3333",
      },
      animation: {
        "loop-scroll": "loop-scroll 30s linear infinite",
      },
      keyframes: {
        "loop-scroll": {
          to: {
            transform: "translateX(-102.7%)",
          },
        },
      },
    },
    fontFamily: {
      sans: ["General Sans", "sans-serif"],
      neue: ["Neue Regrade", "sans-serif"],
    },
    screens: {
      sm: { max: "480px" },
      md: { max: "768px" },
      lg: { max: "1024px" },
    },
  },
  plugins: [],
};
