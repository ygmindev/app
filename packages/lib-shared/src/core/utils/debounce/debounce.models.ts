import type { CallableArgsModel } from '@lib/shared/core/core.models';

export interface DebounceParamsModel<TParams extends Array<unknown> = never, TResult = void> {
  callback: CallableArgsModel<TResult, TParams>;
  duration?: number;
  isLeading?: boolean;
}
