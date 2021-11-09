import React, { forwardRef } from "react";
import { styled, CSS, VariantProps, colorHelpers } from "../stitches.config";

const StyledButton = styled("button", {
  // Reset
  all: "unset",
  alignItems: "center",
  boxSizing: "border-box",
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
  padding: ".8em 1em .7em 1em",
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

  // For icons
  "& span": {
    paddingLeft: "$1",
  },

  // Variants
  variants: {
    isLight: {
      true: {
        border: "none",
        "&:hover": {
          opacity: "0.5",
        },
        ...colorHelpers.isGrey,
      },
    },
    isPrimary: {
      true: {
        border: "none",
        "&:hover": {
          opacity: "0.5",
        },
        ...colorHelpers.isPrimary,
      },
    },
    isText: {
      true: {
        border: "none",
        "&:hover": {
          textDecoration: "underline",
        },
      },
    },
    isDanger: {
      true: {
        border: "none",
        "&:hover": {
          opacity: "0.5",
        },
        ...colorHelpers.isDanger,
      },
    },
  },
});

type ButtonComponentProps = React.ButtonHTMLAttributes<HTMLButtonElement>;
type ButtonVariants = VariantProps<typeof StyledButton>;
type ButtonProps = ButtonComponentProps & ButtonVariants & { css?: CSS };

export const Button = (props: ButtonProps) => {
  return <StyledButton {...props} />;
};
