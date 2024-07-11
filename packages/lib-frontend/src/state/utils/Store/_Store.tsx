import {
  type ActionModel,
  type NestedActionsModel,
  type NestedDefaultStateModel,
} from '@lib/frontend/state/state.models';
import { Storage } from '@lib/frontend/state/utils/Storage/Storage';
import {
  type _StoreContextProviderPropsModel,
  type _StoreModel,
  type _StoreParamsModel,
} from '@lib/frontend/state/utils/Store/_Store.models';
import { type StateProviderPropsModel } from '@lib/frontend/state/utils/Store/Store.models';
import { filterNil } from '@lib/shared/core/utils/filterNil/filterNil';
import { mapValuesAsync } from '@lib/shared/core/utils/mapValuesAsync/mapValuesAsync';
import { isServer } from '@lib/shared/web/utils/isServer/isServer';
import {
  type CaseReducer,
  type CaseReducerActions,
  type EnhancedStore,
  original,
  type Reducer,
  type SliceCaseReducers,
  type UnknownAction,
} from '@reduxjs/toolkit';
import { configureStore, createSlice } from '@reduxjs/toolkit';
import cloneDeep from 'lodash/cloneDeep';
import findIndex from 'lodash/findIndex';
import isMatch from 'lodash/isMatch';
import isNumber from 'lodash/isNumber';
import isPlainObject from 'lodash/isPlainObject';
import mapValues from 'lodash/mapValues';
import reduce from 'lodash/reduce';
import uniq from 'lodash/uniq';
import { cloneElement, type ComponentType, type ReactElement, useMemo } from 'react';
import { Provider as _Provider, useDispatch } from 'react-redux';
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

const StoreContextProvider = <
  TKeys extends Array<string>,
  TType extends Record<TKeys[number], object>,
  TParams extends Record<TKeys[number], object>,
>({
  actions,
  children,
  defaultState,
  persistedState,
  value,
}: _StoreContextProviderPropsModel<TKeys, TType, TParams>): ReactElement<
  _StoreContextProviderPropsModel<TKeys, TType, TParams>
