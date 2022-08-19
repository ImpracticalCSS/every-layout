import React, { ElementType } from "react";
import { PolymorphicComponentProps } from "./Polymorphic.types";

const Polymorphic = <
  E extends ElementType<any> = "div",
  P extends Record<string, unknown> = {}
>({
  as,
  ...props
}: PolymorphicComponentProps<E, P>) => {
  const Component = as || "div";
    
  return <Component {...props} />;
};

export default Polymorphic;
