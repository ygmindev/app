export type MapValuesAsyncParamsModel<TType extends object, TResult> = {
  callback: (v: unknown, k: keyof TType) => Promise<TResult>;
  value: TType;
};

export type MapValuesAsyncModel<TType extends object, TResult> = Promise<{
  [TKey in keyof TType]: TResult;
}>;
