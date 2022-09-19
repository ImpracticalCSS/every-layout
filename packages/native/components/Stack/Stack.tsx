import React from "react";
import { StackProps } from "./Stack.types";
import StackProvider from "./Stack.Provider";
import StackItem from "./Stack.Item";
import type { ElementType } from "../Polymorphic";
import Polymorphic from "../Polymorphic";

/**
 * The `Stack` element creates white-space between a flow of vertical elements.
 * 
 * You can use the `gap` property to specify how much space will be
 * added between each item in the stack.
 */
const Stack = <Element extends ElementType<any> = "View">(
  props: StackProps<Element>
) => {
  const { children, gap, as = "View", ...restProps } = props;

  return (
    <Polymorphic {...restProps} as={as}>
      <StackProvider gap={gap}>{children}</StackProvider>
    </Polymorphic>
  );
};

Stack.Item = StackItem;

export default Stack;
