import React from "react";

export interface StackItemProps {
    children: React.ReactNode;
}

export interface StackProps {
    gap: number | string;
    children: React.ReactNode;
}