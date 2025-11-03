import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#002b5c",
        red: "#b51c2c",
        primary: {
          50: "#f0f4ff",
          100: "#e0e9ff", 
          500: "#002b5c",
          600: "#001d42",
          700: "#001530",
        },
        accent: {
          50: "#fdf2f3",
          100: "#fce7e8",
          500: "#b51c2c",
          600: "#9a1725",
          700: "#7f121e",
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;