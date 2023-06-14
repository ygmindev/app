import type { Context } from 'react';

import type { ProviderPropsModel } from '#lib-frontend/core/core.models';
import type { NestedActionsModel } from '#lib-frontend/state/state.models';
import type { _StoreModel, _StoreParamsModel } from '#lib-frontend/state/utils/Store/_Store.models';

export interface StoreParamsModel<
  TKeys extends Array<string>,
  TType extends Record<TKeys[number], object>,
  TParams extends Record<TKeys[number], object>,
> extends _StoreParamsModel<TKeys, TType, TParams> {}

export interface StoreModel<
  TKeys extends Array<string>,
  TType extends Record<TKeys[number], object>,
  TParams extends Record<TKeys[number], object>,
> extends _StoreModel<TKeys, TType, TParams> {}

export interface StateProviderPropsModel<
  TKeys extends Array<string>,
  TType extends Record<TKeys[number], object>,
  TParams extends Record<TKeys[number], object>,
> extends ProviderPropsModel<{
    actionContext: Context<NestedActionsModel<TKeys, TParams> | undefined>;
    store: StoreModel<TKeys, TType, TParams>;
  }> {}
