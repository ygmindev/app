import { type ArrayCallableModel } from '#lib-shared/core/core.models';

export type DebounceParamsModel<TResult = void, TParams extends Array<unknown> = Array<unknown>> = [
  callback: ArrayCallableModel<TResult, TParams>,
  options?: {
    duration?: number;
    isLeading?: boolean;
  },
];

export type DebounceModel<
  TResult = void,
  TParams extends Array<unknown> = never,
> = ArrayCallableModel<TResult, TParams>;
