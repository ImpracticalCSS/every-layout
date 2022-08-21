import React, { ElementType } from "react";
import { PolymorphicComponentProps } from "../Polymorphic";
import { Property } from "csstype";

export type ClusterStyledProps = {
    space: string;
    horizontalAlignment?:Property.JustifyContent,
    verticalAlignment?:Property.AlignItems
}

export type ConfigurableClusterProps = {
    /**
     * The minimum space between the clustered child elements.
     */
    space?: string | number;
    /**
     * A CSS justify-content value.
     */
    horizontalAlignment?:Property.JustifyContent;
    /**
     * A CSS align-items value
     */
    verticalAlignment?:Property.AlignItems;
};

export type ClusterProps<
  E extends ElementType,
> = PolymorphicComponentProps<E, ConfigurableClusterProps>;
