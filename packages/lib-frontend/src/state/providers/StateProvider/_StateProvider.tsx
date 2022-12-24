import type { _StateProviderPropsModel } from '@lib/frontend/state/providers/StateProvider/_StateProvider.models';
import type { ActionsModel } from '@lib/frontend/state/state.models';
import type {
  CaseReducerActions,
  Draft,
  PreloadedState,
  SliceCaseReducers,
  ValidateSliceCaseReducers,
} from '@reduxjs/toolkit';
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { mapValues, reduce } from 'lodash';
import type { ReactElement } from 'react';
import { useMemo } from 'react';
import { Provider, useDispatch } from 'react-redux';

const _ActionProvider = <
  TType extends Record<TKeys[number], object>,
  TParams extends Record<TKeys[number], object>,
  TKeys extends Array<string>,
>({
  actionContext,
  actions,
  children,
}: Pick<_StateProviderPropsModel<TType, TParams, TKeys>, 'actionContext' | 'children'> & {
  actions: {
    [TKey in TKeys[number]]: CaseReducerActions<SliceCaseReducers<TType[TKeys[number]]>, TKey>;
  };
}): ReactElement => {
  const dispatch = useDispatch();
  const _actions = mapValues(actions, (actions) =>
    mapValues(actions, (action) => (value: unknown) => dispatch(action(value))),
  ) as {
    [TKey in keyof TParams]: ActionsModel<TParams[TKey]>;
  };
  return <actionContext.Provider value={_actions}>{children}</actionContext.Provider>;
};

export const _StateProvider = <
  TType extends Record<TKeys[number], object>,
  TParams extends Record<TKeys[number], object>,
  TKeys extends Array<string>,
>({
  actionContext,
  children,
  value,
}: _StateProviderPropsModel<TType, TParams, TKeys>): ReactElement<
  _StateProviderPropsModel<TType, TParams, TKeys>
> => {
  const { actions, store } = useMemo(() => {
    const { actions, reducers } = reduce(
      value?.reducers,
      (result, reducer, name) => {
        const slice = createSlice({
          initialState: reducer.initialState,
          name,
          reducers: reduce(
            reducer.actions,
            (actionsResult, v, k) => ({
              ...actionsResult,
              [k]: (state, { payload }) => {
                v(
                  {
                    get: <TKey extends keyof TType[TKeys[number]]>(key: TKey) =>
                      state[key as keyof typeof state] as unknown as TType[TKeys[number]][TKey],
                    set: <TKey extends keyof TType[TKeys[number]]>(
                      key: TKey,
                      value: TType[TKeys[number]][TKey],
                    ): void => {
                      state[key as keyof typeof state] = value as unknown as Draft<
                        TType[TKeys[number]]
                      >[keyof Draft<TType[TKeys[number]]>];
                    },
                  },
                  payload,
                );
              },
            }),
            {} as ValidateSliceCaseReducers<
              TType[TKeys[number]],
              SliceCaseReducers<TType[TKeys[number]]>
            >,
          ),
        });
        return {
          ...result,
          actions: { ...result.actions, [name]: slice.actions },
          reducers: { ...result.reducers, [name]: slice.reducer },
        };
      },
      {
        actions: {} as {
          [TKey in TKeys[number]]: CaseReducerActions<
            SliceCaseReducers<TType[TKeys[number]]>,
            TKey
          >;
        },
        reducers: {},
      },
    );

    return {
      actions,
      store: configureStore({
        preloadedState: value?.initialState as PreloadedState<TType>,
        reducer: reducers,
      }),
    };
  }, [value]);

  return (
    <Provider store={store}>
      <_ActionProvider
        actionContext={actionContext}
        actions={actions}>
        {children}
      </_ActionProvider>
    </Provider>
  );
};
