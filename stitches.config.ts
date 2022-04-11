import { createStitches } from "@stitches/react";

export const { styled, getCssText } = createStitches({
  theme: {
    fonts: {
      title: "DM Sans",
      text: "Poppins",
    },
    colors: {
      black: "#000000",
      white: "#ffffff",
    },
    fontSizes: {
      1: "12px",
      2: "14px",
      3: "16px",
      4: "18px",
      5: "20px",
      6: "24px",
    },
  },
});
