import type { _StateProviderPropsModel } from '@lib/frontend/state/providers/StateProvider/_StateProvider.models';
import type { ActionsModel } from '@lib/frontend/state/state.models';
import type {
  Draft,
  PreloadedState,
  SliceCaseReducers,
  ValidateSliceCaseReducers,
} from '@reduxjs/toolkit';
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { reduce } from 'lodash';
import type { ReactElement } from 'react';
import { useMemo } from 'react';
import { Provider, useDispatch } from 'react-redux';

export const _StateProvider = <
  TType extends Record<TKeys[number], object>,
  TParams extends Record<TKeys[number], object>,
  TKeys extends Array<string>,
>({
  children,
  value,
}: _StateProviderPropsModel<TType, TParams, TKeys>): ReactElement<
  _StateProviderPropsModel<TType, TParams, TKeys>
> => {
  const dispatch = useDispatch();

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
          actions: {
            ...result.actions,
            [name]: reduce(
              slice.actions,
              (result, v, k) => ({ ...result, [k]: (value: unknown) => dispatch(v(value)) }),
              {},
            ),
          },
          reducers: { ...result.actions, [name]: slice.reducer },
        };
      },
      {
        actions: {} as ActionsModel<TParams>,
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
      {value && (
        <value.ActionContext.Provider value={actions}>{children}</value.ActionContext.Provider>
      )}
    </Provider>
  );
};
