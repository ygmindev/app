export type _UseTranslationParamsModel = Array<string>;

export type _UseTranslationModel = {
  currentLanguage: string;
  currentLanguageSet(value?: string): Promise<void>;
  isInitialized: boolean;
  t<TParams = undefined>(key: string, params?: TParams): string;
};
