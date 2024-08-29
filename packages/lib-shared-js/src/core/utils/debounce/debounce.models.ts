export type DebounceParamsModel<TResult = void, TParams extends Array<unknown> = Array<unknown>> = [
  callback: (...params: TParams) => TResult,
  options?: {
    duration?: number;
    isLeading?: boolean;
  },
];

export type DebounceModel<TResult = void, TParams extends Array<unknown> = never> = (
  ...params: TParams
) => TResult;
