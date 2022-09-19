import React from "react";
import { PolymorphicComponentProps, ElementType } from "../Polymorphic";

export type StackItemProps<Element extends ElementType<any> = "View"> = PolymorphicComponentProps<Element> & {
    children: React.ReactNode;
}

export type StackProps<C extends ElementType<any> = "View"> = PolymorphicComponentProps<C> & {
    gap: number | string;
    children: React.ReactNode;
}