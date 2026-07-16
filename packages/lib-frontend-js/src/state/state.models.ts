import {
  type PartialDeepModel,
  type PrimitiveModel,
  type StringKeyModel,
} from '@lib/shared/core/core.models';
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
  set(value?: TType): void;
  unset(): void;
} & (TType extends Array<infer TValue>
  ? {
      add(value?: TValue): void;
      remove(value?: Partial<TValue>): void;
    }
  : TType extends Record<string, unknown>
    ? ActionsModel<TType> & {
        merge(value?: PartialDeepModel<TType>, strategy?: MERGE_STRATEGY): void;
      }
    : unknown);

export type ActionsModel<TType> = {
  [TKey in StringKeyModel<TType>]: ActionModel<TType[TKey]>;
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

export type NestedActionsModel<TType, TReducers extends Record<StringKeyModel<TType>, unknown>> = {
  [TKey in StringKeyModel<TType>]: ActionsModel<TType[TKey]> & {
    [TReducerKey in StringKeyModel<TReducers[TKey]>]: (
      action: TReducers[TKey][TReducerKey],
    ) => void;
  };
};

export type StoreStateModel<TType> =
  TType extends SliceModel<infer TState, infer TReducers> ? TState : undefined;

export type StoreReducersModel<TType> =
  TType extends SliceModel<infer TState, infer TReducers> ? TReducers : undefined;
