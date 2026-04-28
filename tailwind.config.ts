import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: {
          DEFAULT: "#f97316",
          light: "#fb923c",
        },
        teal: {
          DEFAULT: "#095c56",
          light: "#0d7a72",
        },
      },
      fontFamily: {
        tajawal: ["Tajawal", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
