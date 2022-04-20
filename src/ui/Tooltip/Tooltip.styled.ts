import { styled } from "~/stitches.config";

export const BaseElement = styled("div", {
  position: "relative",
  cursor: "pointer",
});

export const Container = styled("div", {
  position: "absolute",
  color: "$neutral300",
  background: "$neutral800",
  borderRadius: "0.8rem",
  border: "0.2rem solid $neutral700",

  defaultVariants: {
    placement: "top",
    size: "medium",
  },
  variants: {
    placement: {
      top: {
        bottom: "calc(100% + $3)",
        left: "50%",
        transform: "translateX(-50%)",

        "&::after": {
          content: "",
          position: "absolute",
          borderStyle: "solid",
          borderWidth: "0.6rem 0.6rem 0 0.6rem",
          borderColor: "$neutral700 transparent transparent transparent",
          bottom: "-0.8rem",
          left: "50%",
          transform: "translateX(-50%)",
        },
      },
    },
    size: {
      small: {
        padding: "$1 $2",
        fontSize: "$disclaimer",
      },
      medium: {
        padding: "$3",
        fontSize: "$small",
      },
    },
  },
});
