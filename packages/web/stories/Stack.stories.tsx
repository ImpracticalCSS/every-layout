import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Stack from "../src/components/Stack/Stack";
import Flexbox from "../src/components/Flexbox";

export default {
  title: "Stack",
  component: Stack,
  argTypes: {},
} as ComponentMeta<typeof Stack>;

const Template: ComponentStory<typeof Stack> = (args) => (
  <Stack {...args}>
    <Flexbox vertical style={{ backgroundColor: "pink", height: 100, padding: 20 }}>
      <Flexbox style={{ background: "red", flex: 1 }}>Flexbox 1.a</Flexbox>
      <Flexbox style={{ background: "red", flex: 1 }}>Flexbox 1.b</Flexbox>
    </Flexbox>
    <Flexbox vertical style={{ backgroundColor: "pink", height: 100, padding: 20 }}>
      <Flexbox style={{ background: "red", flex: 1 }}>Flexbox 2.a</Flexbox>
      <Flexbox style={{ background: "red", flex: 1 }}>Flexbox 2.b</Flexbox>
    </Flexbox>
    <Flexbox vertical style={{ backgroundColor: "pink", height: 100, padding: 20 }}>
      <Flexbox style={{ background: "red", flex: 1 }}>Flexbox 3.a</Flexbox>
      <Flexbox style={{ background: "red", flex: 1 }}>Flexbox 3.b</Flexbox>
    </Flexbox>
  </Stack>
);

export const Default = Template.bind({});

Default.args = {
  as: "div",
  gap: "1rem",
  recursive: false,
  paddingHorizontal: 1
};

export const Recursive = Template.bind({});

Recursive.args = {
  as: "div",
  gap: "1rem",
  recursive: true,
};