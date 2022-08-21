import { styled } from "@linaria/react";
import { SwitcherStyledProps } from "./Swticher.types";

export const Switcher = styled.div<SwitcherStyledProps>`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ gap = 0 }) => typeof gap === "number" ? `${gap}rem` : gap};

  & > * {
    flex-grow: 1;
    flex-basis: ${({ threshold }) => `calc((${threshold} - 100%) * 999)`};
  }
`;