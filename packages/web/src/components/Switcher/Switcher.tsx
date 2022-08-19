import React from "react";
import * as Styled from "./Switcher.styled";
import { SwitcherProps } from "./Swticher.types";

const Switcher = ({ children }: React.PropsWithChildren<SwitcherProps>) => {
    return (
        <Styled.Switcher>
            {children}
        </Styled.Switcher>
    );
}

export default Switcher;
