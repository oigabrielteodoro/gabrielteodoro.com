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
  zIndex: 2,

  "&::after": {
    content: "",
    position: "absolute",
    height: "0.8rem",
    width: "0.8rem",
    border: "0.2rem solid $neutral700",
  },

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
          background: "$neutral800",
          borderTopColor: "transparent",
          borderRightColor: "transparent",
          bottom: "-0.6rem",
          left: "50%",
          transform: "translateX(-50%) rotate(-45deg)",
          zIndex: 1,
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
