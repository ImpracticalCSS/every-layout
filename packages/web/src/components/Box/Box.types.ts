import type { ElementType } from "react";
import type { PolymorphicComponentProps } from "../Polymorphic";
import { Property } from "csstype";

type AnyObject = Record<string, unknown>;

export type BoxStyledProps = {
  paddingVertical?: number | string;
  paddingHorizontal?: number | string;
  marginVertical?: number | string;
  marginHorizontal?: number | string;
  border?: Property.Border;
};

export type BoxProps<
  E extends ElementType = "div",
  P extends AnyObject = AnyObject
> = PolymorphicComponentProps<E, BoxStyledProps & P>;
