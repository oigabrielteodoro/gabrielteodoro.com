import { styled } from "~/stitches.config";

export const Annotation = styled("div", {
  p: {
    position: "relative",
    color: "$neutral500",
    fontSize: "$paragraph",
    padding: "$1 $3",
    transition: "300ms",

    "&::before": {
      content: "",
      position: "absolute",
      backgroundColor: "$blue500",
      left: 0,
      top: 0,
      bottom: 0,
      width: "0.4rem",
      borderRadius: "0.8rem",
    },

    "&:hover strong": {
      color: "$white",

      "&::before": {
        width: "100%",
      },
    },
  },

  strong: {
    position: "relative",
    color: "$neutral300 !important",
    fontWeight: "$medium",
    transition: "300ms",

    "&::before": {
      content: "",
      position: "absolute",
      backgroundColor: "$blue500",
      width: 0,
      top: 0,
      bottom: 0,
      transition: "300ms",
      zIndex: -1,
    },
  },
});
