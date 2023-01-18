export type _UseTranslationParamsModel = Array<string>;

export interface _UseTranslationModel {
  currentLanguage: string;
  isInitialized: boolean;
  t<TParams = undefined>(key: string, params?: TParams): string;
}
