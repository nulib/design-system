import { styled } from "../stitches.config";

export const Notification = styled("div", {
  // Reset
  boxSizing: "border-box",

  // Custom
  padding: "$5",
  marginBottom: "$2",

  variants: {
    flavor: {
      default: {
        backgroundColor: "$nuPurple10",
        color: "$nuPurple",
      },
      danger: {
        backgroundColor: "$red",
        color: "$white",
      },
      info: {
        backgroundColor: "$blue",
        color: "$white",
      },
      warning: {
        backgroundColor: "$gold",
        color: "$white",
      },
    },
  },
  defaultVariants: {
    flavor: "default",
  },
});
