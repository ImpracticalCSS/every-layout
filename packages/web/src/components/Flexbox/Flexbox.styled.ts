import { styled } from "@linaria/react";
import { FlexboxStyledProps } from "./Flexbox.types";

export const Flexbox = styled.div<FlexboxStyledProps>`
  display: flex;
  flex-direction: ${({ flexDirection, horizontal, vertical }) =>
    horizontal ? "row" : vertical ? "column" : flexDirection ?? "row"};
  flex: ${({ flex }) => flex ?? ""};
  align-items: ${({ alignItems }) => alignItems ?? ""};
  justify-content: ${({ justifyContent }) => justifyContent ?? ""};
`;
