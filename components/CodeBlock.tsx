import { styled } from "../stitches.config";

const StyleCodeBlock = styled("code", {
  backgroundColor: "#efefef",
  //color: "",
  padding: "$1 $3 $3",
  marginBottom: "$3",
});

export const CodeBlock = ({ children }) => (
  <pre>
    <StyleCodeBlock>{children}</StyleCodeBlock>
  </pre>
);
