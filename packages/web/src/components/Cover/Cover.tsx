import React, { ElementType } from "react";
import * as Styled from "./Cover.styled";
import { CoverProps } from "./Cover.types";

/**
 * The `Cover` element can be used to center an element vertically within the `Cover`.
 * 
 * The Cover has one principal element that should always gravitate towards the center.
 * In addition, it can have one top/header element and/or one bottom/footer element.
 * 
 * Usage:
 * 
 * ```tsx
 * import { Cover } from "@impractical/every-layout";
 * 
 * <Cover minimumHeight="40rem">
 *      <Cover.Header>
 *          <HeaderElement />
 *      </Cover.Header>
 *      <Cover.Center>
 *          <div>This element will always be centered in the cover.</div>
 *      </Cover.Center>
 *      <Cover.Footer>
 *          <FooterElement />
 *      </Cover.Footer>
 * <Cover>
 * ```
 */
const Cover = <E extends ElementType>({ children, space, noPadding, minimumHeight, ...restProps }: React.PropsWithChildren<CoverProps<E>>): JSX.Element => {
    return (
        <Styled.Cover {...restProps} space={space} noPadding={noPadding} minimumHeight={minimumHeight}>
            {children}
        </Styled.Cover>
    );
}

Cover.Header = Styled.CoverHeader;
Cover.Center = Styled.CoverCenter;
Cover.Footer = Styled.CoverFooter;

export default Cover;
