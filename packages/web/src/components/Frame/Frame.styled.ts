import { styled } from "@linaria/react";
import { FrameStyledProps } from "./Frame.types";

export const Frame = styled.div<FrameStyledProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  aspect-ratio: ${({ ratio}) => ratio};
`;

export const FrameImage = styled.img`
  inline-size: 100%;
  block-size: 100%;
  object-fit: cover;
`;

export const FrameVideo = styled.video`
  inline-size: 100%;
  block-size: 100%;
  object-fit: cover;
`;
