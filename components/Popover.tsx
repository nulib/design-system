import React from "react";
import { CSS, VariantProps } from "../stitches.config";
import { Icon } from "./Icon";
import {
  StyledArrow,
  StyledClose,
  StyledContent,
  StyledPopover,
  StyledTrigger,
} from "./Popover.styled";

/**
 *
 */
type TriggerShape = {
  children: React.ReactChild;
  "aria-controls"?: string;
};

type TriggerComponentProps = React.ButtonHTMLAttributes<HTMLButtonElement>;
type TriggerProps = TriggerComponentProps & TriggerShape & { css?: CSS };

const Trigger: React.FC<TriggerProps> = (props) => {
  return <StyledTrigger {...props}>{props.children}</StyledTrigger>;
};

/**
 *
 */
type ContentShape = {
  children: React.ReactChild | React.ReactChild[];
  id?: string;
};

type ContentComponentProps = React.HTMLAttributes<HTMLDivElement>;
type ContentVariants = VariantProps<typeof StyledContent>;
type ContentProps = ContentComponentProps &
  ContentShape &
  ContentVariants & { css?: CSS };

const Content: React.FC<ContentProps> = (props) => {
  return (
    <StyledContent {...props}>
      <StyledArrow />
      <StyledClose>
        <Icon isSmall>
          <Icon.Close />
        </Icon>
      </StyledClose>
      {props.children}
    </StyledContent>
  );
};

/**
 *
 */
type PopoverShape = {
  children: React.ReactChild | React.ReactChild[];
};

interface PopoverComposition {
  Content: React.FC<ContentShape & ContentVariants>;
  Trigger: React.FC<TriggerShape>;
}

type PopoverProps = PopoverShape & { css?: CSS };

const Popover: React.FC<PopoverProps> & PopoverComposition = ({ children }) => {
  return <StyledPopover>{children}</StyledPopover>;
};

Popover.Trigger = Trigger;
Popover.Content = Content;

export { Popover };
