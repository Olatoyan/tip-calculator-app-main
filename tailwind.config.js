/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "cyan-bg": "#C5E4E7",
        "dark-cyan": "#5E7A7D",
        "green-cyan": "#26C2AE",
        "very-dark-cyan": "#00474B",
        "very-pale-cyan": "#547878",
        "input-bg": "#F3F9FA",
      },
      fontFamily: {
        sans: ["Space Mono", "monospace"],
      },
      boxShadow: {
        "bg-sh": "0px 32px 43px 0px rgba(79, 166, 175, 0.20)",
      },
    },
  },
  plugins: [],
};
