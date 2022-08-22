import { styled } from "@linaria/react";
import { Box } from "../Box";
import { SwitcherStyledProps } from "./Swticher.types";

export const Switcher = styled(Box)<SwitcherStyledProps>`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ gap = 0 }) => typeof gap === "number" ? `${gap}rem` : gap};

  & > * {
    flex-grow: 1;
    flex-basis: ${({ threshold }) => `calc((${threshold} - 100%) * 999)`};
  }
`;