import React from "react";
import { StyledPlaceholder } from "./Placeholder.styled";

type PropShape = {
  children: React.ReactChild | React.ReactChild[];
};

export const Placeholder: React.FC<PropShape> = ({ children }) => {
  return (
    <StyledPlaceholder isLight>
      <span>{children}</span>
    </StyledPlaceholder>
  );
};
