import React from "react";
import { useStack } from "./Stack.Provider";
import { StackItemProps } from "./Stack.types";
import * as Styled from "./Stack.styled";
import { ElementType } from "../Polymorphic";

const StackItem = <Element extends ElementType<any> = "View">(
  props: StackItemProps<Element>
) => {
  const { children, ...restProps } = props;

  const gap = useStack();

  return (
    <Styled.StackItem {...restProps} gap={gap}>
      {children}
    </Styled.StackItem>
  );
};

export default StackItem;
