/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      container: {
        center: true, // Center container horizontally
        padding: "1rem", // Default side padding
        screens: {
          sm: "1050px",
          md: "1320px",
          lg: "1420px",
          xl: "1800px", // Change this to whatever you want
          "2xl": "1900px", // Control 2K, 4K screens width
        },
      },
      fontFamily: {
        sans: ["FFCandara", "Calibri", "Arial", "sans-serif"], // Add Arial as your default sans font
      },
    },
  },
  plugins: [],
};
