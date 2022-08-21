import { styled } from "@linaria/react";
import { CoverStyledProps } from "./Cover.types";

export const CoverCenter = styled.div`
  && {
    margin-block: auto;
  }
`;

export const Cover = styled.div<CoverStyledProps>`
  display: flex;
  flex-direction: column;
  padding: ${({ space = "1rem", noPadding = false }) =>
    noPadding ? "0px" : typeof space === "number" ? `${space}rem` : space};
  min-block-size: ${({ minimumHeight }) =>
    typeof minimumHeight === "number" ? `${minimumHeight}rem` : minimumHeight};

  & > * {
    margin-block: ${({ space = "1rem" }) =>
      typeof space === "number" ? `${space}rem` : space};
  }

  & > :first-child:not(${CoverCenter}) {
    margin-block-start: 0;
  }

  & > :last-child:not(${CoverCenter}) {
    margin-block-end: 0;
  }
`;
