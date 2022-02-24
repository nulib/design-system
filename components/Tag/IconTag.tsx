import { Tag } from "components/Tag/Tag";
import { Icon } from "components/Icon/Icon";
import PrismWrapper from "components/PrismWrapper";
import PropsTable from "components/PropsTable";
import { tagIcon as code } from "./code-samples";
import { Block } from "components/Block/Block";

const IconTag: React.FC = () => {
  return (
    <>
      <Block>
        <Tag isInfo isIcon>
          <Icon>
            <Icon.Video />
          </Icon>
          Video
        </Tag>
      </Block>

      <PrismWrapper code={code} />

      <PropsTable
        items={[
          {
            name: "isIcon?",
            description: "Layout style",
            type: "boolean",
          },
        ]}
      />
    </>
  );
};

export default IconTag;
