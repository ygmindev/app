import {
  type ActionsModel,
  type NestedActionsModel,
  type NestedDefaultStateModel,
  type NestedInitialStateModel,
} from '@lib/frontend/state/state.models';
import { Storage } from '@lib/frontend/state/utils/Storage/Storage';
import {
  type _StoreActionsModel,
  type _StoreContextProviderPropsModel,
  type _StoreModel,
  type _StoreParamsModel,
} from '@lib/frontend/state/utils/Store/_Store.models';
import { type StateProviderPropsModel } from '@lib/frontend/state/utils/Store/Store.models';
import { type StringKeyModel } from '@lib/shared/core/core.models';
import { filterNil } from '@lib/shared/core/utils/filterNil/filterNil';
import { getValue } from '@lib/shared/core/utils/getValue/getValue';
import { isArray } from '@lib/shared/core/utils/isArray/isArray';
import { mapValuesAsync } from '@lib/shared/core/utils/mapValuesAsync/mapValuesAsync';
import { isServer } from '@lib/shared/web/utils/isServer/isServer';
import { type EnhancedStore, original, type PayloadAction, type Reducer } from '@reduxjs/toolkit';
import { configureStore, createSlice } from '@reduxjs/toolkit';
import cloneDeep from 'lodash/cloneDeep';
import isMatch from 'lodash/isMatch';
import isNumber from 'lodash/isNumber';
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

const StoreContextProvider = <TType extends Record<string, unknown>>({
  actions: baseActions,
  children,
  defaultState: baseDefaultState,
  persistedState,
  value,
}: _StoreContextProviderPropsModel<TType>): ReactElement<
  _StoreContextProviderPropsModel<TType>
> => {
  const dispatch = useDispatch();

  const nestedActions = <TValue extends Record<string, unknown>>(
    defaultState: TValue,
    store: StringKeyModel<TType>,
    paths: Array<string> = [],
  ): ActionsModel<TValue> =>
    reduce(
      defaultState,
      (result, v, k) => {
        const path = [...paths, k].join('.');
        type TDefault = typeof v;
        let actions = {
          set: (value?: TDefault) => dispatch(baseActions[store].set({ key: path, value })),
          unset: () => {},
        } as ActionsModel<TValue>;
        if (isArray(v)) {
          actions = {
            ...actions,
            add: (value?: TDefault) => dispatch(baseActions[store].add({ key: path, value })),
            remove: (value?: Partial<TDefault>) =>
              dispatch(baseActions[store].remove({ key: path, value })),
            update: (filter?: number | Partial<TDefault>, value?: Partial<TDefault>) =>
              dispatch(baseActions[store].update({ filter, key: path, value })),
          };
        } else if (isPlainObject(v)) {
          actions = {
            ...actions,
            ...nestedActions(v as Record<string, unknown>, store, [...paths, k]),
          };
        }
        return { ...result, [k]: actions };
      },
      {} as ActionsModel<TValue>,
    );

  const actionsF = reduce(
    baseDefaultState,
    (r, v, k) => ({ ...r, [k]: nestedActions(v, k as StringKeyModel<TType>) }),
    {} as NestedActionsModel<TType>,
  );

  const providers = useMemo<Array<ReactElement>>(
    () =>
      filterNil([
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

export class _Store<TType extends Record<string, unknown>> implements _StoreModel<TType> {
  protected actions: _StoreActionsModel<TType>;
  protected defaultState: NestedDefaultStateModel<TType>;
  protected persistedState?: NestedDefaultStateModel<TType>;
  protected persistor: Persistor;
  protected persistors: { [TKey in StringKeyModel<TType>]?: PersistConfig<TType[TKey]> };
  protected store: EnhancedStore<TType>;

  constructor({ cookies, initialState, reducers }: _StoreParamsModel<TType>) {
    const storage = new Storage({ cookies });
    const {
      actions: actionsF,
      defaultState: defaultStateF,
      persistors: persistorsF,
      reducers: reducersF,
    } = reduce(
      reducers,
      (result, reducer, name) => {
        type StateModel = NestedInitialStateModel<TType>[StringKeyModel<TType>] | undefined;
        const { actions, reducer: reducerF } = createSlice({
          initialState:
            initialState?.[name as StringKeyModel<TType>] ?? (reducer.defaultState as StateModel),
          name,
          reducers: {
            add: (state, action: PayloadAction<{ key: string; value: unknown }>) => {
              let currentState = state as object;
              const values = getValue(original(state), action.payload.key);
              if (isArray(values)) {
                currentState = set(currentState, action.payload.key, [
                  ...values,
                  action.payload.value,
                ]);
              }
              return currentState as TType[StringKeyModel<TType>];
            },
            get: (state, action: PayloadAction<{ key: string }>) =>
              getValue(original(state), action.payload.key),
            remove: (state, action: PayloadAction<{ key: string; value: unknown }>) => {
              let currentState = state as object;
              const values = getValue(original(currentState), action.payload.key);
              if (isArray(values)) {
                currentState = set(
                  currentState,
                  action.payload.key,
                  (values as Array<never>).filter(
                    (v) => !isMatch(v, action.payload.value as object),
                  ),
                );
              }
              return currentState as TType[StringKeyModel<TType>];
            },
            set: (state, action: PayloadAction<{ key: string; value: unknown }>) => {
              let currentState = state as object;
              currentState = set(currentState, action.payload.key, action.payload.value);
              return currentState as TType[StringKeyModel<TType>];
            },
            unset: (state, action: PayloadAction<{ key: string }>) => {
              const currentState = state as object;
              unset(currentState, action.payload.key);
              void storage.removeItem(action.payload.key);
              return currentState as TType[StringKeyModel<TType>];
            },
            update: (
              state,
              action: PayloadAction<{ filter: unknown; key: string; value: unknown }>,
            ) => {
              let currentState = state as unknown as object;
              const values = cloneDeep(getValue(original(state), action.payload.key));
              if (isArray(values)) {
                const index = isNumber(action.payload.filter)
                  ? action.payload.filter
                  : (values as Array<never>).findIndex((v) =>
                      isMatch(v, action.payload.filter as object),
                    );
                if (index >= 0) {
                  values[index] = action.payload.value as never;
                }
                currentState = set(currentState, action.payload.key, values);
              }
              return currentState as TType[StringKeyModel<TType>];
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
            [name]: persistConfig ? persistReducer(persistConfig, reducerF) : reducerF,
          } as Reducer<TType>,
        };
      },
      {
        actions: {} as _StoreActionsModel<TType>,
        defaultState: {} as NestedDefaultStateModel<TType>,
        persistors: {} as { [TKey in StringKeyModel<TType>]?: PersistConfig<TType[TKey]> },
        reducers: {} as Reducer<TType>,
      },
    );

    this.defaultState = defaultStateF;
    this.actions = actionsF;
    this.persistors = process.env.NODE_ENV === 'test' ? {} : persistorsF;
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

  getState = (): TType => this.store.getState();

  getStatePersisted = async (): Promise<TType> =>
    mapValuesAsync(this.persistors, async (v) =>
      getStoredState(v as PersistConfig<TType[StringKeyModel<TType>]>),
    ) as Promise<TType>;

  get Provider(): ComponentType<StateProviderPropsModel<TType>> {
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
