import { Footer } from "./Footer";
import PrismWrapper from "../PrismWrapper";
import PropsTable from "../PropsTable";
import { footer as code } from "./code-samples";
import { Block } from "../Block/Block";

const FooterWrapper: React.FC = () => {
  return (
    <>
      <Block>
        <Footer isCopyright />
      </Block>

      <h3>Example usage</h3>
      <PrismWrapper code={code} />

      <h3>Props</h3>
      <PropsTable
        items={[
          {
            name: "isGrey",
            description: "Grey background instead of purple",
            type: "boolean",
          },
        ]}
      />
    </>
  );
};

export default FooterWrapper;
