import React from "react";
import { View } from "react-native";
import type {
  ElementType,
  PolymorphicComponentProps,
  KnownComponents,
  KnownRNComponents,
} from "./Polymorphic.types";
import { reactNative } from "./Polymorphic.types";
import { components } from "./Polymorphic.types";

const elements = {} as KnownRNComponents;

const Polymorphic = <
  E extends ElementType = ElementType,
  P extends Record<string, unknown> = {}
>({
  as,
  ...restProps
}: PolymorphicComponentProps<E, P>) => {
  const Component = typeof as === "string" ? elements[as as KnownComponents] : elements.View;

  if (Component) {
    // @ts-ignore (unsure how to fix this will come back)
    return <Component {...restProps} />;
  }

  return null;
};

/* Define a getter for each alias which simply gets the reactNative component
 * and passes it to styled */
components.forEach((alias) =>
  Object.defineProperty(elements, alias, {
    enumerable: true,
    configurable: false,
    get() {
      if (alias in reactNative && reactNative[alias]) {
        const Component = reactNative[alias];
        return Component;
      }

      throw new Error(
        `${alias} is not available in the currently-installed version of react-native`
      );
    },
  })
);

export default Polymorphic;
