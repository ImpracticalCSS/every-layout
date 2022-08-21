import React, { ElementType } from "react";
import * as Styled from "./Cluster.styled";
import { ClusterProps } from "./Cluster.types";

/**
 * A `Cluster` is used for grouping (clustering) a set of similar elements 
 * together in a grid-like structure. The difference between a `Cluster`
 * and a `Grid` is that a `Cluster` does not need to adhere to rigid 
 * row/column structure in which the horizontal and vertical lines align
 * strictly to the defined `Grid` properties.
 * 
 * Usage:
 * 
 * ```tsx
 * <Cluster space="2rem">
 *   <Element1 />
 *   <Element2 />
 *   <Element3 />
 * </Cluster>
 * ```
 */
const Cluster = <E extends ElementType>({
  children,
  space = 0,
  horizontalAlignment,
  verticalAlignment,
  ...restProps
}: React.PropsWithChildren<ClusterProps<E>>) => {
  const gap = typeof space === "number" ? `${space}rem` : space;

  return (
    <Styled.Cluster
      {...restProps}
      horizontalAlignment={horizontalAlignment}
      verticalAlignment={verticalAlignment}
      space={gap}
    >
      {children}
    </Styled.Cluster>
  );
};

export default Cluster;
