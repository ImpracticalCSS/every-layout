import { styled } from "@linaria/react";
import cssValue from "../../utils/cssValue";
import notEmpty from "../../utils/notEmpty";
import { BoxStyledProps } from "./Box.types";

/**
 * The `Box` component is the primitive from which all layout elements are built.
 * All of the layouts in `every-layout` are about arranging boxes.
 */
export const Box = styled.div<BoxStyledProps>`
  border: ${({ border }) => (notEmpty(border) ? `${border}` : `initial`)};

  padding-left: ${({ paddingHorizontal }) =>
    cssValue(paddingHorizontal, "rem", "initial")};
  padding-right: ${({ paddingHorizontal }) =>
    cssValue(paddingHorizontal, "rem", "initial")};
  padding-top: ${({ paddingVertical }) =>
    cssValue(paddingVertical, "rem", "initial")};
  padding-bottom: ${({ paddingVertical }) =>
    cssValue(paddingVertical, "rem", "initial")};

  margin-left: ${({ marginHorizontal }) =>
    cssValue(marginHorizontal, "rem", "initial")};
  margin-right: ${({ marginHorizontal }) =>
    cssValue(marginHorizontal, "rem", "initial")};
  margin-top: ${({ marginVertical }) =>
    cssValue(marginVertical, "rem", "initial")};
  margin-bottom: ${({ marginVertical }) =>
    cssValue(marginVertical, "rem", "initial")};
`;
