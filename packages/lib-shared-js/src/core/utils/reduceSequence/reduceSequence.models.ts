export type ReduceSequenceParamsModel<TType, TResult> = [
  values: TType,
  reducer: TType extends Array<infer TElement>
    ? (result: TResult, v: TElement, k: never) => Promise<TResult>
    : TType extends Record<infer TKey, infer TValue>
      ? (result: TResult, v: TValue, k: TKey) => Promise<TResult>
      : never,
  initialResult: TResult,
];

export type ReduceSequenceModel<TResult> = TResult;
