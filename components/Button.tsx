import { styled } from "../stitches.config";

export const Button = styled("button", {
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
  border: "none",
  backgroundColor: "$nuPurple",
  color: "White",
  cursor: "pointer",
  display: "inline-block",
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
    opacity: "0.5",
    borderBottom: "none",
  },
  "&:focus": {
    border: "2px dashed",
  },

  // Variants
  variants: {
    color: {
      red: {
        backgroundColor: "$red",
      },
      gold: {
        backgroundColor: "$gold",
      },
    },
  },
});
