import type { StyleProp, ViewStyle, ViewProps } from "react-native";

type CloseButtonProps = {
  close: () => void;
};

export type EmojiSelectionListener = (event: {
  nativeEvent: SelectionEvent;
}) => void;

export type SelectionEvent = {
  emoji: string;
};

export type EmojiPickerViewProps = ViewProps & {
  /*
   * Callback that will be called when an emoji is selected.
   */
  onEmojiSelected: (emoji: string) => void;
  closeButton?: (props: CloseButtonProps) => React.ReactNode;
  contentContainerStyle?: StyleProp<ViewStyle>;
};

export type EmojiPickerNativeViewProps = ViewProps & {
  onEmojiSelected: EmojiSelectionListener;
};
