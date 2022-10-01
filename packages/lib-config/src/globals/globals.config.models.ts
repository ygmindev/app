export interface GlobalsConfigModels extends Record<string, unknown> {
  __DEV__: boolean;
  __IS_ANDROID__: boolean;
  __IS_IOS__: boolean;
  __IS_NATIVE__: boolean;
  __IS_SSR__: boolean;
  __IS_WEB__: boolean;
  __NAME__?: string;
}
