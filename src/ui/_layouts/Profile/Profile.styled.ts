import { motion } from "framer-motion";

import { styled } from "~/stitches.config";

export const Container = styled("section", {
  maxWidth: "$grid",
  margin: "10rem auto 0",
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gridGap: "10rem",
});

export const Title = styled("h1", {
  fontSize: "40px",
  color: "$white",
  fontWeight: "$regular",
  marginBottom: "$4",
});

export const Card = styled("div", {
  background: "$neutral800",
  padding: "$6",
  marginBottom: "$3",
  borderRadius: "0.8rem",
  display: "flex",
  flexDirection: "column",
  transition: "transform 300ms, border-color 300ms",
  position: "relative",
  border: "0.1rem solid transparent",
  cursor: "pointer",

  "&:hover": {
    transform: "translateX(1.6rem)",
    borderColor: "$blue500",
  },
  "&:active": {
    transform: "scale(0.98)",
  },

  small: {
    color: "$neutral300",
    fontSize: "$small",
    marginTop: "0.4rem",
  },
  button: {
    marginRight: "auto",
    marginTop: "$3",
    fontSize: "$small",
  },
});

export const CardTitle = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  variants: {
    active: {
      true: {
        svg: {
          color: "$blue500",
        },
      },
    },
  },

  svg: {
    color: "$neutral300",
    transition: "color 300ms",
  },
  strong: {
    fontSize: "$large",
    color: "$white",
    fontWeight: "$medium",
  },
});

export const InformationBox = styled(motion.div, {
  display: "flex",
  flexDirection: "column",

  strong: {
    fontSize: "$large",
    color: "$white",
    fontWeight: "$medium",
    marginTop: "$5",
  },
  ul: {
    marginTop: "$3",
    display: "flex",
    alignItems: "center",

    "li + li": {
      marginLeft: "$3",
    },
  },
});

export const TechUsedIcon = styled("img", {
  height: "4.2rem",
  width: "4.2rem",
  borderRadius: "0.8rem",
  transition: "transform 300ms",
});

export const TechUsedText = styled("p", {
  width: "20rem",
});
