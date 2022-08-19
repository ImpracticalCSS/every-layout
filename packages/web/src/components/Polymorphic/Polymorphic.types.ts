import type { ElementType } from "react";

export type AsProp<C extends ElementType> = {
  as?: C;
};

export type PolymorphicRef<C extends React.ElementType> =
  React.ComponentPropsWithRef<C>["ref"];

/**
 * Polymorphic Components are React components that can be casted as another component via a prop such as `as`.
 *
 * Example:
 * ```tsx
 * <Polymorphic as="section" />
 * ```
 */
export type PolymorphicComponentProp<
  C extends ElementType,
  Props = {}
> = Props &
  AsProp<C> &
  Omit<React.ComponentPropsWithoutRef<C>, keyof Props | "as">;

/**
 * Polymorphic component with a ref.
 */
export type PolymorphicComponentPropWithRef<
  C extends React.ElementType,
  Props = {}
> = PolymorphicComponentProp<C, Props> & { ref?: PolymorphicRef<C> };

export type PolymorphicComponentProps<
  E extends ElementType = "div",
  P extends Record<string, unknown> = {}
> = PolymorphicComponentPropWithRef<E, P>;
