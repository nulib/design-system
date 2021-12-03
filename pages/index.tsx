import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../components/Button";
import { styled } from "../stitches.config";
import { Section } from "../components/Section";
import { Notification } from "../components/Notification";
import { Tag } from "../components/Tag";
import { SpacerLine } from "../components/SpacerLine";
import PropsTable from "../components/PropsTable";
import { CodeBlock } from "../components/CodeBlock";
import * as codeSamples from "../code-samples";
import { Placeholder } from "../components/Placeholder";
import { Icon } from "../components/Icon";
import { Popover } from "../components/Popover";

const Sidebar = styled("aside", {
  position: "fixed",
  top: "$1",
  left: 0,
  bottom: 0,
  overflowY: "auto",
  width: 250,
  px: "$6",
  py: "$6",
});

const SidebarList = styled("ul", {
  padding: 0,
});
const SidebarListItem = styled("li", {
  padding: "$1",
  listStyle: "none",
});
const StyledN = styled("div", {
  maxWidth: "$8",
});

const MainWrapper = styled("div", {
  paddingLeft: 250,
  paddingRight: 100,
});

const Home: NextPage = () => {
  return (
    <div>
      <Sidebar>
        <StyledN>
          <Image
            src="/images/N-purple-120.png"
            width="600"
            height="577"
            alt="Northwestern N Logo"
          />
        </StyledN>
        <SidebarList>
          <SidebarListItem>
            <Link href="#button">Button</Link>
          </SidebarListItem>
          <SidebarListItem>
            <Link href="#checkbox">Checkbox</Link>
          </SidebarListItem>
          <SidebarListItem>
            <Link href="#icon">Icon</Link>
          </SidebarListItem>
          <SidebarListItem>
            <Link href="#notification">Notification</Link>
          </SidebarListItem>
          <SidebarListItem>
            <Link href="#placeholder">Placeholder</Link>
          </SidebarListItem>
          <SidebarListItem>
            <Link href="#popover">Popover</Link>
          </SidebarListItem>
          <SidebarListItem>
            <Link href="#tag">Tag</Link>
          </SidebarListItem>
        </SidebarList>
      </Sidebar>
      <MainWrapper>
        <Section size="2">
          <h1>Northwestern Libraries Design System</h1>
        </Section>

        <Section size="1">
          <h2 id="button">Button</h2>
          <p>A Button</p>

          <Button>Default Button</Button>
          <Button isPrimary>Primary</Button>
          <Button isLight>Light Style</Button>
          <Button isDanger>Delete</Button>
          <Button isText>Text</Button>
          <Button isLowercase>Button w/o Uppers</Button>
          <Button as="span">Button as a span</Button>
          <Button disabled>Im disabled</Button>

          <CodeBlock>{codeSamples.button}</CodeBlock>

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
        </Section>

        <SpacerLine />

        <Section size="1">
          <h2 id="button">Button w/ Icon</h2>
          <p>
            A Button can wrap multiple elements. To use an icon, wrap your
            button text in a `span`
          </p>

          <Button>
            <Icon isSmall>
              <Icon.Add />
            </Icon>
            <span>Add Item</span>
          </Button>

          <CodeBlock>{codeSamples.buttonIcon}</CodeBlock>
        </Section>

        <SpacerLine />

        <Section size="1">
          <h2 id="checkbox">Checkbox</h2>
          <p>A Checkbox</p>
          <input type="checkbox" />
        </Section>

        <SpacerLine />

        <Section size="1">
          <h2 id="icon">Icon</h2>
          <p>
            An Icon is a component that renders an SVG HTML element from a
            controlled set of{" "}
            <a
              href="https://ionic.io/ionicons"
              target="_blank"
              rel="noreferrer"
            >
              Ionicon
            </a>{" "}
            sourced icons.
          </p>

          <Icon isSmall>
            <Icon.Title>Audio Work</Icon.Title>
            <Icon.Audio />
          </Icon>

          <Icon isMedium>
            <Icon.Title>Audio Work</Icon.Title>
            <Icon.Video />
          </Icon>

          <Icon isLarge>
            <Icon.Title>Image Work</Icon.Title>
            <Icon.Image />
          </Icon>

          <CodeBlock>{codeSamples.icon}</CodeBlock>

          <PropsTable
            items={[
              {
                name: "isSmall?",
                description: "Icon size (1x1)",
                type: "boolean",
              },
              {
                name: "isMedium?",
                description: "Icon size (2x2)",
                type: "boolean",
              },
              {
                name: "isLarge?",
                description: "Icon size (4x4)",
                type: "boolean",
              },
            ]}
          />

          <PropsTable
            items={[
              {
                name: "Add",
                description: (
                  <Icon isMedium>
                    <Icon.Title>Add</Icon.Title>
                    <Icon.Add />
                  </Icon>
                ),
                type: "<Icon.Add />",
              },
              {
                name: "Audio",
                description: (
                  <Icon isMedium>
                    <Icon.Title>Audio</Icon.Title>
                    <Icon.Audio />
                  </Icon>
                ),
                type: "<Icon.Audio />",
              },
              {
                name: "Close",
                description: (
                  <Icon isMedium>
                    <Icon.Title>Close</Icon.Title>
                    <Icon.Close />
                  </Icon>
                ),
                type: "<Icon.Close />",
              },
              {
                name: "Image",
                description: (
                  <Icon isMedium>
                    <Icon.Title>Image</Icon.Title>
                    <Icon.Image />
                  </Icon>
                ),
                type: "<Icon.Image />",
              },
              {
                name: "Video",
                description: (
                  <Icon isMedium>
                    <Icon.Title>Video</Icon.Title>
                    <Icon.Video />
                  </Icon>
                ),
                type: "<Icon.Video />",
              },
            ]}
          />
        </Section>

        <SpacerLine />

        <Section size="1">
          <h2 id="notification">Notification</h2>
          <p>A Notification</p>
          <Notification isClosable>
            <p>
              <strong>Hey</strong>
            </p>
            <p>
              Some message goes here and this is the default notification
              color/style
            </p>
          </Notification>
          <Notification isSuccess>
            You have successfully completed some action
          </Notification>
          <Notification isInfo isCentered>
            An info message. We might not even need this? But it shows
            notifications can be centered too
          </Notification>
          <Notification isWarning isClosable>
            Warning: You can add a close button with the `isClosable` prop
          </Notification>
          <Notification isDanger>
            Danger: this could be destructive
          </Notification>

          <CodeBlock>{codeSamples.notification}</CodeBlock>

          <PropsTable
            items={[
              {
                name: "isDanger?",
                description: "Color style",
                type: "boolean",
              },
              {
                name: "isCentered?",
                description: "Center the content of the Notification",
                type: "boolean",
              },
              {
                name: "isClosable?",
                description:
                  "Adds a close button, which lets the user close a Notification",
                type: "boolean",
              },
              {
                name: "isInfo?",
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
        </Section>

        <SpacerLine />

        <Section size="1">
          <h2 id="placeholder">Placeholder</h2>
          <p>
            A Placeholder renders an element that extends to the bounds of its
            container. Children of placeholders can be textual,{" "}
            <a href="#icon">Icon</a> components, or images, and are centered
            horizontally and vertically.
          </p>
          <div style={{ width: "200px", height: "200px" }}>
            <Placeholder>
              <Icon isMedium>
                <Icon.Title>Audio Work</Icon.Title>
                <Icon.Audio />
              </Icon>
            </Placeholder>
          </div>
          <div style={{ width: "200px", height: "200px" }}>
            <Placeholder>
              <strong>Oops</strong> There should be something here.
            </Placeholder>
          </div>
          <div style={{ width: "200px", height: "200px" }}>
            <Placeholder>
              <img
                alt="Scouts"
                src="https://iiif.stack.rdc.library.northwestern.edu/iiif/2/ff2f57ff-6952-4ea6-b55b-ae2a76c13efc/full/600,/0/default.jpg"
              />
            </Placeholder>
          </div>

          <CodeBlock>{codeSamples.placeholder}</CodeBlock>
        </Section>

        <SpacerLine />

        <Section size="1">
          <h2 id="popover">Popover</h2>
          <p>
            A popover is a component that couples a trigger with some content
            that displays in an attached pane. When wrapping a Button component
            with Popover.Trigger, the <strong>as</strong> prop should be used on
            Buttons.
          </p>

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
                Nullam nec diam velit. Duis pulvinar, mi at dapibus pulvinar,
                est metus rhoncus nulla, vel pretium sapien quam ac ipsum.
              </p>
              <Button isLight isLowercase>
                Quisque hendrerit
              </Button>
            </Popover.Content>
          </Popover>

          <CodeBlock>{codeSamples.popover}</CodeBlock>

          <h3>Content</h3>
          <PropsTable
            items={[
              {
                name: "isPrimary?",
                description: "Color style",
                type: "boolean",
              },
            ]}
          />
        </Section>

        <SpacerLine />

        <Section size="1">
          <h2 id="popover-text">Popover w/ Text Trigger</h2>
          <p>
            Popover Triggers can also wrap around text. Though not required this
            text should indicate to the user that it is actionable in some way.
          </p>

          <Popover>
            <Popover.Trigger aria-controls="text-popover">
              <a style={{ color: "#4e2a84", fontSize: "1rem" }}>Text Popover</a>
            </Popover.Trigger>
            <Popover.Content id="text-popover">
              <p
                style={{
                  lineHeight: "1.75rem",
                }}
              >
                Fusce augue eros, convallis eget nunc a, dictum condimentum
                nunc. Vestibulum pulvinar risus et eleifend placerat. Nullam vel
                interdum felis. Aliquam vitae lorem vitae orci pretium aliquet.
              </p>
            </Popover.Content>
          </Popover>

          <CodeBlock>{codeSamples.popoverText}</CodeBlock>
        </Section>

        <SpacerLine />

        <Section size="1">
          <h2 id="tag">Tag</h2>
          <p>A Tag</p>
          <Tag>Hey hey</Tag>
          <Tag isWarning>Ima warning</Tag>
          <Tag isSuccess>Published</Tag>
          <Tag isPrimary>Video</Tag>
          <Tag isInfo>Info</Tag>
          <Tag isDanger>Errors ingesting</Tag>

          <CodeBlock>{codeSamples.tag}</CodeBlock>

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
        </Section>

        <SpacerLine />

        <Section size="1">
          <h2 id="button">Tag w/ Icon</h2>
          <p>
            A Tag can wrap multiple Icon components. To use an icon, as the prop
            isIcon.
          </p>

          <Tag isInfo isIcon>
            <Icon>
              <Icon.Video />
            </Icon>
            Video
          </Tag>

          <CodeBlock>{codeSamples.tagIcon}</CodeBlock>

          <PropsTable
            items={[
              {
                name: "isIcon?",
                description: "Layout style",
                type: "boolean",
              },
            ]}
          />
        </Section>
      </MainWrapper>
    </div>
  );
};

export default Home;
