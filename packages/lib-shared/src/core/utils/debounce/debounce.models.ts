import { type CallableArgsModel } from '#lib-shared/core/core.models';

export type DebounceParamsModel<TParams extends Array<unknown> = never, TResult = void> = [
  callback: CallableArgsModel<TResult, TParams>,
  options?: {
    duration?: number;
    isLeading?: boolean;
  },
];
