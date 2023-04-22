import { isSsr } from '@lib/frontend/platform/utils/isSsr/isSsr';
import type { ActionModel, NestedActionsModel } from '@lib/frontend/state/state.models';
import { Storage } from '@lib/frontend/state/utils/Storage/Storage';
import type {
  _ActionProviderPropsModel,
  _StoreModel,
  _StoreParamsModel,
} from '@lib/frontend/state/utils/Store/_Store.models';
import type { StateProviderPropsModel } from '@lib/frontend/state/utils/Store/Store.models';
import { mapValuesAsync } from '@lib/shared/core/utils/mapValuesAsync/mapValuesAsync';
import type {
  CaseReducer,
  CaseReducerActions,
  CombinedState,
  EnhancedStore,
  PreloadedState,
  Reducer,
  SliceCaseReducers,
} from '@reduxjs/toolkit';
import * as toolkit from '@reduxjs/toolkit';
import type { NoInfer } from '@reduxjs/toolkit/dist/tsHelpers';
import mapValues from 'lodash/mapValues';
import reduce from 'lodash/reduce';
import type { ComponentType, ReactElement } from 'react';
import { Provider as _Provider, useDispatch } from 'react-redux';
import type { PersistConfig, Persistor } from 'redux-persist';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import getStoredState from 'redux-persist/es/getStoredState';

// TODO: fix when upgrade https://github.com/reduxjs/redux-toolkit/issues/1960
// import { configureStore, createSlice } from '@reduxjs/toolkit';
const { configureStore, createSlice } = ((toolkit as unknown as { default: unknown }).default ??
  toolkit) as typeof toolkit;

const _ActionProvider = <
  TKeys extends Array<string>,
  TType extends Record<TKeys[number], object>,
  TParams extends Record<TKeys[number], object>,
>({
  actions,
  children,
  value,
}: _ActionProviderPropsModel<TKeys, TType, TParams>): ReactElement<
  _ActionProviderPropsModel<TKeys, TType, TParams>
> => {
  const dispatch = useDispatch();
  const _actions = mapValues(actions, (actions) =>
    mapValues(actions, (action) => (value: unknown) => dispatch(action(value))),
  ) as NestedActionsModel<TKeys, TParams>;
  return (
    <>
      {value?.actionContext ? (
        <value.actionContext.Provider value={_actions}>{children}</value.actionContext.Provider>
      ) : (
        children
      )}
    </>
  );
};

export class _Store<
  TKeys extends Array<string>,
  TType extends Record<TKeys[number], object>,
  TParams extends Record<TKeys[number], object>,
> implements _StoreModel<TKeys, TType, TParams>
{
  protected _store: EnhancedStore<TType>;
  protected _actions: {
    [TKey in TKeys[number]]: CaseReducerActions<SliceCaseReducers<TType[TKey]>, TKey>;
  };
  protected _persistors: {
    [TKey in TKeys[number]]?: PersistConfig<TType[TKey]>;
  };
  protected _persistor: Persistor;

  constructor({ cookies, initialState, reducers }: _StoreParamsModel<TKeys, TType, TParams>) {
    const {
      actions: _actions,
      persistors: _persistors,
      reducers: _reducers,
    } = reduce(
      reducers,
      (result, reducer, name) => {
        type StateModel = TType[TKeys[number]];
        const { actions, reducer: _reducer } = createSlice<
          StateModel,
          SliceCaseReducers<StateModel>
        >({
          initialState: reducer.initialState as StateModel,
          name,
          reducers: mapValues(
            reducer.actions,
            (action): CaseReducer<StateModel> =>
              (state, { payload }) => {
                (action as ActionModel<StateModel, unknown>)(
                  {
                    get: <TKey extends keyof StateModel>(key: TKey) => (state as StateModel)[key],
                    set: <TKey extends keyof StateModel>(
                      key: TKey,
                      value: StateModel[TKey],
                    ): void => {
                      (state as StateModel)[key] = value;
                    },
                  },
                  payload,
                );
              },
          ),
        });

        const _persistConfig: PersistConfig<StateModel> | undefined = reducer.storage
          ? {
              key: name,
              stateReconciler: isSsr ? (_, original) => original : undefined,
              storage: new Storage({ backends: reducer.storage, cookies }),
            }
          : undefined;

        return {
          ...result,
          actions: { ...result.actions, [name]: actions },
          persistors: _persistConfig
            ? { ...result.persistors, [name]: _persistConfig }
            : result.persistors,
          reducers: {
            ...result.reducers,
            [name]: _persistConfig ? persistReducer(_persistConfig, _reducer) : _reducer,
          } as Reducer<TType>,
        };
      },
      {
        actions: {} as {
          [TKey in TKeys[number]]: CaseReducerActions<SliceCaseReducers<TType[TKey]>, TKey>;
        },
        persistors: {} as {
          [TKey in TKeys[number]]?: PersistConfig<TType[TKey]>;
        },
        reducers: {} as Reducer<TType>,
      },
    );

    this._actions = _actions;
    this._persistors = _persistors;
    this._store = configureStore({
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
        }),
      preloadedState: initialState as PreloadedState<CombinedState<NoInfer<TType>>>,
      reducer: _reducers,
    });
    this._persistor = persistStore(this._store);
    // this._persistor.subscribe(() => {
    //   const { bootstrapped } = this._persistor.getState();
    //   console.warn(bootstrapped);
    // });
  }
  getState = async (): Promise<TType> =>
    mapValuesAsync({
      callback: async (v) => await getStoredState(v as PersistConfig<TType[TKeys[number]]>),
      value: this._persistors,
    }) as Promise<TType>;

  get Provider(): ComponentType<StateProviderPropsModel<TKeys, TType, TParams>> {
    return ({ children, value }) => (
      <_Provider store={this._store}>
        <_ActionProvider
          actions={this._actions}
          value={value}>
          {children}
        </_ActionProvider>
      </_Provider>
    );
  }
}
