import { type DebounceParamsModel } from '@lib/shared/core/utils/debounce/debounce.models';

export type UseDebounceParamsModel<
  TResult = void,
  TParams extends Array<unknown> = Array<unknown>,
> = DebounceParamsModel<TResult, TParams>;

export type UseDebounceModel<TResult = void, TParams extends Array<unknown> = Array<unknown>> = (
  ...params: TParams
) => TResult;
