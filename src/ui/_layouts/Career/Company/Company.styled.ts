import Image from "next/image";
import { styled } from "~/stitches.config";

export const Container = styled("li", {
  display: "flex",
  alignItems: "center",
});

export const CompanyInfo = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  marginLeft: "$4",

  strong: {
    fontSize: "$large",
    fontWeight: "$medium",
    color: "$white",
    display: "flex",
    alignItems: "center",

    small: {
      fontSize: "$disclaimer",
      marginLeft: "$1",
    },
  },
  small: {
    fontSize: "$small",
    color: "$neutral300",
  },
});

export const CompanyImage = styled(Image, {
  borderRadius: "0.8rem",
  border: "0.1rem solid $neutral700 !important",
  transition: "300ms",

  "&:hover": {
    opacity: 0.5,
  },
});
