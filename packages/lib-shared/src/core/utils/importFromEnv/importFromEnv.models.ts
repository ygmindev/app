export type ImportFromEnvParamsModel = [name: string, extensions?: Array<string>];

export type ImportFromEnvModel<TType, TKey = undefined> = Promise<
  TKey extends string ? Record<TKey, TType> : TType
>;
