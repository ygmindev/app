import type {
  CookiesModel,
  NestedInitialStateModel,
  NestedReducerModel,
} from '@lib/frontend/state/state.models';
import type { StateProviderPropsModel } from '@lib/frontend/state/utils/Store/Store.models';
import type { CallablePromiseModel } from '@lib/shared/core/core.models';
import type { CaseReducerActions, SliceCaseReducers } from '@reduxjs/toolkit';
import type { ComponentType } from 'react';

export interface _StoreParamsModel<
  TKeys extends Array<string>,
  TType extends Record<TKeys[number], object>,
  TParams extends Record<TKeys[number], object>,
> {
  cookies?: CookiesModel;
  initialState?: NestedInitialStateModel<TKeys, TType>;
  reducers?: NestedReducerModel<TKeys, TType, TParams>;
}

export interface _StoreModel<
  TKeys extends Array<string>,
  TType extends Record<TKeys[number], object>,
  TParams extends Record<TKeys[number], object>,
> {
  Provider: ComponentType<StateProviderPropsModel<TKeys, TType, TParams>>;

  getState: CallablePromiseModel<TType>;
}

export interface _ActionProviderPropsModel<
  TKeys extends Array<string>,
  TType extends Record<TKeys[number], object>,
  TParams extends Record<TKeys[number], object>,
> extends StateProviderPropsModel<TKeys, TType, TParams> {
  actions: {
    [TKey in TKeys[number]]: CaseReducerActions<SliceCaseReducers<TType[TKey]>, TKey>;
  };
}
