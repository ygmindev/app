import type { CallableModel } from '@lib/shared/core/core.models';

export interface _StoreModel<TType extends object> {
  get<TKey extends keyof TType>(key: TKey): TType[TKey];
  set<TKey extends keyof TType>(key: TKey, value: TType[TKey]): void;
}

export type _ReducerActionModel<TType extends object, TValue> = (
  store: _StoreModel<TType>,
  value: TValue,
) => void;

export type _ReducerParamsModel<TType extends object, TValue extends object> = {
  actions: {
    [TKey in keyof TValue]: _ReducerActionModel<TType, TValue[TKey]>;
  };
  initialState: TType;
};

export type _ReducerModel<TType extends object, TValue extends object> = {
  actions: { [TKey in keyof TValue]: (params: TValue[TKey]) => void };
  useStore: CallableModel<TType>;
};
