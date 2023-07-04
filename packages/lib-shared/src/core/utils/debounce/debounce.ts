import _debounce from 'lodash/debounce';

import { type ArrayCallableModel } from '#lib-shared/core/core.models';
import {
  type DebounceModel,
  type DebounceParamsModel,
} from '#lib-shared/core/utils/debounce/debounce.models';

export const debounce = <TResult = void, TParams extends Array<unknown> = Array<unknown>>(
  ...[callback, { duration = 0, isLeading = false } = {}]: DebounceParamsModel<TResult, TParams>
): DebounceModel<TResult, TParams> =>
  _debounce(
    callback,
    duration,
    isLeading ? { leading: true, trailing: false } : { leading: false, trailing: true },
  ) as ArrayCallableModel<TResult, TParams>;
