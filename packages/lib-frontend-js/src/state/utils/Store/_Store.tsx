import { StoreContext } from '@lib/frontend/root/containers/Root/context';
import {
  type RootReducersModel,
  type RootStateModel,
} from '@lib/frontend/root/stores/rootStore.models';
import {
  type StoreActionsModel,
  type NestedDefaultStateModel,
  type ActionModel,
} from '@lib/frontend/state/state.models';
import { Storage } from '@lib/frontend/state/utils/Storage/Storage';
import {
  type _StoreActionsModel,
  type _StoreContextProviderPropsModel,
  type _StoreModel,
  type _StoreParamsModel,
} from '@lib/frontend/state/utils/Store/_Store.models';
import {
  type StoreModel,
  type StateProviderPropsModel,
} from '@lib/frontend/state/utils/Store/Store.models';
import { type StringKeyModel } from '@lib/shared/core/core.models';
import { filterNil } from '@lib/shared/core/utils/filterNil/filterNil';
import { getValue } from '@lib/shared/core/utils/getValue/getValue';
import { isArray } from '@lib/shared/core/utils/isArray/isArray';
import { mapValuesAsync } from '@lib/shared/core/utils/mapValuesAsync/mapValuesAsync';
import { merge } from '@lib/shared/core/utils/merge/merge';
import { type MERGE_STRATEGY } from '@lib/shared/core/utils/merge/merge.constants';
import { isServer } from '@lib/shared/web/utils/isServer/isServer';
import { type EnhancedStore, original, type PayloadAction, type Reducer } from '@reduxjs/toolkit';
import { configureStore, createSlice } from '@reduxjs/toolkit';
import cloneDeep from 'lodash/cloneDeep';
import isMatch from 'lodash/isMatch';
import isPlainObject from 'lodash/isPlainObject';
import reduce from 'lodash/reduce';
import set from 'lodash/set';
import unset from 'lodash/unset';
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
  TType extends Record<string, unknown>,
  TReducers extends Record<StringKeyModel<TType>, unknown>,
>({
  actions: baseActions,
  children,
  defaultState,
  persistedState,
  store: baseStore,
  value,
}: _StoreContextProviderPropsModel<TType, TReducers>): ReactElement<
  _StoreContextProviderPropsModel<TType, TReducers>
