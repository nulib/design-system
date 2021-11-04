import type { NextPage } from "next";
import Link from "next/link";
import { Button } from "../components/Button";
import { styled } from "../stitches.config";
import { Section } from "../components/Section";

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
          <Button>Ima button</Button>
        </Section>
        <Section size="1">
          <h2 id="checkbox">Checkbox</h2>
          <p>A Checkbox</p>
          <input type="checkbox" />
        </Section>
        <Section size="1">
          <h2 id="notification">Notification</h2>
          <p>A Notification</p>
          <input type="checkbox" />
        </Section>
      </MainWrapper>
    </div>
  );
};

export default Home;
