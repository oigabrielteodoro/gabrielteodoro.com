import { motion } from "framer-motion";

import { styled } from "~/../stitches.config";

export const Container = styled("section", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  maxWidth: "$grid",
  margin: "15rem auto 0",
});

export const Box = styled(motion.div, {
  display: "flex",
  flexDirection: "column",
  position: "relative",

  p: {
    maxWidth: "53%",
    marginBottom: "$4",
  },
  button: {
    width: "14rem",
  },
});

export const HelloText = styled("h1", {
  color: "$white",
  fontSize: "$title",
});

export const UserBox = styled("div", {
  display: "flex",
  alignItems: "center",
  margin: "$3 0",

  section: {
    display: "flex",
    flexDirection: "column",
  },
  strong: {
    color: "$white",
    fontSize: "$paragraph",
  },
  small: {
    fontSize: "$small",
    color: "$neutral300",
  },
});

export const Avatar = styled("img", {
  height: "5.2rem",
  width: "5.2rem",
  borderRadius: "50%",
  marginRight: "$3",
});

export const InformationsList = styled(motion.ul, {
  display: "flex",
  flexDirection: "column",

  li: {
    display: "flex",
    alignItems: "center",

    ".iconBox": {
      width: "4.2rem",
      height: "4.2rem",
      backgroundColor: "$blue500",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginRight: "1.8rem",
      borderRadius: "0.8rem",
      color: "$white",
    },
    ".textBox": {
      display: "flex",
      flexDirection: "column",
      color: "$white",

      strong: {
        fontSize: "$title",
      },
      small: {
        color: "$neutral300",
        fontSize: "$disclaimer",
        whiteSpace: "nowrap",
        lineHeight: "150%",
      },
    },
    "& + li": {
      marginTop: "$5",
    },
  },
});
