import type {
  CallableModel,
  CallablePromiseModel,
  ReturnTypeModel,
} from '@lib/shared/core/core.models';

export type ConfigDynamicModel<TType> =
  | CallablePromiseModel<ReturnTypeModel<TType>>
  | CallableModel<ReturnTypeModel<TType>>;

export type ConfigStaticModel<TType> = ReturnTypeModel<TType>;
