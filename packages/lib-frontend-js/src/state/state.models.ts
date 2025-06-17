import {
  type EmptyObjectModel,
  type InferModel,
  type PartialModel,
  type PrimitiveModel,
  type StringKeyModel,
} from '@lib/shared/core/core.models';

export type ReducerModel<TType extends object, TParams extends object> = {
  actions: {
    [TKey in keyof TParams]: ActionModel<TType, TParams[TKey]>;
  };

  defaultState: DefaultStateModel<TType>;

  persist?: Array<StringKeyModel<TType>> | boolean;
};

export type DefaultStateModel<TType extends object> = {
  [TKey in keyof Required<TType>]:
    | Required<TType>[TKey]
    | (Required<TType>[TKey] extends PrimitiveModel
        ? undefined
        : Required<TType>[TKey] extends Array<unknown>
          ? []
          : EmptyObjectModel);
};

export type NestedReducerModel<
  TKeys extends Array<string>,
  TType extends Record<TKeys[number], object>,
  TParams extends Record<TKeys[number], object>,
> = {
  [TKey in TKeys[number]]: ReducerModel<TType[TKey], TParams[TKey]>;
};

export type ActionsModel<TType extends object> = {
  [TKey in keyof Required<TType>]: (params?: TType[TKey]) => void;
};

export type NestedActionsModel<
  TKeys extends Array<string>,
  TType extends Record<TKeys[number], object>,
  TParams extends Record<TKeys[number], object>,
> = {
  [TKey in TKeys[number]]: StateActionsModel<TType[TKey], TParams[TKey]>;
};

export type NestedDefaultStateModel<
  TKeys extends Array<string>,
  TType extends Record<TKeys[number], object>,
> = {
  [TKey in TKeys[number]]: DefaultStateModel<TType[TKey]>;
};

export type StateActionsModel<
  TType extends object,
  TParams extends object,
> = ArrayActionsModel<TType> &
  NonPrimitiveActionsModel<TType> &
  ActionsModel<TParams> &
  SetActionsModel<TType>;

export type InitialStateModel<TType extends object> = {
  [TKey in keyof Required<TType>]:
    | TType[TKey]
    | (TType[TKey] extends PrimitiveModel
        ? undefined
        : TType[TKey] extends Array<unknown>
          ? []
          : EmptyObjectModel);
};

export type NestedInitialStateModel<
  TKeys extends Array<string>,
  TType extends Record<TKeys[number], object>,
> = {
  [TKey in TKeys[number]]: InitialStateModel<TType[TKey]>;
};

export type ActionModel<TType extends object, TValue> = (
  store: {
    get<TKey extends keyof TType>(key: TKey): TType[TKey];
    set<TKey extends keyof TType>(key: TKey, value: TType[TKey]): void;
    unset<TKey extends keyof TType>(key: TKey): void;
  },
  value?: TValue,
) => void;

export type ArrayActionsModel<TType> = {
  [TKey in StringKeyModel<TType>]: Required<TType>[TKey] extends Array<unknown>
    ? ActionsModel<
        Record<`${TKey}Add`, InferModel<TType[TKey]>> &
          Record<`${TKey}Remove`, InferModel<TType[TKey]>> &
          Record<
            `${TKey}Update`,
            [filter: PartialModel<InferModel<TType[TKey]>> | number, value: InferModel<TType[TKey]>]
          >
      >
    : unknown;
}[StringKeyModel<TType>];

export type NonPrimitiveActionsModel<TType> = {
  [TKey in StringKeyModel<TType>]: Required<TType>[TKey] extends PrimitiveModel
    ? unknown
    : ActionsModel<Record<`${TKey}Update`, PartialModel<TType[TKey]>>>;
}[StringKeyModel<TType>];

export type SetActionsModel<TType> = {
  [TKey in StringKeyModel<TType>]: ActionsModel<Record<`${TKey}Unset`, never>> &
    ActionsModel<Record<`${TKey}Set`, TType[TKey]>>;
}[StringKeyModel<TType>];
