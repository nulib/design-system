import { styled, colorHelpers } from "../stitches.config";

export const Tag = styled("div", {
  // Reset
  boxSizing: "border-box",

  // Custom
  borderRadius: "5px",
  padding: "$1",
  marginBottom: "$2",
  marginRight: "$2",
  backgroundColor: "$richBlack10",
  color: "$richBlack50",
  display: "inline-block",
  textTransform: "uppercase",
  fontSize: "$2",

  "&:last-child": {
    marginRight: "0",
  },

  variants: {
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
