import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        olive: {
          50: "#f4f6f4",
          100: "#e4ebe4",
          200: "#c9d7c9",
          300: "#a4baa4",
          400: "#789878",
          500: "#587958",
          600: "#446044",
          700: "#374e37",
          800: "#2D3B2D", // Primary brand deep olive green
          900: "#232f23",
          950: "#141c14",
        },
        sage: {
          50: "#f6f8f6",
          100: "#e8ede0",
          200: "#dad7cd",
          300: "#a3b18a",
          400: "#829469",
          500: "#64754d",
        },
        ivory: {
          50: "#FAF9F5",
          100: "#F4F1EA",
          200: "#E8E3D5",
          300: "#DCD5C3",
        },
        charcoal: {
          800: "#2B2D2F",
          900: "#1C251C", // Main dark text
        },
        gold: {
          400: "#d4af37",
          500: "#c5a059",
          600: "#b38e47",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
      boxShadow: {
        subtle: "0 2px 10px rgba(45, 59, 45, 0.05)",
        card: "0 4px 20px rgba(45, 59, 45, 0.08)",
        elevated: "0 10px 30px rgba(45, 59, 45, 0.12)",
      },
    },
  },
  plugins: [],
};
export default config;
