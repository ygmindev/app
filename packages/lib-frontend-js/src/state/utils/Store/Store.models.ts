import { type ProviderPropsModel } from '@lib/frontend/core/core.models';
import {
  type NestedActionsModel,
  type NestedDefaultStateModel,
} from '@lib/frontend/state/state.models';
import {
  type _StoreModel,
  type _StoreParamsModel,
} from '@lib/frontend/state/utils/Store/_Store.models';
import { type StringKeyModel } from '@lib/shared/core/core.models';
import { type Context } from 'react';

export type StoreParamsModel<
  TType extends Record<string, unknown>,
  TReducers extends Record<StringKeyModel<TType>, unknown>,
> = _StoreParamsModel<TType, TReducers>;

export type StoreModel<
  TType extends Record<string, unknown>,
  TReducers extends Record<StringKeyModel<TType>, unknown>,
> = _StoreModel<TType, TReducers>;

export type StateProviderPropsModel<
  TType extends Record<string, unknown>,
  TReducers extends Record<StringKeyModel<TType>, unknown>,
> = ProviderPropsModel<{
  actionContext: Context<NestedActionsModel<TType, TReducers> | undefined>;
  defaultStateContext: Context<NestedDefaultStateModel<TType> | undefined>;
  persistedStateContext: Context<NestedDefaultStateModel<TType> | undefined>;
}>;
