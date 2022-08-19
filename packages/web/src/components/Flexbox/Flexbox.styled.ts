import { styled } from "@linaria/react";
import { FlexboxStyledProps } from "./Flexbox.types";

export const Flexbox = styled.div<FlexboxStyledProps>`
  display: flex;
  flex-direction: ${({ flexDirection, horizontal, vertical }) =>
    horizontal ? "row" : vertical ? "column" : flexDirection ?? "row"};
  align-items: ${({ alignItems = "normal" }) => alignItems};
  justify-content: ${({ justifyContent = "normal" }) => justifyContent};
`;
