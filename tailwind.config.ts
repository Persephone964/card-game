import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#0a0b10",
          900: "#0f1117",
          800: "#161821",
          700: "#1e212c",
          600: "#2a2d3a",
          500: "#3a3e4d",
        },
        gold: {
          50: "#fbf6e9",
          100: "#f5e9c8",
          200: "#ecd49a",
          300: "#e0bb6a",
          400: "#d4a23f",
          500: "#c08a28",
          600: "#a06d1e",
          700: "#7c521a",
          800: "#5a3c18",
          900: "#3d2912",
        },
        parchment: "#f4ecd8",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ['"Inter"', "system-ui", "sans-serif"],
        display: ['"Cinzel"', "Georgia", "serif"],
      },
      boxShadow: {
        card: "0 20px 60px -15px rgba(0,0,0,0.7)",
        "card-hover": "0 30px 80px -15px rgba(0,0,0,0.85)",
        gold: "0 0 30px rgba(212,162,63,0.25)",
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #e0bb6a 0%, #c08a28 50%, #7c521a 100%)",
        "ink-gradient": "radial-gradient(ellipse at top, #1e212c 0%, #0a0b10 70%)",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        shimmer: "shimmer 3s linear infinite",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
