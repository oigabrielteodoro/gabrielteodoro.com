import { motion } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";

import { styled } from "~/stitches.config";

export const Container = styled("div", {
  position: "relative",
});

export const CountryFlag = styled("img", {
  marginRight: "$3",
  width: "3.2rem",
  borderRadius: "0.4rem",
});

export const ChevronDownWithMargin = styled(FiChevronDown, {
  marginLeft: "$3",
  color: "$neutral300",
  transition: "300ms",

  variants: {
    open: {
      true: {
        transform: "rotate(-180deg)",
      },
    },
  },
});

export const SelectList = styled(motion.ul, {
  position: "absolute",
  background: "$neutral700",
  padding: "$3",
  width: "100%",
  top: "calc(100% - 1rem)",
  borderRadius: "0 0 0.8rem 0.8rem",

  "li + li": {
    marginTop: "$3",
  },

  a: {
    display: "flex",
    alignItems: "center",
    color: "$white",
    fontWeight: "$medium",
    fontSize: "$paragraph",
  },
});
