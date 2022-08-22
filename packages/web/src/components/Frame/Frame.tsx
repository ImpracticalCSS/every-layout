import React, { ElementType } from "react";
import * as Styled from "./Frame.styled";
import { FrameProps } from "./Frame.types";

function getAspectRatio(ratio: number | string) {
    if (typeof ratio === "number") {
        return ratio;
    }

    const [numerator, denominator] = ratio.split(":");

    return Number(numerator) / Number(denominator);
}

/**
 * The `Frame` can be used to ensure that an image or video strictly respects an
 * aspect ratio to prevent stretching or squishing and ruining the quality of the
 * media. 
 * 
 * Sometimes we want to dictate the aspect ratio of some media rather than
 * inheriting it from the images' own dimensions.
 * 
 * The `Frame` acts as a "window" for the content inside of it. The content will always
 * respect the aspect ratio which means sometimes the horizontal edges of the content may
 * flow outside of the `Frame`.
 * 
 * Usage:
 * 
 * ```tsx
 * <Frame ratio="16:9">
 *   <Frame.Image src="https://image.com/image.jpg" />
 * </Frame>
 * <Frame ratio="16:9">
 *   <Frame.Video src="https://image.com/image.jpg" />
 * </Frame>
 * ```
 */
const Frame = <E extends ElementType>({
  children,
  ratio,
  ...restProps
}: React.PropsWithChildren<FrameProps<E>>) => {
  return (
    <Styled.Frame
      {...restProps}
      ratio={getAspectRatio(ratio)}
    >
      {children}
    </Styled.Frame>
  );
};

Frame.Image = Styled.FrameImage;
Frame.Video = Styled.FrameVideo;

export default Frame;
