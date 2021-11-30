import { styled, colorHelpers } from "../stitches.config";

export const StyledPlaceholder = styled("div", {
  display: "flex",
  height: "calc(100% - 2rem)",
  width: "calc(100% - 2rem)",
  alignContent: "center",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
  padding: "1rem",
  textAlign: "center",
  lineHeight: "1.55em",
  boxSizing: "content-box",

  "> span": {
    display: "inline-flex",
    maxHeight: "100%",
    maxWidth: "100%",
    alignContent: "center",
    alignSelf: "center",
    flexDirection: "column",
    flexGrow: "0",
    flexShrink: "1",
    margin: "auto",
  },

  img: {
    maxHeight: "100%",
    maxWidth: "100%",
    objectFit: "contain",
  },

  variants: {
    isLight: {
      true: {
        ...colorHelpers.isLight,
      },
    },
  },
});
