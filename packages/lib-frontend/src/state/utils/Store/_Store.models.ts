import { type CaseReducerActions, type SliceCaseReducers } from '@reduxjs/toolkit';
import { type ComponentType } from 'react';

import {
  type CookiesModel,
  type NestedInitialStateModel,
  type NestedReducerModel,
} from '#lib-frontend/state/state.models';
import { type StateProviderPropsModel } from '#lib-frontend/state/utils/Store/Store.models';
import { type CallablePromiseModel } from '#lib-shared/core/core.models';

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

  getState: CallablePromiseModel<TType>;
};

export type _ActionProviderPropsModel<
  TKeys extends Array<string>,
  TType extends Record<TKeys[number], object>,
  TParams extends Record<TKeys[number], object>,
> = {
  actions: {
    [TKey in TKeys[number]]: CaseReducerActions<SliceCaseReducers<TType[TKey]>, TKey>;
  };
} & StateProviderPropsModel<TKeys, TType, TParams>;
