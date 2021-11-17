import { styled } from "../stitches.config";

export const StyledIcon = styled("svg", {
  variants: {
    isLarge: {
      true: {
        height: "4rem",
        width: "4rem",
      },
    },
    isMedium: {
      true: {
        height: "2rem",
        width: "2rem",
      },
    },
    isSmall: {
      true: {
        height: "1rem",
        width: "1rem",
      },
    },
  },
});
