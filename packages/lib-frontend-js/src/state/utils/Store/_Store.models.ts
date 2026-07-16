import { type CookiesModel } from '@lib/frontend/http/utils/cookies/cookies.models';
import {
  type NestedDefaultStateModel,
  type NestedReducerModel,
} from '@lib/frontend/state/state.models';
import {
  type StoreModel,
  type StateProviderPropsModel,
} from '@lib/frontend/state/utils/Store/Store.models';
import { type StringKeyModel } from '@lib/shared/core/core.models';
import { type MERGE_STRATEGY } from '@lib/shared/core/utils/merge/merge.constants';
import { type CaseReducerActions, type PayloadAction } from '@reduxjs/toolkit';
import { type ComponentType } from 'react';

export type _StoreParamsModel<
  TType extends Record<string, unknown>,
  TReducers extends Record<StringKeyModel<TType>, unknown>,
> = {
  cookies?: CookiesModel;
  initialState?: NestedDefaultStateModel<TType>;
  reducers?: NestedReducerModel<TType, TReducers>;
};

export type _StoreModel<
  TType extends Record<string, unknown>,
  TReducers extends Record<StringKeyModel<TType>, unknown>,
> = {
  Provider: ComponentType<StateProviderPropsModel<TType, TReducers>>;

  getState(): TType;

  getStatePersisted(): Promise<NestedDefaultStateModel<TType>>;
};

export type _StoreActionsModel<
  TType extends Record<string, unknown>,
  TReducers extends Record<StringKeyModel<TType>, unknown>,
> = {
  [TKey in StringKeyModel<TType>]: CaseReducerActions<
    {
      add(state: TType[TKey], action: PayloadAction<{ key: string; value: unknown }>): TType[TKey];
      get(state: TType[TKey], action: PayloadAction<{ key: string }>): TType[TKey];
      merge(
        state: TType[TKey],
        action: PayloadAction<{ key: string; strategy?: MERGE_STRATEGY; value: unknown }>,
      ): TType[TKey];
      remove(
        state: TType[TKey],
        action: PayloadAction<{ key: string; value: unknown }>,
      ): TType[TKey];
      set(state: TType[TKey], action: PayloadAction<{ key: string; value: unknown }>): TType[TKey];
      unset(state: TType[TKey], action: PayloadAction<{ key: string }>): TType[TKey];
    },
    TKey
  >;
} & {
  [TKey in StringKeyModel<TType>]: CaseReducerActions<
    {
      [TReducerKey in StringKeyModel<TReducers[TKey]>]: (
        state: TType[TKey] | undefined,
        action: PayloadAction<TReducers[TKey][TReducerKey]>,
      ) => TType[TKey];
    },
    TKey
  >;
};

export type _StoreContextProviderPropsModel<
  TType extends Record<string, unknown>,
  TReducers extends Record<StringKeyModel<TType>, unknown>,
> = StateProviderPropsModel<TType, TReducers> & {
  actions: _StoreActionsModel<TType, TReducers>;
  defaultState: NestedDefaultStateModel<TType>;
  persistedState?: NestedDefaultStateModel<TType>;
  store: StoreModel<TType, TReducers>;
};
