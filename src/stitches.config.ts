import { createStitches } from "@stitches/react";

export const { styled, getCssText, keyframes } = createStitches({
  theme: {
    fonts: {
      title: "DM Sans",
      text: "Poppins",
    },
    colors: {
      black: "#000000",
      white: "#ffffff",

      // Neutral

      neutral300: "#9aa6b1",
      neutral500: "#768696",
      neutral700: "#2F3138",
      neutral800: "#20242c",
      neutral900: "#181b21",

      // Blue

      blue500: "#5d6Aff",
    },
    space: {
      1: "8px",
      2: "12px",
      3: "16px",
      4: "24px",
      5: "32px",
      6: "40px",
      7: "48px",
    },
    fontSizes: {
      disclaimer: "12px",
      small: "14px",
      paragraph: "16px",
      large: "18px",
      subtitle: "20px",
      title: "24px",
    },
    fontWeights: {
      regular: "400",
      medium: "500",
      bold: "700",
    },
    borderStyles: {
      rounded: "50%",
      button: "1rem",
      card: "0.5rem",
    },
    sizes: {
      grid: "110rem",
    },
  },
});
