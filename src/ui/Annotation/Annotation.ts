import { styled } from "~/../stitches.config";

export const Annotation = styled("p", {
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
    borderRadius: "0.5rem",
  },

  "&:hover b": {
    color: "$white",

    "&::before": {
      width: "100%",
    },
  },

  b: {
    position: "relative",
    color: "$neutral300",
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
