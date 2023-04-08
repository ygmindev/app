import type { STATE_LOADER } from '@lib/frontend/state/state.constants';

export type StateLoaderModel = `${STATE_LOADER}`;

export interface ReducerModel<TType extends object, TParams extends object> {
  actions: {
    [TKey in keyof TParams]: (
      store: {
        get<TKey extends keyof TType>(key: TKey): TType[TKey];
        set<TKey extends keyof TType>(key: TKey, value: TType[TKey]): void;
      },
      value: TParams[TKey],
    ) => void;
  };

  initialState: TType;

  loaders?: {
    [TKey in keyof TType]?: StateLoaderModel;
  };
}

export type ActionsModel<TParams extends object> = {
  [TKey in keyof TParams]: (params?: TParams[TKey]) => void;
};
