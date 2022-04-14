import { styled } from "~/../stitches.config";

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
  borderRadius: "0.5rem",
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

  variants: {
    active: {
      true: {
        zIndex: 1,
        boxShadow: "0.2rem 2.7rem 2rem -0.4rem rgba(0, 0, 0, 0.1)",
      },
    },
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
  },
  strong: {
    fontSize: "$large",
    color: "$white",
    fontWeight: "$medium",
  },
});

export const InformationBox = styled("div", {
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
  borderRadius: "0.5rem",
});
