import { type _LazyModel, type _LazyParamsModel } from '@lib/frontend/core/utils/lazy/_lazy.models';
import loadable, { type DefaultComponent } from '@loadable/component';

export const _lazy = <TType,>(params: _LazyParamsModel<TType>): _LazyModel<TType> =>
  loadable(params as () => Promise<DefaultComponent<unknown>>) as _LazyModel<TType>;
