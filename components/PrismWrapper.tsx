import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import vsDark from "prism-react-renderer/themes/vsDark";
import { styled } from "@stitches/react";

interface PrismWrapperProps {
  code: string;
}

const Pre = styled("pre", {
  fontSize: "$3",
  textAlign: "left",
  padding: "$1 $3 $3",
  marginBottom: "$3",
  overflow: "scroll",
  borderRadius: "$1",
});

const PrismWrapper: React.FC<PrismWrapperProps> = ({ code }) => {
  return (
    <Highlight {...defaultProps} code={code} language={`jsx`} theme={vsDark}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Pre className={className} style={style}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </Pre>
      )}
    </Highlight>
  );
};

export default PrismWrapper;
