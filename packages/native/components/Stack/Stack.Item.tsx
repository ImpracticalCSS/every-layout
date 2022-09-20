import React from "react";
import { useStack } from "./Stack.Provider";
import type { StackItemProps } from "./Stack.types";
import * as Styled from "./Stack.styled";

const StackItem = (
  props: StackItemProps
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
