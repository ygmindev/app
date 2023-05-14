import type {
  _SynchronizeModel,
  _SynchronizeParamsModel,
} from '@lib/shared/core/utils/synchronize/_synchronize.models';

export type SynchronizeParamsModel<TResult = void, TParams = void> = _SynchronizeParamsModel<TResult, TParams>

export type SynchronizeModel<TResult = void, TParams = void> = _SynchronizeModel<TResult, TParams>;
