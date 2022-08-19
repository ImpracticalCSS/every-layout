import React, { ElementType } from "react";
import { FlexboxProps } from "./Flexbox.types";
import * as Styled from "./Flexbox.styled";

const Flexbox = <E extends ElementType = "div">(
  props: FlexboxProps<E>,
  ref: React.ComponentPropsWithRef<E>["ref"]
): JSX.Element => {
  const {
    as,
    children,
    className,
    flex = "0 1 auto",
    alignItems = "normal",
    justifyContent = "normal",
    style: passthroughStyle,
    gap = 0,
    horizontal,
    vertical,
    flexDirection,
    ...restProps
  } = props;

  return (
    <Styled.Flexbox
      {...restProps}
      ref={ref}
      flex={flex}
      flexDirection={flexDirection}
      horizontal={horizontal}
      vertical={vertical}
      gap={gap}
      alignItems={alignItems}
      justifyContent={justifyContent}
      style={passthroughStyle}
    >
      {children}
    </Styled.Flexbox>
  );
};

const FlexboxWithRef = React.forwardRef(Flexbox) as <
  E extends ElementType = "div"
>(
  props: FlexboxProps<E>
) => JSX.Element;

export default FlexboxWithRef;
