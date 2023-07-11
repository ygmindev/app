export type MapValuesAsyncParamsModel<TType extends object, TResult> = [
  value: TType,
  callback: (v: unknown, k: keyof TType) => Promise<TResult>,
];

export type MapValuesAsyncModel<TType extends object, TResult> = {
  [TKey in keyof TType]: TResult;
};
