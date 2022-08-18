import type {
  ComponentClass,
  JSXElementConstructor,
  LegacyRef,
  PropsWithoutRef,
} from "react";
import type {
  ActivityIndicator,
  ActivityIndicatorProps,
  Button,
  ButtonProps,
  DatePickerIOS,
  DatePickerIOSProps,
  DrawerLayoutAndroid,
  DrawerLayoutAndroidProps,
  FlatList,
  FlatListProps,
  Image,
  ImageBackground,
  ImageBackgroundProps,
  ImageProps,
  KeyboardAvoidingView,
  KeyboardAvoidingViewProps,
  Modal,
  ModalProps,
  Pressable,
  PressableProps,
  ProgressBarAndroid,
  ProgressBarAndroidProps,
  ProgressViewIOS,
  ProgressViewIOSProps,
  RefreshControl,
  RefreshControlProps,
  SafeAreaView,
  ScrollView,
  ScrollViewProps,
  SectionList,
  SectionListProps,
  Slider,
  SliderProps,
  Switch,
  SwitchProps,
  Text,
  TextInput,
  TextInputProps,
  TextProps,
  TouchableHighlight,
  TouchableHighlightProps,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewProps,
  VirtualizedList,
  VirtualizedListProps,
} from "react-native";

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

export type ReactNativeElements = {
  ActivityIndicator: ActivityIndicatorProps;
  Button: ButtonProps;
  DatePickerIOS: DatePickerIOSProps;
  DrawerLayoutAndroid: DrawerLayoutAndroidProps;
  FlatList: FlatListProps<any>;
  Image: ImageProps;
  ImageBackground: ImageBackgroundProps;
  KeyboardAvoidingView: KeyboardAvoidingViewProps;
  Modal: ModalProps;
  Pressable: PressableProps;
  ProgressBarAndroid: ProgressBarAndroidProps;
  ProgressViewIOS: ProgressViewIOSProps;
  RefreshControl: RefreshControlProps;
  SafeAreaView: ViewProps;
  ScrollView: ScrollViewProps;
  SectionList: SectionListProps<any>;
  Slider: SliderProps;
  Switch: SwitchProps;
  Text: TextProps;
  TextInput: TextInputProps;
  TouchableHighlight: TouchableHighlightProps;
  TouchableOpacity: TouchableOpacityProps;
  View: ViewProps;
  VirtualizedList: VirtualizedListProps<any>;
};

export type KnownComponents = typeof components[number];

export type ElementType<P = any> =
  | {
      [K in keyof ReactNativeElements]: P extends ReactNativeElements[K]
        ? K
        : never;
    }[keyof ReactNativeElements]
  | ComponentClass<P>;

type ComponentProps<
  T extends keyof ReactNativeElements | JSXElementConstructor<any>
> = T extends JSXElementConstructor<infer P>
  ? P
  : T extends keyof ReactNativeElements
  ? ReactNativeElements[T]
  : {};

type ComponentPropsWithoutRef<T extends ElementType> = PropsWithoutRef<
  ComponentProps<T>
>;

export type AsProp<C extends ElementType> = {
  as?: C;
};

export type PolymorphicRef<C extends ElementType> = LegacyRef<C>;


export type PolymorphicComponentProp<
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
> = PolymorphicComponentProp<C, Props> & { ref?: PolymorphicRef<C> };

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
