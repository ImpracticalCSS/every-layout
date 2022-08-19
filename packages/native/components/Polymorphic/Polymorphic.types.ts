import type {
  ComponentType,
  JSXElementConstructor,
  LegacyRef,
  PropsWithoutRef,
} from "react";
import type {
  ActivityIndicator,
  Button,
  DatePickerIOS,
  DrawerLayoutAndroid,
  FlatList,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Modal,
  Pressable,
  ProgressBarAndroid,
  ProgressViewIOS,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  SectionList,
  Slider,
  Switch,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
  VirtualizedList,
} from "react-native";

export const reactNative = require("react-native") as Awaited<
  typeof import("react-native")
>;

export type IntrinsicElementComponents = {
  ActivityIndicator: ActivityIndicator;
  Button: Button;
  DatePickerIOS: DatePickerIOS;
  DrawerLayoutAndroid: DrawerLayoutAndroid;
  FlatList: FlatList;
  Image: Image;
  ImageBackground: ImageBackground;
  KeyboardAvoidingView: KeyboardAvoidingView;
  Modal: Modal;
  Pressable: typeof Pressable;
  ProgressBarAndroid: ProgressBarAndroid;
  ProgressViewIOS: ProgressViewIOS;
  RefreshControl: RefreshControl;
  SafeAreaView: SafeAreaView;
  ScrollView: ScrollView;
  SectionList: SectionList;
  Slider: Slider;
  Switch: Switch;
  Text: Text;
  TextInput: TextInput;
  TouchableHighlight: TouchableHighlight;
  TouchableOpacity: TouchableOpacity;
  View: View;
  VirtualizedList: VirtualizedList<any>;
};

export const components = [
  "ActivityIndicator",
  "Button",
  "DatePickerIOS",
  "DrawerLayoutAndroid",
  "FlatList",
  "Image",
  "ImageBackground",
  "KeyboardAvoidingView",
  "Modal",
  "Pressable",
  "ProgressBarAndroid",
  "ProgressViewIOS",
  "RefreshControl",
  "SafeAreaView",
  "ScrollView",
  "SectionList",
  "Slider",
  "Switch",
  "Text",
  "TextInput",
  "TouchableHighlight",
  "TouchableOpacity",
  "View",
  "VirtualizedList",
] as const;

export type KnownComponents = typeof components[number];

/** Isolates RN-provided components since they don't expose a helper type for this. */
export type RNComponents = {
  [K in keyof typeof reactNative]: typeof reactNative[K] extends React.JSXElementConstructor<any>
    ? typeof reactNative[K]
    : never;
};

export type KnownRNComponents = {
  [K in KnownComponents]: IntrinsicElementComponents[K];
};

export type RNComponentsKey = {
  [K in KnownComponents]: typeof reactNative[K] extends React.JSXElementConstructor<any>
    ? K
    : never;
};

export type ReactNativeComponents = {
  [E in KnownComponents]: React.ComponentProps<RNComponents[E]>;
};

export type ElementType<P = any> =
  | {
      [K in keyof ReactNativeComponents]: P extends ReactNativeComponents[K]
        ? K
        : never;
    }[keyof ReactNativeComponents]
  | ComponentType<P>;

/** Extracts props of a component into a Record/Object */
export type ComponentProps<
  T extends KnownComponents | JSXElementConstructor<any>
> = T extends JSXElementConstructor<infer P>
  ? P
  : T extends KnownComponents
  ? ReactNativeComponents[T]
  : {};

/** Extracts props of a component into a Record/Object and removes the `ref` property. */
export type ComponentPropsWithoutRef<T extends ElementType> = PropsWithoutRef<
  ComponentProps<T>
>;

export type AsProp<C extends ElementType> = {
  as?: C;
};

export type PolymorphicRef<C extends ElementType> = LegacyRef<C>;

export type PolymorphicComponentPropsWithoutAs<
  C extends ElementType,
  Props = {}
> = Props & AsProp<C> & Omit<ComponentPropsWithoutRef<C>, keyof Props | "as">;

/**
 * Polymorphic Components are React components that can be casted as another component via a prop such as `as`.
 *
 * Example:
 * ```tsx
 * <Polymorphic as="section" />
 * ```
 */
export type PolymorphicComponentPropWithRef<
  C extends ElementType,
  Props = {}
> = PolymorphicComponentPropsWithoutAs<C, Props> & { ref?: PolymorphicRef<C> };

/**
 * Polymorphic Components are React components that can be casted as another component via a prop such as `as`.
 *
 * Example:
 * ```tsx
 * <Polymorphic as="section" />
 * ```
 */
export type PolymorphicComponentProps<
  C extends ElementType = "View",
  P extends Record<string, unknown> = {}
> = PolymorphicComponentPropWithRef<C, P>;
