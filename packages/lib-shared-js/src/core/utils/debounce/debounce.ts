import {
  type DebounceModel,
  type DebounceParamsModel,
} from '@lib/shared/core/utils/debounce/debounce.models';
import debounceF from 'lodash/debounce';

export const debounce = <TResult = void, TParams extends Array<unknown> = Array<unknown>>(
  ...[callback, { duration = 0, isLeading = false } = {}]: DebounceParamsModel<TResult, TParams>
): DebounceModel<TResult, TParams> =>
  debounceF(
    callback,
    duration,
    isLeading ? { leading: true, trailing: false } : { leading: false, trailing: true },
  ) as unknown as DebounceModel<TResult, TParams>;
