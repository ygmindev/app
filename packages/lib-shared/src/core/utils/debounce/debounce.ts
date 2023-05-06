import type { CallableArgsModel } from '@lib/shared/core/core.models';
import type { DebounceParamsModel } from '@lib/shared/core/utils/debounce/debounce.models';
import _debounce from 'lodash/debounce';

export const debounce = <TParams extends Array<unknown> = never, TResult = void>({
  callback,
  duration = 0,
  isLeading = false,
}: DebounceParamsModel<TParams, TResult>): CallableArgsModel<TResult, TParams> =>
  _debounce(
    callback,
    duration,
    isLeading ? { leading: true, trailing: false } : { leading: false, trailing: true },
  ) as CallableArgsModel<TResult, TParams>;
