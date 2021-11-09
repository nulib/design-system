import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../components/Button";
import { styled } from "../stitches.config";
import { Section } from "../components/Section";
import { Notification } from "../components/Notification";
import { Tag } from "../components/Tag";
import { SpacerLine } from "../components/SpacerLine";
import { FaBeer } from "react-icons/fa";

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
  const handleClick = () => console.log("yo dude");

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
            <Link href="#tag">Tag</Link>
          </SidebarListItem>
          <SidebarListItem>
            <Link href="#checkbox">Checkbox</Link>
          </SidebarListItem>
          <SidebarListItem>
            <Link href="#notification">Notification</Link>
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
          <Button isText>Plain ol text</Button>
        </Section>

        <SpacerLine />

        <Section size="1">
          <h2 id="button">Button with Icon</h2>
          <p>
            A Button can wrap multiple elements. To use an icon, wrap your
            button text in a `span`
          </p>
          <Button>
            <FaBeer />
            <span>Lets Go</span>
          </Button>
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
          <h3>Props</h3>
          <p>
            <code>
              isDanger?: bool
              <br />
              isInfo?: bool
              <br />
              isPrimary?: bool
              <br />
              isSuccess?: bool
              <br />
              isWarning?: bool
            </code>
          </p>
        </Section>

        <SpacerLine />

        <Section size="1">
          <h2 id="checkbox">Checkbox</h2>
          <p>A Checkbox</p>
          <input type="checkbox" />
        </Section>

        <SpacerLine />

        <Section size="1">
          <h2 id="notification">Notification</h2>
          <p>A Notification</p>
          <Notification>
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
          <Notification isWarning>
            Warning: be careful before you do something
          </Notification>
          <Notification isDanger>
            Danger: this could be destructive
          </Notification>
          <h3>Props</h3>
          <p>
            <code>
              isDanger?: bool
              <br />
              isInfo?: bool
              <br />
              isSuccess?: bool
              <br />
              isWarning?: bool
            </code>
          </p>
        </Section>
      </MainWrapper>
    </div>
  );
};

export default Home;