> => {
  const dispatch = useDispatch();

  const actions = useMemo(
    () =>
      reduce(
        Object.keys(defaultState),
        (r, k) => {
          const mainActions: ActionModel<TType[StringKeyModel<TType>]> = {
            add: (path, value) => dispatch(baseActions[k].add({ key: path, value })),
            merge: (path, value, strategy) =>
              dispatch(baseActions[k].merge({ key: path, strategy, value })),
            remove: (path, value) => dispatch(baseActions[k].remove({ key: path, value })),
            set: (path, value) => dispatch(baseActions[k].set({ key: path, value })),
            unset: (path: string) => dispatch(baseActions[k].unset({ key: path })),
          };
          const mainMethods = new Set(Object.keys(mainActions));
          return {
            ...r,
            [k]: {
              ...mainActions,
              ...reduce(
                baseActions[k],
                (rr, vv, kk) =>
                  mainMethods.has(kk)
                    ? rr
                    : {
                        ...rr,
                        [kk]: (value: never): void => {
                          dispatch(vv(value));
                        },
                      },
                {} as StoreActionsModel<TType, TReducers>[StringKeyModel<TType>],
              ),
            },
          };
        },
        {} as StoreActionsModel<TType, TReducers>,
      ),
    [defaultState, dispatch],
  );

  const providers = useMemo<Array<ReactElement>>(
    () =>
      filterNil([
        baseStore && (
          <StoreContext.Provider
            value={baseStore as StoreModel<RootStateModel, RootReducersModel>}
          />
        ),
        value?.actionContext.Provider && <value.actionContext.Provider value={actions} />,
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
  TType extends Record<string, unknown>,
  TReducers extends Record<StringKeyModel<TType>, unknown>,
> implements _StoreModel<TType, TReducers> {
  protected _store: EnhancedStore<TType>;
  protected actions: _StoreActionsModel<TType, TReducers>;
  protected defaultState: NestedDefaultStateModel<TType>;
  protected persistedState: NestedDefaultStateModel<TType>;
  protected persistor: Persistor;
  protected persistors: { [TKey in StringKeyModel<TType>]?: PersistConfig<TType[TKey]> };

  constructor({ cookies, initialState, reducers }: _StoreParamsModel<TType, TReducers>) {
    const storage = new Storage({ cookies });
    const {
      actions: actionsF,
      defaultState: defaultStateF,
      persistors: persistorsF,
      reducers: reducersF,
    } = reduce(
      reducers,
      (result, reducer, name) => {
        type StateModel = TType[StringKeyModel<TType>];

        const _unset = (state: StateModel, key: string): StateModel => {
          const currentState = state;
          unset(currentState, key);
          void storage.removeItem(key);
          return currentState;
        };

        const { actions, reducer: reducerF } = createSlice({
          initialState: initialState?.[name] ?? reducer.defaultState,
          name,
          reducers: {
            ...(reducer.reducers
              ? reduce(
                  reducer.reducers,
                  (r, v, k) => ({
                    ...r,
                    [k]: (state: StateModel, action: PayloadAction<unknown>) =>
                      (
                        v as unknown as (
                          state: StateModel | undefined,
                          action: unknown,
                        ) => StateModel
                      )(state, action.payload),
                  }),
                  {},
                )
              : {}),

            add: (state, action: PayloadAction<{ key: string; value: unknown }>) => {
              let currentState = state;
              const values = getValue(original(state), action.payload.key);
              if (isArray(values) || values === undefined) {
                currentState = set(currentState, action.payload.key, [
                  ...((values as Array<unknown>) ?? []),
                  action.payload.value,
                ]);
              }
              return currentState;
            },

            get: (state, action: PayloadAction<{ key: string }>) =>
              getValue(original(state), action.payload.key) as never,

            merge: (
              state,
              action: PayloadAction<{ key: string; strategy?: MERGE_STRATEGY; value: unknown }>,
            ) => {
              let currentState = state;
              const values = cloneDeep(getValue(original(state), action.payload.key));
              if (isPlainObject(values) || values === undefined) {
                const merged = merge([action.payload.value, values ?? {}], action.payload.strategy);
                currentState = set(currentState, action.payload.key, merged);
              }

              return currentState;
            },

            remove: (state, action: PayloadAction<{ key: string; value: unknown }>) => {
              let currentState = state;
              const values = getValue(original(currentState), action.payload.key);
              if (isArray(values)) {
                currentState = set(
                  currentState,
                  action.payload.key,
                  values.filter((v) =>
                    isPlainObject(v)
                      ? !isMatch(v as object, action.payload.value as object)
                      : v !== action.payload.value,
                  ),
                );
              }
              return currentState;
            },

            set: (state, action: PayloadAction<{ key: string; value: unknown }>) => {
              let currentState = state as StateModel;
              if (action.payload.key) {
                if (action.payload.value === undefined) {
                  currentState = _unset(currentState as StateModel, action.payload.key);
                } else {
                  currentState = set(
                    currentState as object,
                    action.payload.key,
                    action.payload.value,
                  ) as StateModel;
                }
                return currentState as StateModel;
              }
              return state;
            },

            unset: (state, action: PayloadAction<{ key: string }>) =>
              _unset(state as StateModel, action.payload.key),
          },
        });

        const persistConfig: PersistConfig<StateModel> | undefined = reducer.persist
          ? {
              key: name,
              stateReconciler: isServer ? (_, original) => original : undefined,
              storage,
              whitelist: isArray(reducer.persist) ? reducer.persist : undefined,
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
            [name]: persistConfig ? persistReducer(persistConfig as never, reducerF) : reducerF,
          } as Reducer<TType>,
        };
      },
      {
        actions: {} as _StoreActionsModel<TType, TReducers>,
        defaultState: {} as NestedDefaultStateModel<TType>,
        persistors: {} as { [TKey in StringKeyModel<TType>]?: PersistConfig<TType[TKey]> },
        reducers: {} as Reducer<TType>,
      },
    );

    this.defaultState = defaultStateF;
    this.actions = actionsF;
    this.persistors = process.env.NODE_ENV === 'test' ? {} : persistorsF;
    this.persistedState = {} as NestedDefaultStateModel<TType>;
    this._store = configureStore({
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
        }),
      preloadedState: initialState as TType,
      reducer: reducersF,
    });
    this.persistor = persistStore(this._store);

    void this.getStatePersisted().then((persistedState) => {
      this.persistedState = persistedState;
    });
  }

  getState = (): TType => this._store.getState();

  getStatePersisted = async (): Promise<NestedDefaultStateModel<TType>> =>
    mapValuesAsync(this.persistors, async (v) =>
      getStoredState(v as PersistConfig<unknown>),
    ) as Promise<NestedDefaultStateModel<TType>>;

  get Provider(): ComponentType<StateProviderPropsModel<TType, TReducers>> {
    return ({ children, value }) => (
      <_Provider store={this._store}>
        <StoreContextProvider
          actions={this.actions}
          defaultState={this.defaultState}
          persistedState={this.persistedState}
          store={this}
          value={value}>
          {children}
        </StoreContextProvider>
      </_Provider>
    );
  }
}
