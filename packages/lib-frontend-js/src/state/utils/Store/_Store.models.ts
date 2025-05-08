import { type CookiesModel } from '@lib/frontend/http/utils/cookies/cookies.models';
import {
  type NestedDefaultStateModel,
  type NestedInitialStateModel,
  type NestedReducerModel,
} from '@lib/frontend/state/state.models';
import { type StateProviderPropsModel } from '@lib/frontend/state/utils/Store/Store.models';
import { type CaseReducerActions, type SliceCaseReducers } from '@reduxjs/toolkit';
import { type ComponentType } from 'react';

export type _StoreParamsModel<
  TKeys extends Array<string>,
  TType extends Record<TKeys[number], object>,
  TParams extends Record<TKeys[number], object>,
> = {
  cookies?: CookiesModel;
  initialState?: NestedInitialStateModel<TKeys, TType>;
  reducers?: NestedReducerModel<TKeys, TType, TParams>;
};

export type _StoreModel<
  TKeys extends Array<string>,
  TType extends Record<TKeys[number], object>,
  TParams extends Record<TKeys[number], object>,
> = {
  Provider: ComponentType<StateProviderPropsModel<TKeys, TType, TParams>>;

  getStatePersisted(): Promise<TType>;
};

export type _StoreContextProviderPropsModel<
  TKeys extends Array<string>,
  TType extends Record<TKeys[number], object>,
  TParams extends Record<TKeys[number], object>,
> = StateProviderPropsModel<TKeys, TType, TParams> & {
  actions: {
    [TKey in TKeys[number]]: CaseReducerActions<SliceCaseReducers<TType[TKey]>, TKey>;
  };
  defaultState: NestedDefaultStateModel<TKeys, TType>;
  persistedState?: NestedDefaultStateModel<TKeys, TType>;
};
