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
        background: "#FAFCFD",
        secondary: "#F3FBFC",
        ice: "#EAF8FB",
        aqua: "#D8F4F5",
        teal: "#2D9C95",
        slate: "#22343C",
        oak: "#B8895B",
        grey: "#F6F8F9",
        border: "rgba(45,156,149,0.12)",
        foreground: "#22343C",
        muted: "#64748B",
        card: "rgba(255,255,255,0.85)",
      },
      fontFamily: {
        sans: ["'Inter'", "sans-serif"],
        serif: ["'Playfair Display'", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
