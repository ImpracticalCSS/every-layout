import type {
  ComponentPropsWithoutRef,
  ComponentPropsWithRef,
  ElementType,
} from "react";

export type AnyObject = Record<string, unknown>;

export type AsProp<C extends ElementType> = {
  as?: C;
};

export type PolymorphicRef<C extends ElementType> =
  ComponentPropsWithRef<C>["ref"];

export type RemoveAsProp<E extends ElementType, A, B> = AsProp<E> & Omit<A, keyof B | "as">;

/**
 * Polymorphic Components are React components that can be casted as another component via a prop such as `as`.
 *
 * Example:
 * ```tsx
 * <Polymorphic as="section" />
 * ```
 */
export type PolymorphicComponentProp<
  E extends ElementType,
  Props extends AnyObject = {}
> = Props & RemoveAsProp<E, ComponentPropsWithoutRef<E>, Props>;

export type AddOptionalRef<E extends ElementType, Props extends AnyObject> = Props & {
  ref?: PolymorphicRef<E>;
};

/**
 * Polymorphic component with a ref.
 */
export type PolymorphicComponentPropWithRef<
  E extends ElementType,
  Props extends AnyObject = {}
> = AddOptionalRef<E, PolymorphicComponentProp<E, Props>>;

export type PolymorphicComponentProps<
  E extends ElementType = "div",
  Props extends AnyObject = {}
> = PolymorphicComponentPropWithRef<E, Props>;
