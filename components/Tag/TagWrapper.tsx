import { Tag } from "components/Tag/Tag";
import PrismWrapper from "components/PrismWrapper";
import PropsTable from "components/PropsTable";
import { tag as code } from "./code-samples";
import { Block } from "components/Block/Block";

const TagWrapper: React.FC = () => {
  return (
    <>
      <Block>
        <Tag>Hey hey</Tag>
        <Tag isWarning>Ima warning</Tag>
        <Tag isSuccess>Published</Tag>
        <Tag isPrimary>Video</Tag>
        <Tag isInfo>Info</Tag>
        <Tag isDanger>Errors ingesting</Tag>
      </Block>

      <h3>Example usage</h3>
      <PrismWrapper code={code} />

      <h3>Props</h3>
      <PropsTable
        items={[
          {
            name: "isDanger?",
            description: "Color style",
            type: "boolean",
          },
          {
            name: "isInfo?",
            description: "Color style",
            type: "boolean",
          },
          {
            name: "isPrimary?",
            description: "Color style",
            type: "boolean",
          },
          {
            name: "isSuccess?",
            description: "Color style",
            type: "boolean",
          },
          {
            name: "isWarning?",
            description: "Color style",
            type: "boolean",
          },
        ]}
      />
    </>
  );
};

export default TagWrapper;
