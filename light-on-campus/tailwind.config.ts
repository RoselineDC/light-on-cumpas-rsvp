import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sora: ["var(--font-sora)", "sans-serif"],
        dm: ["var(--font-dm-sans)", "sans-serif"],
      },
      colors: {
        teal: {
          DEFAULT: "#0f9e8e",
          dark: "#0b7a6d",
          light: "#e0f7f5",
        },
        gold: {
          DEFAULT: "#f5a623",
          light: "#fff8ed",
        },
        navy: "#0d2b45",
      },
      keyframes: {
        pulse2: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.5", transform: "scale(1.4)" },
        },
        scrollLine: {
          "0%, 100%": { opacity: "0.4", transform: "scaleY(1)" },
          "50%": { opacity: "1", transform: "scaleY(1.1)" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(28px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        rayShimmer: {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        pulse2: "pulse2 2s infinite",
        scrollLine: "scrollLine 2s ease-in-out infinite",
        fadeUp: "fadeUp 0.7s ease both",
        rayShimmer: "rayShimmer 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
