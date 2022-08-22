import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Switcher from "../src/components/Switcher/Switcher";
import Flexbox from "../src/components/Flexbox";

export default {
  title: "Switcher",
  component: Switcher,
  argTypes: {},
} as ComponentMeta<typeof Switcher>;

const Template: ComponentStory<typeof Switcher> = (args) => (
  <Switcher {...args}>
    <Flexbox style={{ backgroundColor: "pink", padding: 70 }}>Flexbox 1</Flexbox>
    <Flexbox style={{ backgroundColor: "pink", padding: 70 }}>Flexbox 2</Flexbox>
    <Flexbox style={{ backgroundColor: "pink", padding: 70 }}>Flexbox 3</Flexbox>
  </Switcher>
);

export const Primary = Template.bind({});

Primary.args = {
  as: "div",
  threshold: "60rem",
  gap: "1rem"
};
