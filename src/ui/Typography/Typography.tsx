import { styled } from "~/../stitches.config";

export const Typography = styled("p", {
  fontFamily: "$text",
  color: "$black",

  defaultVariants: {
    type: "default",
    weight: "regular",
  },
  variants: {
    type: {
      title: {
        fontFamily: "$title",
        fontSize: "$6",
        fontWeight: "700",
      },
      subtitle: {
        fontFamily: "$title",
        fontSize: "$5",
        fontWeight: "700",
      },
      large: {
        fontFamily: "$text",
        fontSize: "$4",
        fontWeight: "400",
      },
      default: {
        fontFamily: "$text",
        fontSize: "$3",
        fontWeight: "400",
      },
      small: {
        fontFamily: "$text",
        fontSize: "$2",
        fontWeight: "400",
      },
      disclaimer: {
        fontFamily: "$text",
        fontSize: "$1",
        fontWeight: "400",
      },
    },
    weight: {
      regular: {
        fontWeight: "400",
      },
      medium: {
        fontWeight: "500",
      },
      bold: {
        fontWeight: "700",
      },
    },
  },
});
