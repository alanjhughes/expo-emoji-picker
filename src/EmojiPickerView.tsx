import { requireNativeView } from "expo";
import * as React from "react";

import {
  EmojiPickerNativeViewProps,
  EmojiPickerViewProps,
} from "./EmojiPickerModule.types";

const NativeView: React.ComponentType<EmojiPickerNativeViewProps> =
  requireNativeView("EmojiPickerModule");

export default function EmojiPicker(props: EmojiPickerViewProps) {
  return (
    <NativeView
      {...props}
      onEmojiSelected={({ nativeEvent }) => {
        props.onEmojiSelected(nativeEvent.emoji);
      }}
    />
  );
}
