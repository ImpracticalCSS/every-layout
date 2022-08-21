import { styled } from "@linaria/react";
import { ClusterStyledProps } from "./Cluster.types";

export const Cluster = styled.ul<ClusterStyledProps>`
  display: flex;
  flex-wrap: wrap;
  justify-content: ${({ horizontalAlignment = "flex-start" }) => horizontalAlignment};
  align-items: ${({ verticalAlignment = "center" }) => verticalAlignment};
  gap: ${({ space }) => space};
  margin: 0px;
  padding: 0px;
`;
