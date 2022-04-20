import { styled } from "~/stitches.config";

export const BaseElement = styled("div", {
  position: "relative",
  cursor: "pointer",
});

export const Container = styled("div", {
  position: "absolute",
  color: "$neutral300",
  background: "$neutral900",
  padding: "$3",
  borderRadius: "0.8rem",
  border: "0.2rem solid $neutral800",
  fontSize: "$small",
  boxShadow: "0 0 10rem rgba(0, 0, 0, 0.1)",

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
          borderColor: "$neutral800 transparent transparent transparent",
          bottom: "-0.8rem",
          left: "50%",
          transform: "translateX(-50%)",
        },
      },
      bottom: {},
      left: {},
      right: {},
    },
  },
});
