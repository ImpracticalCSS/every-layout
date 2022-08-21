import type { ElementType } from "react";
import React from "react";
import type { PolymorphicComponentProps } from "../Polymorphic";

export type CoverStyledProps = {
    /** The minimum space between and around the child elements (Default: 1rem) */
    space?: string | number;
    /** Removes padding from parent element. (Default: false) */
    noPadding?: boolean;
    /** The minimum height `(block-size)` of the parent element, before it grows to accommodate its content */
    minimumHeight: string | number;
};

export type CoverProps<
  E extends ElementType,
> = PolymorphicComponentProps<E, CoverStyledProps>;

export interface ICover extends React.FC<CoverProps<any>> {}