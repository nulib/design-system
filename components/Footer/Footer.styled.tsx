import { styled } from "../../stitches.config";

export const FooterStyled = styled("footer", {
  background: "$nuPurple",
  color: "$white",
  display: "grid",
  fontFamily: "$sans",
  fontSize: "$3",
  gap: "$4",
  gridTemplateColumns: "1",
  padding: "$6 0",
  width: "100%",

  "& a": {
    color: "$white",
    fontFamily: "$sans",

    "&:hover, &:focus": {
      textDecoration: "none",
    },
  },

  "@bp2": {
    gridTemplateColumns: "repeat(2, 1fr)",
  },

  "@bp3": {
    gridTemplateColumns: "repeat(4, 1fr)",
  },

  "& .hide-label": {
    position: "absolute",
    left: "-10000px",
    top: "auto",
    width: "1px",
    height: "1px",
    overflow: "hidden",
  },

  variants: {
    isGrey: {
      true: {
        background: "$richBlack80",
      },
    },
  },
});

export const FooterContent = styled("div", {
  marginRight: "5.15464%",
  display: "inline-block",
  position: "relative",
  verticalAlign: "top",

  "&.contact": {
    "& ul": {
      margin: "0 0 1rem 2rem",
      position: "relative",
    },
  },

  "@bp1": {
    marginBottom: "$2",
  },
  "@bp2": {
    marginBottom: "0",
  },
});

export const FooterIcon = styled("li", {
  backgroundSize: "18px 24px",
  position: "absolute",
  top: "2px",
  left: "-2rem",
  height: "24px",
  width: "18px",
});

export const FooterList = styled("ul", {
  listStyleType: "none",
  margin: "0",
  padding: "0",

  "& li": {
    paddingBottom: "$3",
  },

  "& a": {
    borderBottom: "0",
    textDecoration: "underline",
  },
});

export const Social = styled("a", {
  display: "inline-block",
  verticalAlign: "bottom",
  overflow: "hidden",
  margin: "4px",
  width: "39px",
  height: "39px",
  fontSize: "0",
  textIndent: "-9999px",
  background:
    "url(https://common.northwestern.edu/v8/css/images/icons/social-media-icons.svg);",
  backgroundColor: "#fff",
  transition: "background 0.3s",
  border: "1px solid #fff",

  "&:hover, &:focus": {
    backgroundColor: "#b6acd1",
  },

  "&.facebook": {
    backgroundPosition: "0 0",
    "&:hover, &:focus": {
      backgroundPosition: "0 -39px",
    },
  },
  "&.twitter": {
    backgroundPosition: "-39px 0",
    "&:hover, &:focus": {
      backgroundPosition: "-39px -39px",
    },
  },
  "&.instagram": {
    backgroundPosition: "-78px 0",
    "&:hover, &:focus": {
      backgroundPosition: "-78px -39px",
    },
  },
  "&.youtube": {
    backgroundPosition: "-156px 0",
    "&:hover, &:focus": {
      backgroundPosition: "-156px -39px",
    },
  },
  "&.wordpress": {
    backgroundPosition: "-234px 0",
    "&:hover, &:focus": {
      backgroundPosition: "-234px -39px",
    },
  },
});
