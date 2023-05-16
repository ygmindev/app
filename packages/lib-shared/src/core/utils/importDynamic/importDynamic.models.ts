export type ImportDynamicParamsModel = string;

export type ImportDynamicModel<TType> = Promise<TType extends { default: infer TResult } ? TResult : TType>;
