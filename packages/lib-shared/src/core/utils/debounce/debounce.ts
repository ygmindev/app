import type { CallableModel } from '@lib/shared/core/core.models';
import type { DebounceParamsModel } from '@lib/shared/core/utils/debounce/debounce.models';
import { debounce as _debounce } from 'lodash';

export const debounce = <TParams extends Array<unknown> = never, TResult = void>({
  callback,
  duration = 0,
  isLeading = false,
}: DebounceParamsModel<TParams, TResult>): CallableModel<TParams, TResult | undefined> =>
  _debounce(
    callback,
    duration,
    isLeading ? { leading: true, trailing: false } : { leading: false, trailing: true },
  );
