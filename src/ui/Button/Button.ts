import { styled } from "~/../stitches.config";

export const Button = styled("button", {
  borderRadius: "0.8rem",
  padding: "$3",
  border: 0,
  color: "$white",
  fontWeight: "$medium",
  fontSize: "$paragraph",
  transition: "opacity 300ms",

  "&:hover": {
    opacity: 0.8,
  },

  defaultVariants: {
    type: "blue",
  },
  variants: {
    type: {
      blue: {
        backgroundColor: "$blue500",
      },
      link: {
        padding: 0,
        background: "transparent",
        textDecoration: "underline",
      },
    },
  },
});
