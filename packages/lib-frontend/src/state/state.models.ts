import type { StorageBackendModel } from '@lib/frontend/state/utils/Storage/_Storage.models';

export interface ReducerModel<TType extends object, TParams extends object> {
  actions: {
    [TKeyParam in keyof TParams]: ActionModel<TType, TParams[TKeyParam]>;
  };

  initialState: TType;

  storage?: Array<StorageBackendModel>;
}

export type ActionsModel<TParams extends object> = {
  [TKeyParam in keyof TParams]: (params?: TParams[TKeyParam]) => void;
};

export type NestedReducerModel<
  TKeys extends Array<string>,
  TType extends Record<TKeys[number], object>,
  TParams extends Record<TKeys[number], object>,
> = {
  [TKey in TKeys[number]]: ReducerModel<TType[TKey], TParams[TKey]>;
};

export type NestedActionsModel<
  TKeys extends Array<string>,
  TParams extends Record<TKeys[number], object>,
> = {
  [TKey in TKeys[number]]: ActionsModel<TParams[TKey]>;
};

export type NestedInitialStateModel<
  TKeys extends Array<string>,
  TType extends Record<TKeys[number], object>,
> = {
  [TKey in TKeys[number]]: TType[TKey];
};

export type ActionModel<TType extends object, TParam> = (
  store: {
    get<TKey extends keyof TType>(key: TKey): TType[TKey];
    set<TKey extends keyof TType>(key: TKey, value: TType[TKey]): void;
  },
  value: TParam,
) => void;

export interface CookieOptionModel {
  domain?: string;
  expires?: Date;
  path?: string;
  secure?: boolean;
}

export interface CookiesModel {
  expire(key: string, options?: CookieOptionModel): void;

  get<TType extends string = string>(key: string): TType | null;

  set<TType extends string = string>(key: string, value: TType, options?: CookieOptionModel): void;
}
