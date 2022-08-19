import type { ElementType } from "react";
import type { PolymorphicComponentProps } from "../Polymorphic";

export type FlexboxStyledProps = {
  flexDirection?: Extract<
    React.CSSProperties["flexDirection"],
    "row" | "row-reverse" | "column" | "column-reverse"
  >;
  alignItems?:
    | "stretch"
    | "center"
    | "flex-start"
    | "flex-end"
    | "baseline"
    | "normal";
  justifyContent?:
    | "stretch"
    | "center"
    | "flex-start"
    | "flex-end"
    | "baseline"
    | "normal"
    | "space-between"
    | "space-around"
    | "space-evenly";
  flex?: number | string;
  horizontal?: boolean;
  vertical?: boolean;
  gap?: number | string;
};

export type FlexboxProps<E extends ElementType = "div"> =
  PolymorphicComponentProps<E, FlexboxStyledProps>;
