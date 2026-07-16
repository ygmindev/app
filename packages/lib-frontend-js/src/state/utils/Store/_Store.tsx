import { StoreContext } from '@lib/frontend/root/containers/Root/context';
import {
  type RootReducersModel,
  type RootStateModel,
} from '@lib/frontend/root/stores/rootStore.models';
import {
  type DefaultStateModel,
  type NestedActionsModel,
  type NestedDefaultStateModel,
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
  defaultState: baseDefaultState,
  persistedState,
  store: baseStore,
  value,
}: _StoreContextProviderPropsModel<TType, TReducers>): ReactElement<
  _StoreContextProviderPropsModel<TType, TReducers>
> => {
  const dispatch = useDispatch();

  const nestedActions = <TKey extends StringKeyModel<TType>>(
    defaultState: NestedDefaultStateModel<TType>[TKey],
    store: TKey,
    paths: Array<string> = [],
  ): NestedActionsModel<TType, TReducers>[TKey] =>
    reduce(
      defaultState,
      (result, v, k) => {
        const path = [...paths, k].join('.');
        let actions = {
          set: (value) => dispatch(baseActions[store].set({ key: path, value })),
          unset: () => dispatch(baseActions[store].unset({ key: path })),
        } as NestedActionsModel<TType, TReducers>[TKey];
        if (isArray(v)) {
          actions = {
            ...actions,
            add: (value) => dispatch(baseActions[store].add({ key: path, value })),
            remove: (value) => dispatch(baseActions[store].remove({ key: path, value })),
          };
        } else if (isPlainObject(v)) {
          actions = {
            ...actions,
            ...nestedActions(v as DefaultStateModel<TType[TKey]>, store, [...paths, k]),
            merge: (value, strategy?: MERGE_STRATEGY) =>
              dispatch(baseActions[store].merge({ key: path, strategy, value })),
          };
        }
        return { ...result, [k]: actions };
      },
      {} as NestedActionsModel<TType, TReducers>[TKey],
    );

  type StoreActionsModel = NestedActionsModel<TType, TReducers>[StringKeyModel<TType>];
  const actionsF = reduce(
    baseDefaultState,
    (r, v, k) => {
      const storeActions = nestedActions(v, k as StringKeyModel<TType>);
      return {
        ...r,
        [k]: {
          ...storeActions,
          ...reduce(
            baseActions[k],
            (rr, vv, kk) =>
              Object.hasOwn(storeActions, kk)
                ? rr
                : {
                    ...rr,
                    [kk]: (action: never): void => {
                      dispatch(vv(action));
                    },
                  },
            {} as StoreActionsModel,
          ),
        },
      };
    },
    {} as NestedActionsModel<TType, TReducers>,
  );

  const providers = useMemo<Array<ReactElement>>(
    () =>
      filterNil([
        baseStore && (
          <StoreContext.Provider
            value={baseStore as StoreModel<RootStateModel, RootReducersModel>}
          />
        ),
        value?.actionContext.Provider && <value.actionContext.Provider value={actionsF} />,
        value?.defaultStateContext.Provider && (
          <value.defaultStateContext.Provider value={baseDefaultState} />
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
        type StateModel = NestedDefaultStateModel<TType>[StringKeyModel<TType>];
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
              if (isArray(values)) {
                currentState = set(currentState, action.payload.key, [
                  ...values,
                  action.payload.value,
                ]);
              }
              return currentState;
            },

            get: (state, action: PayloadAction<{ key: string }>) =>
              getValue(original(state), action.payload.key),

            merge: (
              state,
              action: PayloadAction<{ key: string; strategy?: MERGE_STRATEGY; value: unknown }>,
            ) => {
              let currentState = state;
              const values = cloneDeep(getValue(original(state), action.payload.key));
              if (isPlainObject(values)) {
                const merged = merge([action.payload.value, values], action.payload.strategy);
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
              let currentState = state as object;
              currentState = set(currentState, action.payload.key, action.payload.value);
              return currentState as TType[StringKeyModel<TType>];
            },
            unset: (state, action: PayloadAction<{ key: string }>) => {
              const currentState = state;
              unset(currentState, action.payload.key);
              void storage.removeItem(action.payload.key);
              return currentState;
            },
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
