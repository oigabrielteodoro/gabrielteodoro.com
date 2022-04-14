import { styled, keyframes } from "~/../stitches.config";

const boxAnimationFadeIn = keyframes({
  "0%": {
    opacity: 0,
    transform: "translateX(-10%)",
  },
  "100%": {
    opacity: 1,
    transform: "translateX(0)",
  },
});

const informationsListAnimationFadeIn = keyframes({
  "0%": {
    opacity: 0,
    transform: "translateX(50%)",
  },
  "100%": {
    opacity: 1,
    transform: "translateX(0)",
  },
});

export const Container = styled("section", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  maxWidth: "$grid",
  margin: "15rem auto 0",
});

export const Box = styled("div", {
  display: "flex",
  flexDirection: "column",
  animation: `${boxAnimationFadeIn} 1s`,

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

export const Description = styled("p", {
  position: "relative",
  color: "$neutral500",
  fontSize: "$paragraph",
  maxWidth: "53%",
  padding: "$1 $3",
  transition: "300ms",
  marginBottom: "$4",

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

export const InformationsList = styled("ul", {
  display: "flex",
  flexDirection: "column",
  animation: `${informationsListAnimationFadeIn} 1s`,

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
      borderRadius: "0.5rem",
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
