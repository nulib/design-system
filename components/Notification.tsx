import React from "react";
import { styled, colorHelpers, CSS, VariantProps } from "../stitches.config";

const StyledNotification = styled("div", {
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

  "> button.delete-button": {
    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer",
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

type NotificationShape = {
  children: React.ReactChild | React.ReactChild[];
  isClosable?: boolean;
};
type NotificationVariants = VariantProps<typeof StyledNotification>;
type NotificationProps = NotificationShape &
  NotificationVariants & { css?: CSS };

export const Notification = (props: NotificationProps) => {
  // Peel isClosable off, as it will make Stitches complain if it gets through
  const { isClosable, ...styleProps } = props;

  const [visible, setVisible] = React.useState(true);

  function handleCloseClick(): void {
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <StyledNotification {...styleProps}>
      {isClosable && (
        <button className="delete-button" onClick={handleCloseClick}>
          <svg
            data-testid="icon-svg"
            role="img"
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
          >
            <title>Close</title>
            <path d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z" />
          </svg>
        </button>
      )}
      {props.children}
    </StyledNotification>
  );
};
