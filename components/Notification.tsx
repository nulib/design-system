import { styled, colorHelpers } from "../stitches.config";

export const Notification = styled("div", {
  // Reset
  boxSizing: "border-box",

  // Custom
  padding: "$5",
  marginBottom: "$2",
  backgroundColor: "$nuPurple10",
  color: "$nuPurple",
  fill: "$nuPurple",

  "& svg": {
    fill: "inherit",
  },

  "& span": {
    color: "inherit",
  },

  variants: {
    isDanger: {
      true: { ...colorHelpers.isDanger },
    },
    isCentered: {
      true: {
        textAlign: "center",
      },
    },
    isInfo: {
      true: { ...colorHelpers.isInfo },
    },
    isSuccess: {
      true: { ...colorHelpers.isSuccess },
    },
    isWarning: {
      true: { ...colorHelpers.isWarning },
    },
  },
});
