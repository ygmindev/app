import { _lazy } from '@lib/frontend/core/utils/lazy/_lazy';
import { type LazyModel, type LazyParamsModel } from '@lib/frontend/core/utils/lazy/lazy.models';

export const lazy = <TType,>(params: LazyParamsModel<TType>): LazyModel<TType> =>
  _lazy<TType>(params);
