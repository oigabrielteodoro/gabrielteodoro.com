import { styled } from "~/stitches.config";

export const Box = styled("header", {
  padding: "$5",
  // backgroundColor: "$neutral800",
});

export const Content = styled("div", {
  maxWidth: "$grid",
  margin: "0 auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

export const Logo = styled("span", {
  color: "$white",
  fontSize: "$large",
});

export const Navigation = styled("ul", {
  display: "flex",
  alignItems: "center",

  li: {
    button: {
      border: 0,
      color: "$white",
      fontSize: "$paragraph",
      backgroundColor: "transparent",
      transition: "300ms",

      "&:hover": {
        color: "$blue500",
      },
    },

    "& + li": {
      marginLeft: "$5",
    },
  },
});
