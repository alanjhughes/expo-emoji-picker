import { requireNativeView } from 'expo';
import * as React from 'react';

import { EmojiPickerModuleViewProps } from './EmojiPickerModule.types';

const NativeView: React.ComponentType<EmojiPickerModuleViewProps> =
  requireNativeView('EmojiPickerModule');

export default function EmojiPickerModuleView(props: EmojiPickerModuleViewProps) {
  return <NativeView {...props} />;
}
