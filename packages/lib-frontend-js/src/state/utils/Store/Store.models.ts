import { type ProviderPropsModel } from '@lib/frontend/core/core.models';
import {
  type NestedActionsModel,
  type NestedDefaultStateModel,
} from '@lib/frontend/state/state.models';
import {
  type _StoreModel,
  type _StoreParamsModel,
} from '@lib/frontend/state/utils/Store/_Store.models';
import { type Context } from 'react';

export type StoreParamsModel<
  TKeys extends Array<string>,
  TType extends Record<TKeys[number], object>,
  TParams extends Record<TKeys[number], object>,
> = _StoreParamsModel<TKeys, TType, TParams>;

export type StoreModel<
  TKeys extends Array<string>,
  TType extends Record<TKeys[number], object>,
  TParams extends Record<TKeys[number], object>,
> = _StoreModel<TKeys, TType, TParams>;

export type StateProviderPropsModel<
  TKeys extends Array<string>,
  TType extends Record<TKeys[number], object>,
  TParams extends Record<TKeys[number], object>,
> = ProviderPropsModel<{
  actionContext: Context<NestedActionsModel<TKeys, TType, TParams> | undefined>;
  defaultStateContext: Context<NestedDefaultStateModel<TKeys, TType> | undefined>;
  persistedStateContext: Context<NestedDefaultStateModel<TKeys, TType> | undefined>;
  store: StoreModel<TKeys, TType, TParams>;
}>;
