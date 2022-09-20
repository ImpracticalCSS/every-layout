import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import { Stack, StackItem } from "../../native";
import { Text } from "react-native";

type StackStory = ComponentStory<typeof Stack>;

export default {
  title: "Stack",
  component: Stack,
  argTypes: {
    onPress: { action: "pressed the button" },
  },
  args: {
    text: "Hello world",
  },
} as ComponentMeta<typeof Stack>;


const BasicTemplate: StackStory = (args) => (
    <Stack gap={12}>
      <StackItem>
        <Text>Stack 1</Text>
      </StackItem>
      <StackItem>
        <Text>Stack 2</Text>
      </StackItem>
    </Stack>
);

export const Basic = BasicTemplate.bind({});

Basic.args = {};
