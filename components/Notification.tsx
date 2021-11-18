import { useState } from "react";
import { styled, colorHelpers, CSS, VariantProps } from "../stitches.config";
import { Icon } from "../components/Icon";

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

  "> button.delete": {
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

  const [visible, setVisible] = useState(true);

  function handleCloseClick(): void {
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <StyledNotification {...styleProps}>
      {isClosable && (
        <button className="delete" onClick={handleCloseClick}>
          <Icon isSmall>
            <Icon.Title>Close Notification</Icon.Title>
            <Icon.Close />
          </Icon>
        </button>
      )}
      {props.children}
    </StyledNotification>
  );
};
