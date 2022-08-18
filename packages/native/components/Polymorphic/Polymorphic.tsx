import React from "react";
import type {
  ElementType,
  PolymorphicComponentProps,
  KnownComponents,
} from "./Polymorphic.types";
import { components } from "./Polymorphic.types";

const reactNative = require("react-native") as Awaited<
  typeof import("react-native")
>;

/** Isolates RN-provided components since they don't expose a helper type for this. */
type RNComponents = {
  [K in keyof typeof reactNative]: typeof reactNative[K] extends React.JSXElementConstructor<any>
    ? typeof reactNative[K]
    : never;
};

type ReactNativeComponents = {
  [E in KnownComponents]: React.ComponentProps<RNComponents[E]>;
};

const elements = {} as RNComponents;

/**
 * 
 * @param param0 
 * as ReactNativeComponents & {
    getComponent: () => React.ComponentProps<any>
};
 * @returns 
 */

const Polymorphic = <
  E extends ElementType = ElementType,
  P extends Record<string, unknown> = {}
>({
  as,
  ...restProps
}: PolymorphicComponentProps<E, P>): JSX.Element | null => {
  const Component =
    typeof as === "string" && as in elements
      ? elements[as as any as keyof ReactNativeComponents]
      : as ?? elements.View;

  if (Component) {
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
