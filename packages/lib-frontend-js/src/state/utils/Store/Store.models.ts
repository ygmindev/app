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

export type StoreParamsModel<TType extends Record<string, unknown>> = _StoreParamsModel<TType>;

export type StoreModel<TType extends Record<string, unknown>> = _StoreModel<TType>;

export type StateProviderPropsModel<TType extends Record<string, unknown>> = ProviderPropsModel<{
  actionContext: Context<NestedActionsModel<TType> | undefined>;
  defaultStateContext: Context<NestedDefaultStateModel<TType> | undefined>;
  persistedStateContext: Context<NestedDefaultStateModel<TType> | undefined>;
  store: StoreModel<TType>;
}>;
