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
  position: "relative",

  "& svg": {
    fill: "inherit",
  },

  "& span": {
    color: "inherit",
  },

  "& > .delete": {
    right: "$2",
    position: "absolute",
    top: "$2",
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
