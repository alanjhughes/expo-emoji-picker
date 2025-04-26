// Reexport the native module. On web, it will be resolved to EmojiPickerModule.web.ts
// and on native platforms to EmojiPickerModule.ts
export { default } from './EmojiPickerModule';
export { default as EmojiPickerModuleView } from './EmojiPickerModuleView';
export * from  './EmojiPickerModule.types';
