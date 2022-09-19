import React, { useContext } from "react";
import { StackProps } from "./Stack.types";

const StackContext =
  React.createContext<string | number | undefined>(undefined);

const StackProvider = ({
  gap,
  children,
}: React.PropsWithChildren<StackProps>) => {
  return <StackContext.Provider value={gap}>{children}</StackContext.Provider>;
};

export function useStack() {
  const gap = useContext(StackContext);

  if (gap === undefined) {
    throw new Error("`useStack` must be used within a `<Stack />");
  }

  return gap;
}

export default StackProvider;
