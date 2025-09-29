import {
  type EmptyObjectModel,
  type PrimitiveModel,
  type StringKeyModel,
} from '@lib/shared/core/core.models';

export type ReducerModel<TType> = {
  defaultState: DefaultStateModel<TType>;

  persist?: Array<StringKeyModel<TType>> | boolean;
};

export type DefaultStateModel<TType> = {
  [TKey in keyof Required<TType>]:
    | Required<TType>[TKey]
    | (Required<TType>[TKey] extends PrimitiveModel
        ? undefined
        : Required<TType>[TKey] extends Array<unknown>
          ? []
          : EmptyObjectModel);
};

export type ActionsModel<TType> = {
  [TKey in StringKeyModel<Required<TType>>]: {
    set: (value?: Required<TType>[TKey]) => void;
    unset: () => void;
  } & (Required<TType>[TKey] extends Array<infer TValue>
    ? {
        add: (value?: TValue) => void;
        remove: (value?: Partial<TValue>) => void;
        update: (filter?: number | Partial<TValue>, value?: Partial<TValue>) => void;
      }
    : Required<TType>[TKey] extends Record<string, unknown>
      ? ActionsModel<Required<TType>[TKey]>
      : unknown);
};

export type NestedReducerModel<TType extends Record<string, unknown>> = {
  [TKey in StringKeyModel<TType>]: ReducerModel<TType[TKey]>;
};

export type NestedDefaultStateModel<TType extends Record<string, unknown>> = {
  [TKey in StringKeyModel<TType>]: DefaultStateModel<TType[TKey]>;
};

export type NestedActionsModel<TType extends Record<string, unknown>> = {
  [TKey in StringKeyModel<TType>]: ActionsModel<TType[TKey]>;
};

export type InitialStateModel<TType> = {
  [TKey in keyof Required<TType>]:
    | TType[TKey]
    | (TType[TKey] extends PrimitiveModel
        ? undefined
        : TType[TKey] extends Array<unknown>
          ? []
          : EmptyObjectModel);
};

export type NestedInitialStateModel<TType extends Record<string, unknown>> = {
  [TKey in StringKeyModel<TType>]: InitialStateModel<TType[TKey]>;
};
