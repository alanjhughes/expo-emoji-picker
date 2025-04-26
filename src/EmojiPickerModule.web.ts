import { registerWebModule, NativeModule } from 'expo';

import { EmojiPickerModuleEvents } from './EmojiPickerModule.types';

class EmojiPickerModule extends NativeModule<EmojiPickerModuleEvents> {
  PI = Math.PI;
  async setValueAsync(value: string): Promise<void> {
    this.emit('onChange', { value });
  }
  hello() {
    return 'Hello world! 👋';
  }
}

export default registerWebModule(EmojiPickerModule);
