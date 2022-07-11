import { Tag } from "./Tag";
import { Icon } from "../Icon/Icon";
import PrismWrapper from "../PrismWrapper";
import PropsTable from "../PropsTable";
import { tagIcon as code } from "./code-samples";
import { Block } from "../Block/Block";

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
