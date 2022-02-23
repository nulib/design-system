import React from "react";
import Prism from "prismjs";
import Highlight, { defaultProps } from "prism-react-renderer";
import vsDark from "prism-react-renderer/themes/vsDark";

interface PrismWrapperProps {
  code: string;
  language?: string;
  plugins?: Array<string>;
}

const PrismWrapper: React.FC<PrismWrapperProps> = ({
  code,
  language = "js",
  plugins = ["line-numbers"],
}) => {
  const codeRef = React.useRef();

  const highlight = () => {
    if (codeRef && codeRef.current) {
      Prism.highlightElement(codeRef.current);
    }
  };

  React.useEffect(() => {
    highlight();
  }, [code, language, plugins]);

  return (
    <pre className={!plugins ? "" : plugins.join(" ")}>
      <code ref={codeRef} className={`language-${language}`}>
        {code.trim()}
      </code>
    </pre>
  );
};

const exampleCode = `
(function someDemo() {
  var test = "Hello World!";
  console.log(test);
})();

return () => <App />;
`;

export const Yo = () => {
  return (
    <Highlight
      {...defaultProps}
      code={exampleCode}
      language="jsx"
      theme={vsDark}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={style}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

export default PrismWrapper;
