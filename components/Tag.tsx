import { styled, colorHelpers } from "../stitches.config";
import { StyledIcon } from "./Icon.styled";

export const Tag = styled("div", {
  // Reset
  boxSizing: "border-box",

  // Custom
  display: "inline-flex",
  alignItems: "center",
  borderRadius: "5px",
  padding: "$1",
  marginBottom: "$2",
  marginRight: "$2",
  backgroundColor: "$lightGrey",
  color: "$richBlack50",
  textTransform: "uppercase",
  fontSize: "$2",
  objectFit: "contain",

  "&:last-child": {
    marginRight: "0",
  },

  [`${StyledIcon}`]: {
    position: "absolute",
    left: "$1",
    height: "$3",
    width: "$3",
  },

  variants: {
    isIcon: {
      true: { position: "relative", paddingLeft: "$5" },
    },
    isDanger: {
      true: { ...colorHelpers.isDanger },
    },
    isInfo: {
      true: { ...colorHelpers.isInfo },
    },
    isPrimary: {
      true: {
        backgroundColor: "$nuPurple10",
        color: "$nuPurple",
      },
    },
    isSuccess: {
      true: { ...colorHelpers.isSuccess },
    },
    isWarning: {
      true: { ...colorHelpers.isWarning },
    },
  },
});
