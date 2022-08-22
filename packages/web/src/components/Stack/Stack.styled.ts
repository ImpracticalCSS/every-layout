import { styled } from "@linaria/react";
import { Box } from "../Box";
import { StackStyledProps } from "./Stack.types";

export const Stack = styled(Box)<StackStyledProps>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  & > * + * {
    margin-block-start: ${({ gap = 0 }) =>
      typeof gap === "number" ? `${gap}rem` : gap};
  }
`;

export const RecursiveStack = styled(Box)<StackStyledProps>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  & * + * {
    margin-block-start: ${({ gap = 0 }) =>
      typeof gap === "number" ? `${gap}rem` : gap};
  }
`;
