import { type _LazyModel, type _LazyParamsModel } from '@lib/frontend/core/utils/lazy/_lazy.models';

export type LazyParamsModel<TType extends unknown> = _LazyParamsModel<TType>;

export type LazyModel<TType extends unknown> = _LazyModel<TType>;
