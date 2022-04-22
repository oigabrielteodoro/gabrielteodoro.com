import { FiChevronDown } from "react-icons/fi";

import { styled } from "~/stitches.config";

export const CountryFlag = styled("img", {
  marginRight: "$3",
  width: "3.2rem",
  borderRadius: "0.4rem",
});

export const ChevronDownWithMargin = styled(FiChevronDown, {
  marginLeft: "$3",
  color: "$neutral300",
});
