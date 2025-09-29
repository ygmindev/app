import { type CookiesModel } from '@lib/frontend/http/utils/cookies/cookies.models';
import {
  type NestedDefaultStateModel,
  type NestedInitialStateModel,
  type NestedReducerModel,
} from '@lib/frontend/state/state.models';
import { type StateProviderPropsModel } from '@lib/frontend/state/utils/Store/Store.models';
import { type StringKeyModel } from '@lib/shared/core/core.models';
import { type CaseReducerActions, type PayloadAction } from '@reduxjs/toolkit';
import { type ComponentType } from 'react';

export type _StoreParamsModel<TType extends Record<string, unknown>> = {
  cookies?: CookiesModel;
  initialState?: NestedInitialStateModel<TType>;
  reducers?: NestedReducerModel<TType>;
};

export type _StoreModel<TType extends Record<string, unknown>> = {
  Provider: ComponentType<StateProviderPropsModel<TType>>;

  getState(): TType;

  getStatePersisted(): Promise<TType>;
};

export type _StoreActionsModel<TType extends Record<string, unknown>> = {
  [TKey in StringKeyModel<TType>]: CaseReducerActions<
    {
      add(state: TType, action: PayloadAction<{ key: string; value: unknown }>): TType;
      get(state: TType, action: PayloadAction<{ key: string }>): TType;
      remove(state: TType, action: PayloadAction<{ key: string; value: unknown }>): TType;
      set(state: TType, action: PayloadAction<{ key: string; value: unknown }>): TType;
      unset(state: TType, action: PayloadAction<{ key: string }>): TType;
      update(
        state: TType,
        action: PayloadAction<{ filter: unknown; key: string; value: unknown }>,
      ): TType;
    },
    TKey
  >;
};

export type _StoreContextProviderPropsModel<TType extends Record<string, unknown>> =
  StateProviderPropsModel<TType> & {
    actions: _StoreActionsModel<TType>;
    defaultState: NestedDefaultStateModel<TType>;
    persistedState?: NestedDefaultStateModel<TType>;
  };
