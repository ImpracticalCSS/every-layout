import React, { ElementType } from "react";
import * as Styled from "./Stack.styled";
import { StackProps } from "./Stack.types";

/**
 * The `Stack` element creates white-space between a flow of vertical elements.
 */
const Stack = <E extends ElementType>({
  children,
  gap,
  recursive = false,
  ...restProps
}: React.PropsWithChildren<StackProps<E>>) => {
  if (recursive) {
    return (
      <Styled.RecursiveStack {...restProps} gap={gap}>
        {children}
      </Styled.RecursiveStack>
    );
  }
  
  return (
    <Styled.Stack {...restProps} gap={gap}>
      {children}
    </Styled.Stack>
  );
};

export default Stack;
