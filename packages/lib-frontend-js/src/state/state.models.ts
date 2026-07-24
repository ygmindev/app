import {
  type DeepKeyModel,
  type PartialDeepModel,
  type PrimitiveModel,
  type StringKeyModel,
} from '@lib/shared/core/core.models';
import { type GetValueModel } from '@lib/shared/core/utils/getValue/getValue.models';
import { type MERGE_STRATEGY } from '@lib/shared/core/utils/merge/merge.constants';

export type SliceModel<TType, TReducers = undefined> = {
  readonly __reducers?: TReducers;

  defaultState: DefaultStateModel<TType>;

  persist?: Array<StringKeyModel<TType>> | boolean;

  reducers?: {
    [TKey in StringKeyModel<TReducers>]: (state: TType, action: TReducers[TKey]) => TType;
  };
};

export type ActionModel<TType> = {
  add<TKey extends DeepKeyModel<TType>>(
    key: TKey,
    value: NonNullable<GetValueModel<TType, TKey>> extends Array<infer TValue> ? TValue : never,
  ): void;
  merge<TKey extends DeepKeyModel<TType>>(
    key: TKey,
    value: NonNullable<GetValueModel<TType, TKey>> extends Record<string, unknown>
      ? PartialDeepModel<GetValueModel<TType, TKey>>
      : never,
    strategy?: MERGE_STRATEGY,
  ): void;
  remove<TKey extends DeepKeyModel<TType>>(
    key: TKey,
    value: NonNullable<GetValueModel<TType, TKey>> extends Array<infer TValue>
      ? Partial<TValue>
      : never,
  ): void;
  set<TKey extends DeepKeyModel<TType> | ''>(
    key: TKey,
    value?: TKey extends '' ? TType : GetValueModel<TType, TKey>,
  ): void;
  unset<TKey extends DeepKeyModel<TType>>(key: TKey): void;
};

export type DefaultStateModel<TType> = {
  [TKey in StringKeyModel<TType>]:
    | Required<TType>[TKey]
    | (Required<TType>[TKey] extends PrimitiveModel
        ? undefined
        : Required<TType>[TKey] extends Array<unknown>
          ? []
          : undefined);
};

export type NestedReducerModel<
  TType extends Record<string, unknown>,
  TReducers extends Record<StringKeyModel<TType>, unknown>,
> = {
  [TKey in StringKeyModel<TType>]: SliceModel<TType[TKey], TReducers[TKey]>;
};

export type NestedDefaultStateModel<TType> = {
  [TKey in StringKeyModel<TType>]: DefaultStateModel<TType[TKey]>;
};

export type StoreActionsModel<TType, TReducers extends Record<StringKeyModel<TType>, unknown>> = {
  [TKey in StringKeyModel<TType>]: ActionModel<TType[TKey]> &
    Omit<
      {
        [TReducerKey in StringKeyModel<TReducers[TKey]>]: (
          action: TReducers[TKey][TReducerKey],
        ) => void;
      },
      StringKeyModel<ActionModel<TType[TKey]>>
    >;
};

export type StoreStateModel<TType> =
  TType extends SliceModel<infer TState, infer TReducers> ? TState : undefined;

export type StoreReducersModel<TType> =
  TType extends SliceModel<infer TState, infer TReducers> ? TReducers : undefined;
