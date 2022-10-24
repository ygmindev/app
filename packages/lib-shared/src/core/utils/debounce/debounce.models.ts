import type { CallableModel } from '@lib/shared/core/core.models';

export interface DebounceParamsModel<TParams extends Array<unknown> = never, TResult = void> {
  callback: CallableModel<TResult, TParams>;
  duration?: number;
  isLeading?: boolean;
}
