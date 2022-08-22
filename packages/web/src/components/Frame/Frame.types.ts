import { ElementType } from "react";
import { PolymorphicComponentProps } from "../Polymorphic";

export type FrameStyledProps = {
    /**
     * The element's aspect ratio. If the ratio is a string, the format should be `numerator:denominator` i.e. `16:9`.
     */
    ratio: number | string;
};

export type FrameProps<E extends ElementType = "div"> =
  PolymorphicComponentProps<E, FrameStyledProps>;