import { styled } from "~/stitches.config";

export const Container = styled("section", {
  background: "#15181e",
  padding: "$7 0",
  marginTop: "10rem",
});

export const Content = styled("div", {
  maxWidth: "$grid",
  margin: "0 auto",
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gridGap: "10rem",
});

export const Title = styled("h1", {
  fontSize: "$title",
  color: "$white",
  fontWeight: "$regular",
  marginBottom: "$6",
});

export const SubTitle = styled("h3", {
  fontSize: "$subtitle",
  color: "$white",
  fontWeight: "$regular",
});

export const Diviser = styled("hr", {
  border: "0.1rem solid $neutral700",
  margin: "$6 0",
});

export const CompaniesList = styled("ul", {
  display: "grid",
  gridGap: "$5",
  background: "$neutral800",
  padding: "$6",
  borderRadius: "0.8rem",
});
