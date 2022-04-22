import { FiChevronDown } from "react-icons/fi";

import { styled } from "~/stitches.config";

export const Box = styled("header", {
  padding: "$5",
});

export const Content = styled("div", {
  maxWidth: "$grid",
  margin: "0 auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

export const NavigationBox = styled("nav", {
  display: "flex",
  alignItems: "center",
});

export const NavigationList = styled("ul", {
  display: "flex",
  alignItems: "center",
  marginRight: "$5",

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

export const CountryFlag = styled("img", {
  marginRight: "$3",
  width: "3.2rem",
  borderRadius: "0.4rem",
});

export const ChevronDownWithMargin = styled(FiChevronDown, {
  marginLeft: "$3",
  color: "$neutral300",
});
