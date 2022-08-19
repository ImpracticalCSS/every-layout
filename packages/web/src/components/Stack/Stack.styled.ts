import { styled } from "@linaria/react";
import { StackStyledProps } from "./Stack.types";

export const Stack = styled.div<StackStyledProps>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  
  & > * + * {
    margin-block-start: ${({ gap = 0 }) =>
      typeof gap === "number" ? `${gap}rem` : gap};
  }
`;

export const RecursiveStack = styled.div<StackStyledProps>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  & * + * {
    margin-block-start: ${({ gap = 0 }) =>
      typeof gap === "number" ? `${gap}rem` : gap};
  }
`;
