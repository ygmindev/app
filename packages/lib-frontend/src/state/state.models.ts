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
}

export type ActionsModel<TParams extends Record<string, object>> = {
  [TKey in keyof TParams]: (params: TParams[TKey]) => void;
};
