import type { ElementType } from "react";
import { BoxProps } from "../Box";

export type SwitcherStyledProps = {
  /** The "breakpoint" */
  threshold: string | number;
  /** The gutter between the children of the `Switcher` */
  gap?: number | string;
};

export type SwitcherProps<E extends ElementType = "div"> = BoxProps<
  E,
  SwitcherStyledProps
>;
