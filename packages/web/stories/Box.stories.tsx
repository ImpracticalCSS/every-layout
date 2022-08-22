import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "../src/components/Box";

export default {
  title: "Box",
  component: Box,
  argTypes: {},
} as ComponentMeta<typeof Box>;

const Template: ComponentStory<typeof Box> = (args) => (
  <>
    <Box {...args} />
  </>
);

export const Primary = Template.bind({});

Primary.args = {
  as: "div",
  paddingHorizontal: 2,
  paddingVertical: 2,
  marginHorizontal: 2,
  marginVertical: 2,
  border: "1px solid #000000"
};
