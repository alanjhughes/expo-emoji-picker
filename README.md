# expo-emoji-picker

Emoji Picker for React Native.

# Installation

```sh
npx expo install expo-emoji-picker
```

For bare React Native projects, you must ensure that you have [installed and configured the `expo` package](https://docs.expo.dev/bare/installing-expo-modules/) before continuing.

## Configuration for iOS 🍏

> This is only required for usage in bare React Native apps.

Run `npx pod-install` after installing the npm package.

## Configuration for Android 🤖

No further steps are needed on Android

## Usage

```ts
import { EmojiPicker } from "expo-emoji-picker";

// ...
const [emoji, setEmoji] = useState("🫡");

<View>
  <EmojiPicker onEmojiSelected={setEmoji}>
    <Text style={styles.buttonText}>Open Emoji Picker</Text>
  </EmojiPicker>
</View>;
```

# Contributing

Contributions are welcome!
