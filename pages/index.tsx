import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import { styled } from "stitches.config";
import { Section } from "components/Section";
import { SpacerLine } from "components/SpacerLine";

import ButtonWrapper from "components/Button/ButtonWrapper";
import IconButton from "components/Button/IconButton";
import IconWrapper from "components/Icon/IconWrapper";
import NotificationWrapper from "components/Notification/NotificationWrapper";
import PlaceholderWrapper from "components/Placeholder/PlaceholderWrapper";
import PopoverWrapper from "components/Popover/PopoverWrapper";
import TextTriggerPopover from "components/Popover/TextTriggerPopover";
import TagWrapper from "components/Tag/TagWrapper";
import IconTag from "components/Tag/IconTag";

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
  padding: "$1 $1 $3",
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
        <h1>Northwestern Libraries Design System</h1>
        <p>
          A global design system for NUL ReactJS UI components, intended for all
          front end applications, NPM modules, and user interfaces.
        </p>

        <Section size="1">
          <h2 id="button">Button</h2>
          <p>A Button</p>
          <ButtonWrapper />
        </Section>

        <SpacerLine />

        <Section size="1">
          <h2 id="button">Button w/ Icon</h2>
          <p>
            A Button can wrap multiple elements. To use an icon, wrap your
            button text in a `span`
          </p>
          <IconButton />
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
          <IconWrapper />
        </Section>

        <SpacerLine />

        <Section size="1">
          <h2 id="notification">Notification</h2>
          <p>A Notification</p>
          <NotificationWrapper />
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
          <PlaceholderWrapper />
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
          <PopoverWrapper />
        </Section>

        <SpacerLine />

        <Section size="1">
          <h2 id="popover-text">Popover w/ Text Trigger</h2>
          <p>
            Popover Triggers can also wrap around text. Though not required this
            text should indicate to the user that it is actionable in some way.
          </p>
          <TextTriggerPopover />
        </Section>

        <SpacerLine />

        <Section size="1">
          <h2 id="tag">Tag</h2>
          <p>A Tag</p>
          <TagWrapper />
        </Section>

        <SpacerLine />

        <Section size="1">
          <h2 id="button">Tag w/ Icon</h2>
          <p>
            A Tag can wrap multiple Icon components. To use an icon, as the prop
            isIcon.
          </p>
          <IconTag />
        </Section>
      </MainWrapper>
    </div>
  );
};

export default Home;
