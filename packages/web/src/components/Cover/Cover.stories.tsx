import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Cover from "./Cover";
import { Stack } from "../Stack";

export default {
  title: "Cover",
  component: Cover,
  argTypes: {},
} as ComponentMeta<typeof Cover>;

const Template: ComponentStory<typeof Cover> = ({
  showFooter,
  showHeader,
  ...args
}) => (
  <>
  <Cover {...args}>
    {showHeader && <div>Welcome to the Matrix</div>}
    <Cover.Center>
      <Stack gap="1rem">
        <h1>Centered Element</h1>
        <p>The heading and this paragraph will remain centered vertically.</p>
      </Stack>
    </Cover.Center>
    {showFooter && (
      <div>
        <button>Enter the Matrix</button>
      </div>
    )}
  </Cover>
  <style>
    {`body { padding: 0px !important; }`}
  </style>
  </>
);

export const Primary = Template.bind({});

Primary.args = {
  as: "div",
  space: "1rem",
  style: {
    backgroundColor: "#efefef",
  },
  minimumHeight: "100vh",
  noPadding: false,
  showFooter: true,
  showHeader: true,
};
