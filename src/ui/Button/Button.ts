import { styled } from "~/../stitches.config";

export const Button = styled("button", {
  borderRadius: "0.5rem",
  padding: "$3",
  border: 0,
  color: "$white",
  fontWeight: "$medium",
  fontSize: "$paragraph",
  transition: "300ms",

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
    },
  },
});
