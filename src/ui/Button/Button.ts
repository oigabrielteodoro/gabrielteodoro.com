import { styled } from "~/stitches.config";

export const Button = styled("button", {
  borderRadius: "0.8rem",
  padding: "$3",
  border: 0,
  color: "$white",
  fontWeight: "$medium",
  fontSize: "$paragraph",
  transition: "opacity 300ms",
  display: "flex",
  alignItems: "center",

  "&:hover": {
    opacity: 0.8,
  },

  defaultVariants: {
    type: "blue",
  },
  variants: {
    color: {
      neutral: {
        color: "$neutral300",
      },
    },
    type: {
      blue: {
        backgroundColor: "$blue500",
      },
      neutral: {
        backgroundColor: "$neutral700",
      },
      text: {
        padding: 0,
        background: "transparent",
      },
    },
  },
});
