import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Cluster from "../src/components/Cluster/Cluster";
import Flexbox from "../src/components/Flexbox";

export default {
  title: "Cluster",
  component: Cluster,
  argTypes: {
    horizontalAlignment: {
      options: [
        "flex-start",
        "flex-end",
        "center",
        "space-between",
        "space-around",
        "space-evenly",
        "stretch",
        "normal",
        "left",
        "right",
      ],
    },
    verticalAlignment: {
      options: ["flex-start", "flex-end", "center", "normal", "stretch", "baseline"],
    },
  },
} as ComponentMeta<typeof Cluster>;

const Template: ComponentStory<typeof Cluster> = (args) => (
  <Cluster {...args}>
    <Flexbox as="li" style={{ backgroundColor: "pink", padding: 70 }}>
      Flexbox 1
    </Flexbox>
    <Flexbox as="li" style={{ backgroundColor: "pink", padding: 70 }}>
      Flexbox 2
    </Flexbox>
    <Flexbox as="li" style={{ backgroundColor: "pink", padding: 70 }}>
      Flexbox 3
    </Flexbox>
    <Flexbox as="li" style={{ backgroundColor: "pink", padding: 70 }}>
      Flexbox 4
    </Flexbox>
    <Flexbox as="li" style={{ backgroundColor: "pink", padding: 70 }}>
      Flexbox 5
    </Flexbox>
    <Flexbox as="li" style={{ backgroundColor: "pink", padding: 70 }}>
      Flexbox 6
    </Flexbox>
    <Flexbox as="li" style={{ backgroundColor: "pink", padding: 70 }}>
      Flexbox 7
    </Flexbox>
    <Flexbox as="li" style={{ backgroundColor: "pink", padding: 70 }}>
      Flexbox 8
    </Flexbox>
  </Cluster>
);

export const Primary = Template.bind({});

Primary.args = {
  as: "ul",
  space: "2rem",
  horizontalAlignment: "flex-start",
  verticalAlignment: "center",
};
