import { Popover } from "components/Popover/Popover";
import { Button } from "components/Button/Button";
import { Icon } from "components/Icon/Icon";
import { Placeholder } from "components/Placeholder/Placeholder";
import PrismWrapper from "components/PrismWrapper";
import PropsTable from "components/PropsTable";
import { popover as code } from "./code-samples";
import { Block } from "components/Block/Block";

const PopoverWrapper: React.FC = () => {
  return (
    <>
      <Block>
        <Popover>
          <Popover.Trigger aria-controls="this-popover">
            <Button as="span">
              <Icon isSmall>
                <Icon.Add />
              </Icon>
              <span>Default</span>
            </Button>
          </Popover.Trigger>
          <Popover.Content id="this-popover">
            <nav
              style={{
                display: "flex",
                flexDirection: "column",
                fill: "#666",
                lineHeight: "1.75rem",
              }}
            >
              <strong>Default</strong>
              <a>
                <Icon isSmall>
                  <Icon.Image />
                </Icon>
                <span> Update Image</span>
              </a>
              <a>
                <Icon isSmall>
                  <Icon.Video />
                </Icon>
                <span> Connect Video</span>
              </a>
              <a>
                <Icon isSmall>
                  <Icon.Audio />
                </Icon>
                <span> Add Audio</span>
              </a>
            </nav>
          </Popover.Content>
        </Popover>
        <Popover>
          <Popover.Trigger aria-controls="another-popover">
            <Button isPrimary as="span">
              Primary
            </Button>
          </Popover.Trigger>
          <Popover.Content id="another-popover" isPrimary>
            <div style={{ height: "150px" }}>
              <Placeholder>
                <Icon isMedium>
                  <Icon.Image />
                </Icon>
              </Placeholder>
            </div>
            <p>
              <strong>Primary</strong>
            </p>
            <p>
              Nullam nec diam velit. Duis pulvinar, mi at dapibus pulvinar, est
              metus rhoncus nulla, vel pretium sapien quam ac ipsum.
            </p>
            <Button isLight isLowercase>
              Quisque hendrerit
            </Button>
          </Popover.Content>
        </Popover>
      </Block>

      <h3>Example usage</h3>
      <PrismWrapper code={code} />

      <h3>Props</h3>
      <PropsTable
        items={[
          {
            name: "isPrimary?",
            description: "Color style",
            type: "boolean",
          },
        ]}
      />
    </>
  );
};

export default PopoverWrapper;
