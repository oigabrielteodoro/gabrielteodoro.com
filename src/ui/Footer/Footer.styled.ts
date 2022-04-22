import { styled } from "~/stitches.config";

export const Container = styled("footer", {
  maxWidth: "$grid",
  margin: "0 auto",
  padding: "8rem 0",
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "space-between",
});

export const Box = styled("div", {
  display: "flex",
  flexDirection: "column",
});

export const Copyright = styled("small", {
  color: "$neutral300",
  fontSize: "$small",
  marginTop: "$1",
});

export const SocialBox = styled("ul", {
  display: "flex",
  alignItems: "center",

  "li + li": {
    marginLeft: "$3",
  },
});

export const Social = styled("div", {
  height: "4.2rem",
  width: "4.2rem",
  display: "grid",
  placeItems: "center",
  borderRadius: "0.8rem",
  color: "$white",
  backgroundColor: "$neutral700",
});
