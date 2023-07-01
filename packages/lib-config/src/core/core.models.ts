import {
  type CallableModel,
  type EmptyObjectModel,
  type PartialModel,
  type ReturnTypeModel,
} from '#lib-shared/core/core.models';

export type ConfigDynamicModel<TType, TOptions = EmptyObjectModel> = CallableModel<
  TOptions extends EmptyObjectModel
    ? ReturnTypeModel<TType>
    : ReturnTypeModel<TType> & PartialModel<TOptions>,
  TOptions
>;
