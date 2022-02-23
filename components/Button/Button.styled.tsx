import { styled, colorHelpers } from "../../stitches.config";

export const StyledButton = styled("button", {
  // Reset
  all: "unset",
  alignItems: "center",
  boxSizing: "content-box",
  userSelect: "none",
  "&::before": {
    boxSizing: "border-box",
  },
  "&::after": {
    boxSizing: "border-box",
  },

  // Custom reset?
  flexShrink: 0,
  justifyContent: "center",
  lineHeight: "1",
  WebkitTapHighlightColor: "rgba(0,0,0,0)",

  // Custom
  border: "1px solid $richBlack10",
  backgroundColor: "$white",
  color: "$richBlack50",
  cursor: "pointer",
  display: "inline-flex",
  fontSize: "$4",
  margin: "0 .5em .5em 0",
  padding: "calc(0.75em - 1px) calc(1em - 1px)",
  position: "relative",
  textTransform: "uppercase",
  transition: "all 0.3s ease 0s",
  textDecoration: "none",
  textAlign: "center",
  "&:after": {
    content: "",
    position: "absolute",
    transition: "all 0.3s ease 0s",
    zIndex: "-1",
  },
  "&:hover, &:active": {
    borderColor: "$richBlack20",
    //borderBottom: "none",
  },
  "&:focus": {
    border: "2px dashed",
  },
  "&:disabled": {
    opacity: 0.5,
    cursor: "not-allowed",
  },
  "&:disabled:hover": {
    opacity: 0.5,
  },

  // For icons
  "& span": {
    paddingLeft: "$1",
  },

  // Variants
  variants: {
    isLowercase: {
      true: {
        padding: "0.75em 1em",
        textTransform: "unset",
      },
    },
    isLight: {
      true: {
        padding: "0.75em 1em",
        border: "none",
        "&:hover": {
          opacity: "0.75",
        },
        ...colorHelpers.isLight,
      },
    },
    isPrimary: {
      true: {
        padding: "0.75em 1em",
        border: "none",
        "&:hover": {
          opacity: "0.75",
        },
        ...colorHelpers.isPrimary,
      },
    },
    isText: {
      true: {
        padding: "0",
        border: "none",
        backgroundColor: "transparent",
        "&:hover": {
          textDecoration: "underline",
        },
      },
    },
    isDanger: {
      true: {
        padding: "0.75em 1em",
        border: "none",
        "&:hover": {
          opacity: "0.75",
        },
        ...colorHelpers.isDanger,
      },
    },
  },
});
