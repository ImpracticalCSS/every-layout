import React from "react";
import { StackProps } from "./Stack.types";
import StackProvider from "./Stack.Provider";
import { View } from "react-native";

/**
 * The `Stack` element creates white-space between a flow of vertical elements.
 * 
 * You can use the `gap` property to specify how much space will be
 * added between each item in the stack.
 */
const Stack = (
  props: StackProps
) => {
  const { children, gap } = props;

  return (
    <View>
      <StackProvider gap={gap}>{children}</StackProvider>
    </View>
  );
};


export default Stack;
