import ExpoModulesCore

public class EmojiPickerModule: Module {
  public func definition() -> ModuleDefinition {
    Name("EmojiPickerModule")

    View(EmojiPickerView.self) {
      Events("onEmojiSelected")
    }
  }
}
