import * as React from 'react';

import { EmojiPickerModuleViewProps } from './EmojiPickerModule.types';

export default function EmojiPickerModuleView(props: EmojiPickerModuleViewProps) {
  return (
    <div>
      <iframe
        style={{ flex: 1 }}
        src={props.url}
        onLoad={() => props.onLoad({ nativeEvent: { url: props.url } })}
      />
    </div>
  );
}
