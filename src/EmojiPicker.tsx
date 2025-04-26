import EmojiPickerNativeView from "./EmojiPickerView";
import { EmojiPickerViewProps } from "./EmojiPickerModule.types";

const EmojiPicker = ({ children, onEmojiSelected }: EmojiPickerViewProps) => {
  return (
    <EmojiPickerNativeView
      onEmojiSelected={(emoji) => {
        onEmojiSelected(emoji);
      }}
    >
      {children}
    </EmojiPickerNativeView>
  );
};

export default EmojiPicker;
