import type { ProviderPropsModel } from '@lib/frontend/core/core.models';
import type { ActionsModel, ReducerModel } from '@lib/frontend/state/state.models';
import type { PartialDeepModel } from '@lib/shared/core/core.models';
import type { Context } from 'react';

export interface _StateProviderPropsModel<
  TType extends Record<TKeys[number], object>,
  TParams extends Record<TKeys[number], object>,
  TKeys extends Array<string>,
> extends ProviderPropsModel<{
    ActionContext: Context<ActionsModel<TParams> | undefined>;
    initialState?: PartialDeepModel<TType>;
    reducers: {
      [TKey in TKeys[number]]: ReducerModel<TType[TKey], TParams[TKey]>;
    };
  }> {}
