import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mist: {
          50: "#fbfcfa",
          100: "#f4f7f3",
          200: "#e7ede4",
        },
        ink: {
          DEFAULT: "#1d2b2e",
          soft: "#4a5a5e",
          faint: "#6d7c80",
        },
        tide: {
          50: "#eef6f4",
          100: "#d8ece8",
          200: "#b3d9d3",
          300: "#8dc6bd",
          400: "#5bb4a7",
          500: "#429b8f",
          600: "#348074",
        },
      },
      fontFamily: {
        display: ['"Fraunces"', "Georgia", "serif"],
        body: ['"Inter"', "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
