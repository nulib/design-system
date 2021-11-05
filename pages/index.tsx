import type { NextPage } from "next";
import Link from "next/link";
import { Button } from "../components/Button";
import { styled } from "../stitches.config";
import { Section } from "../components/Section";
import { Notification } from "../components/Notification";

const Sidebar = styled("aside", {
  position: "fixed",
  top: "$7",
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

const MainWrapper = styled("div", {
  paddingLeft: 250,
  paddingRight: 100,
});

const Home: NextPage = () => {
  return (
    <div>
      <Sidebar>
        <SidebarList>
          <SidebarListItem>
            <Link href="#button">Button</Link>
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
          <Button>Primary button</Button>
          <Button color="red">Delete</Button>
        </Section>
        <Section size="1">
          <h2 id="checkbox">Checkbox</h2>
          <p>A Checkbox</p>
          <input type="checkbox" />
        </Section>
        <Section size="1">
          <h2 id="notification">Notification</h2>
          <p>A Notification</p>
          <h3>Props</h3>
          <p>
            <code>flavor?: string [danger, info, warning]</code>
          </p>
          <Notification>
            <p>
              <strong>Hey</strong>
            </p>
            <p>Some message goes here</p>
          </Notification>
          <Notification flavor="info">An info message</Notification>
          <Notification flavor="warning">
            Warning: be careful before you do something
          </Notification>
          <Notification flavor="danger">
            Danger: this could be destructive
          </Notification>
        </Section>
      </MainWrapper>
    </div>
  );
};

export default Home;
