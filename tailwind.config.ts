import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cairo: ["Cairo", "sans-serif"],
      },
      borderRadius: {
        rounded: "5px",
      },
      colors: {
        primary: "#0d309e",
        "primary-color": "#0d309e",
        "secondary-color": "#60148c",
        "accent-color": "#18cad3",
        "bright-one": "#f2f2f2",
        "bright-two": "#ccc",
        "dark-one": "#040e30",
        "dark-two": "#1d062a",
      },
    },
  },
  plugins: [],
} satisfies Config;
