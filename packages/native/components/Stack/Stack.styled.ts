import styled from "styled-components/native";

export const StackItem = styled.View<{ gap: number | string }>`
    margin-bottom: ${({ gap }) => gap};
`;
