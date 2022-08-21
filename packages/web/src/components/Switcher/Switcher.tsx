import React, { ElementType } from "react";
import * as Styled from "./Switcher.styled";
import { SwitcherProps } from "./Swticher.types";

/**
 * The `Switcher` component creates a horizontal layout that "breaks" to a vertical layout
 * whenever the width of it's container reaches a minimum threshold. This allows you to build
 * responsive layouts without specifying document media queries but rather container based
 * queries.
 */
const Switcher = <E extends ElementType = "div">({ children, as, ref, threshold, gap = 0, ...rest }: React.PropsWithChildren<SwitcherProps<E>>) => {
    return (
        <Styled.Switcher as={as} threshold={threshold} gap={gap} {...rest}>
            {children}
        </Styled.Switcher>
    );
}

export default Switcher;
