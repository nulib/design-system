import React from "react";
import { CSS, VariantProps } from "../../stitches.config";
import { StyledButton } from "./Button.styled";

type ButtonShape = {
  as?: string;
};

type ButtonComponentProps = React.ButtonHTMLAttributes<HTMLButtonElement>;
type ButtonVariants = VariantProps<typeof StyledButton>;
type ButtonProps = ButtonComponentProps &
  ButtonVariants & { css?: CSS } & ButtonShape;

export const Button = (props: ButtonProps) => {
  return <StyledButton type="button" role="button" {...props} />;
};
