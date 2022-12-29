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
      blackWithOpacity: "rgba(0, 0, 0, 0.6)",
    },
    fontSize: {
      sm: "0.75rem", // 12px
      md: "0.875rem", // 14px
      base: "1rem", // 16px
      lg: "1.25rem", // 20px
      xl: "1.5rem", // 24px
      "2xl": "2rem", // 32px
    },
    extend: {
      borderRadius: {
        sm: "0.25rem", // 4px
        md: "0.5rem", // 8px
      },
      padding: {
        "3xs": "0.375rem", // 6px
        "2xs": "0.5rem", // 8px
        xs: "0.75rem", // 12px
        sm: "1rem", // 16px
        md: "1.25rem", // 20px
        lg: "1.5rem", // 24px
        xl: "2rem", // 32px
        "2xl": "3rem", // 48px
      },
      margin: {
        "4xs": "0.25rem", // 4px
        "3xs": "0.375rem", // 6px
        "2xs": "0.5rem", // 8px
        xs: "0.75rem", // 12px
        sm: "1rem", // 16px
        md: "1.25rem", // 20px
        lg: "1.5rem", // 24px
        xl: "2rem", // 32px
        "2xl": "5rem",
      },
      maxWidth: {
        skeletonLg: "120px",
        skeletonSm: "54px",
      },
    },
  },
  plugins: [],
};
