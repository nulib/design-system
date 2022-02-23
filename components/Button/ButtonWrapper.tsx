import { Button } from "components/Button/Button";
import PrismWrapper from "components/PrismWrapper";
import PropsTable from "components/PropsTable";
import { button as code } from "./code-samples";

const ButtonWrapper: React.FC = () => {
  return (
    <>
      <Button>Default Button</Button>
      <Button isPrimary>Primary</Button>
      <Button isLight>Light Style</Button>
      <Button isDanger>Delete</Button>
      <Button isText>Text</Button>
      <Button isLowercase>Button w/o Uppers</Button>
      <Button as="span">Button as a span</Button>
      <Button disabled>Im disabled</Button>

      <h3>Example usage</h3>
      <PrismWrapper code={code} />

      <h3>Props</h3>
      <PropsTable
        items={[
          {
            name: "as",
            description: "Element type",
            type: "string",
          },
          {
            name: "isDanger?",
            description: "Color style",
            type: "boolean",
          },
          {
            name: "isLight?",
            description: "Color style",
            type: "boolean",
          },
          {
            name: "isLowercase?",
            description: "Text style",
            type: "boolean",
          },
          {
            name: "isPrimary?",
            description: "Color style",
            type: "boolean",
          },
          {
            name: "isText?",
            description: "Link style button",
            type: "boolean",
          },
        ]}
      />
    </>
  );
};

export default ButtonWrapper;