export type ImportFromEnvParamsModel = string;

// export type ImportFromEnvModel<TType> = ImportDynamicModel<TType>;
// export type ImportFromEnvModel<TType> = Promise<TType extends { default: infer TResult } ? TResult : TType>;
export type ImportFromEnvModel<TType> = Promise<TType>;