> => {
  const dispatch = useDispatch();
  const actionsF = mapValues(actions, (actions) =>
    mapValues(actions, (action) => (value: unknown) => dispatch(action(value) as UnknownAction)),
  ) as NestedActionsModel<TKeys, TType, TParams>;

  const providers = useMemo<Array<ReactElement>>(
    () =>
      filterNil([
        value?.actionContext.Provider && <value.actionContext.Provider value={actionsF} />,
        value?.defaultStateContext.Provider && (
          <value.defaultStateContext.Provider value={defaultState} />
        ),
        value?.persistedStateContext.Provider && (
          <value.persistedStateContext.Provider value={persistedState} />
        ),
      ]),
    [],
  );

  return <>{providers.reduce((result, element) => cloneElement(element, {}, result), children)}</>;
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
  protected defaultState: NestedDefaultStateModel<TKeys, TType>;
  protected persistedState?: NestedDefaultStateModel<TKeys, TType>;
  protected persistors: {
    [TKey in TKeys[number]]?: PersistConfig<TType[TKey]>;
  };
  protected persistor: Persistor;

  constructor({ cookies, initialState, reducers }: _StoreParamsModel<TKeys, TType, TParams>) {
    const {
      actions: actionsF,
      defaultState: defaultStateF,
      persistors: persistorsF,
      reducers: reducersF,
    } = reduce(
      reducers,
      (result, reducer, name) => {
        type StateModel = TType[TKeys[number]];

        const storage = new Storage({ cookies });

        // TODO: better typing
        const { storeActions, storeInitialState } = reduce(
          reducer.defaultState,
          ({ storeActions, storeInitialState }, v, k) => {
            type TKey = keyof typeof storeActions;
            type TKeyAction = keyof typeof actionsF;
            const kS = k as keyof StateModel;
            storeActions[`${k}Set` as TKey] = (store, value) => {
              actionsF[`${k}Set` as TKeyAction]
                ? (
                    actionsF[`${k}Set` as TKeyAction] as unknown as ActionModel<
                      TType[TKeys[number]],
                      TParams[TKeys[number]][TKey]
                    >
                  )(store, value)
                : store.set(kS, value as never);
            };
            storeActions[`${k}Unset` as TKey] = (store) => {
              actionsF[`${k}Unset` as TKeyAction]
                ? (
                    actionsF[`${k}Unset` as TKeyAction] as unknown as ActionModel<
                      TType[TKeys[number]],
                      TParams[TKeys[number]][TKey]
                    >
                  )(store)
                : store.unset(kS);
              void storage.removeItem(k);
            };
            if (Array.isArray(v)) {
              storeInitialState[kS] = [] as StateModel[keyof StateModel];
              storeActions[`${k}Add` as TKey] = (store, value) => {
                actionsF[`${k}Add` as TKeyAction]
                  ? (
                      actionsF[`${k}Add` as TKeyAction] as unknown as ActionModel<
                        TType[TKeys[number]],
                        TParams[TKeys[number]][TKey]
                      >
                    )(store, value)
                  : store.set(
                      kS,
                      uniq([...((store.get(kS) as Array<never>) ?? []), value]) as never,
                    );
              };
              storeActions[`${k}Remove` as TKey] = (store, value) => {
                actionsF[`${k}Remove` as TKeyAction]
                  ? (
                      actionsF[`${k}Remove` as TKeyAction] as unknown as ActionModel<
                        TType[TKeys[number]],
                        TParams[TKeys[number]][TKey]
                      >
                    )(store, value)
                  : store.set(
                      kS,
                      ((store.get(kS) as Array<never>).filter(
                        (v) => !isMatch(v, value as object),
                      ) ?? []) as never,
                    );
              };
              storeActions[`${k}Update` as TKey] = (store, value) => {
                const [filter, update] = value as [never, object];
                const values = cloneDeep(store.get(kS) as Array<never>);
                const i = isNumber(filter) ? filter : findIndex(values, filter);
                if (i >= 0) {
                  values[i] = update as never;
                  store.set(kS, values as never);
                }
              };
            } else if (isPlainObject(v)) {
              storeInitialState[kS] = {} as StateModel[keyof StateModel];
              storeActions[`${k}Update` as TKey] = (store, value) => {
                store.set(kS, value as never);
              };
            } else {
              storeInitialState[kS] = undefined as StateModel[keyof StateModel];
            }
            return { storeActions, storeInitialState };
          },
          {
            storeActions: reducer.actions,
            storeInitialState: {} as StateModel,
          },
        );

        const { actions, reducer: reducerF } = createSlice({
          initialState: storeInitialState,
          name,
          reducers: mapValues(
            storeActions,
            (action): CaseReducer<StateModel> =>
              (state, { payload }) => {
                (action as ActionModel<StateModel, unknown>)(
                  {
                    get: <TKey extends keyof StateModel>(key: TKey) =>
                      original(state as StateModel)?.[key] as StateModel[TKey],
                    set: <TKey extends keyof StateModel>(
                      key: TKey,
                      value: StateModel[TKey],
                    ): void => {
                      (state as StateModel)[key] = value;
                    },
                    unset: <TKey extends keyof StateModel>(key: TKey): void => {
                      delete (state as StateModel)[key];
                    },
                  },
                  payload,
                );
              },
          ),
        });

        const persistConfig: PersistConfig<StateModel> | undefined = reducer.persist
          ? {
              key: name,
              stateReconciler: isServer ? (_, original) => original : undefined,
              storage,
              whitelist: Array.isArray(reducer.persist) ? reducer.persist : undefined,
            }
          : undefined;

        return {
          ...result,
          actions: { ...result.actions, [name]: actions },
          defaultState: { ...result.defaultState, [name]: reducer.defaultState },
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
        defaultState: {} as NestedDefaultStateModel<TKeys, TType>,
        persistors: {} as {
          [TKey in TKeys[number]]?: PersistConfig<TType[TKey]>;
        },
        reducers: {} as Reducer<TType>,
      },
    );

    this.defaultState = defaultStateF;
    this.actions = actionsF;
    this.persistors = persistorsF;
    this.store = configureStore({
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
        }),
      preloadedState: initialState as TType,
      reducer: reducersF,
    });
    this.persistor = persistStore(this.store);

    void this.getStatePersisted().then((persistedState) => {
      this.persistedState = persistedState;
    });
  }

  getStatePersisted = async (): Promise<TType> =>
    mapValuesAsync(this.persistors, async (v) =>
      getStoredState(v as PersistConfig<TType[TKeys[number]]>),
    ) as Promise<TType>;

  get Provider(): ComponentType<StateProviderPropsModel<TKeys, TType, TParams>> {
    return ({ children, value }) => (
      <_Provider store={this.store}>
        <StoreContextProvider
          actions={this.actions}
          defaultState={this.defaultState}
          persistedState={this.persistedState}
          value={value}>
          {children}
        </StoreContextProvider>
      </_Provider>
    );
  }
}
