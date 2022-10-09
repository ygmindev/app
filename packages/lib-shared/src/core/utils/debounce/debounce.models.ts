import type { CallableModel } from '@lib/shared/core/core.models';

export interface DebounceParamsModel<TParams extends Array<unknown> = never, TResult = void> {
  callback: CallableModel<TParams, TResult>;
  duration?: number;
  isLeading?: boolean;
}
