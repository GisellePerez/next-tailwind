/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      primary: {
        50: "#F4F5F5",
        500: "#203B3C",
      },
      secondary: {
        50: "#FBFCFB",
        100: "#EDF2EA",
        800: "#4D5649",
      },
      neutral: {
        50: "#F3F4F5",
        100: "#DCDDE1",
        300: "#ADAFB9",
        400: "#9698A5",
        600: "#686A7E",
        800: "#393C56",
        900: "#222542",
      },
      white: "#FFFFFF",
      black: "#000000",
    },
    fontFamily: {}, // TBD inter
    fontSize: {
      sm: "0.75rem", // 12
      md: "0.875rem", // 14
      base: "1rem", // 16
      lg: "1.25rem", // 20
      xl: "2rem", // 32
    },
    extend: {
      borderRadius: {
        md: "0.5rem",
      },
      padding: {
        "2xs": "0.5rem", // 8
        xs: "0.75rem", // 12
        sm: "1rem", // 16
        md: "1.25rem", // 20
        lg: "1.5rem", // 24
        xl: "2rem", // 32
      },
    },
  },
  plugins: [],
};
