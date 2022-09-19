import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import { Stack } from "@zerry/every-layout-native";
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

export const Basic: StackStory = (args) => (
  <Stack gap={12}>
    <Stack.Item>
      <Text>Stack Item 1</Text>
    </Stack.Item>
    <Stack.Item>
      <Text>Stack Item 1</Text>
    </Stack.Item>
  </Stack>
);
