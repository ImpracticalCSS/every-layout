import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Frame from "../src/components/Frame/Frame";

export default {
  title: "Frame",
  component: Frame,
  argTypes: {},
} as ComponentMeta<typeof Frame>;

const ImageTemplate: ComponentStory<typeof Frame> = (args) => (
  <>
    <Frame {...args}>
      <Frame.Image src="https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg" />
    </Frame>
    <style>{`body { padding: 0px !important; }`}</style>
  </>
);

export const Image = ImageTemplate.bind({});

Image.args = {
  as: "div",
  ratio: "16:9",
};
