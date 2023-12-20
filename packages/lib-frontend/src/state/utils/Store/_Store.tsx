import {
  type CaseReducer,
  type CaseReducerActions,
  type CombinedState,
  type EnhancedStore,
  type PreloadedState,
  type Reducer,
  type SliceCaseReducers,
} from '@reduxjs/toolkit';
import { configureStore, createSlice } from '@reduxjs/toolkit';
import cloneDeep from 'lodash/cloneDeep';
import filter from 'lodash/filter';
import findIndex from 'lodash/findIndex';
import isArray from 'lodash/isArray';
import isPlainObject from 'lodash/isPlainObject';
import mapValues from 'lodash/mapValues';
import reduce from 'lodash/reduce';
import uniq from 'lodash/uniq';
import { type ComponentType, type ReactElement } from 'react';
import { type NoInfer, Provider as _Provider, useDispatch } from 'react-redux';
import { type PersistConfig, type Persistor } from 'redux-persist';
import {
  FLUSH,
  getStoredState,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';

import { type ActionModel, type NestedActionsModel } from '#lib-frontend/state/state.models';
import { Storage } from '#lib-frontend/state/utils/Storage/Storage';
import {
  type _ActionProviderPropsModel,
  type _StoreModel,
  type _StoreParamsModel,
} from '#lib-frontend/state/utils/Store/_Store.models';
import { type StateProviderPropsModel } from '#lib-frontend/state/utils/Store/Store.models';
import { isServer } from '#lib-platform/core/utils/isServer/isServer';
import { mapValuesAsync } from '#lib-shared/core/utils/mapValuesAsync/mapValuesAsync';
import { merge } from '#lib-shared/core/utils/merge/merge';

const ActionProvider = <
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
  const actionsF = mapValues(actions, (actions) =>
    mapValues(actions, (action) => (value: unknown) => dispatch(action(value))),
  ) as NestedActionsModel<TKeys, TType, TParams>;
  return (
    <>
      {value?.actionContext ? (
        <value.actionContext.Provider value={actionsF}>{children}</value.actionContext.Provider>
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
  protected store: EnhancedStore<TType>;
  protected actions: {
    [TKey in TKeys[number]]: CaseReducerActions<SliceCaseReducers<TType[TKey]>, TKey>;
  };
  protected persistors: {
    [TKey in TKeys[number]]?: PersistConfig<TType[TKey]>;
  };
  protected persistor: Persistor;

  constructor({ cookies, initialState, reducers }: _StoreParamsModel<TKeys, TType, TParams>) {
    const {
      actions: actionsF,
      persistors: persistorsF,
      reducers: reducersF,
    } = reduce(
      reducers,
      (result, reducer, name) => {
        const storage = new Storage({ cookies });

        // TODO: better typing
        const reducerActions = reduce(
          reducer.initialState,
          (actionsResult, v, k) => {
            type TKey = keyof typeof actionsResult;
            const kS = k as keyof TType[TKeys[number]];
            actionsResult[k as TKey] = (store, value) => {
              store.set(kS, value as never);
            };
            actionsResult[`${k}Unset` as TKey] = (store) => {
              store.set(kS, reducer.initialState[kS] as never);
              void storage.removeItem(k);
            };
            if (isArray(v)) {
              actionsResult[`${k}Add` as TKey] = (store, value) => {
                store.set(kS, uniq([...((store.get(kS) as Array<never>) ?? []), value]) as never);
              };
              actionsResult[`${k}Remove` as TKey] = (store, value) => {
                store.set(
                  kS,
                  filter((store.get(kS) as Array<never>) ?? [], value as never) as never,
                );
              };
              actionsResult[`${k}Update` as TKey] = (store, value) => {
                const [filter, update] = value as [never, object];
                const values = cloneDeep(store.get(kS) as Array<never>);
                const i = findIndex(values, filter);
                if (i >= 0) {
                  values[i] = (
                    isPlainObject(values[i]) ? { ...(values[i] as object), ...update } : update
                  ) as never;
                }
              };
            } else if (isPlainObject(v)) {
              actionsResult[`${k}Update` as TKey] = (store, value) => {
                store.set(kS, merge([store.get(kS), value as never]));
              };
            }
            return actionsResult;
          },
          reducer.actions,
        );

        type StateModel = TType[TKeys[number]];
        const { actions, reducer: reducerF } = createSlice<
          StateModel,
          SliceCaseReducers<StateModel>
        >({
          initialState: reducer.initialState as StateModel,
          name,
          reducers: mapValues(
            reducerActions,
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

        const persistConfig: PersistConfig<StateModel> | undefined = reducer.isPersisted
          ? {
              key: name,
              stateReconciler: isServer ? (_, original) => original : undefined,
              storage,
            }
          : undefined;

        return {
          ...result,
          actions: { ...result.actions, [name]: actions },
          persistors: persistConfig
            ? { ...result.persistors, [name]: persistConfig }
            : result.persistors,
          reducers: {
            ...result.reducers,
            [name]: persistConfig ? persistReducer(persistConfig, reducerF) : reducerF,
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

    this.actions = actionsF;
    this.persistors = persistorsF;
    this.store = configureStore({
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
        }),
      preloadedState: initialState as PreloadedState<CombinedState<NoInfer<TType>>>,
      reducer: reducersF,
    });
    this.persistor = persistStore(this.store);
    // this._persistor.subscribe(() => {
    //   const { bootstrapped } = this._persistor.getState();
    //   console.warn(bootstrapped);
    // });
  }

  getStatePersisted = async (): Promise<TType> =>
    mapValuesAsync(this.persistors, async (v) =>
      getStoredState(v as PersistConfig<TType[TKeys[number]]>),
    ) as Promise<TType>;

  get Provider(): ComponentType<StateProviderPropsModel<TKeys, TType, TParams>> {
    return ({ children, value }) => (
      <_Provider store={this.store}>
        <ActionProvider
          actions={this.actions}
          value={value}>
          {children}
        </ActionProvider>
      </_Provider>
    );
  }
}
