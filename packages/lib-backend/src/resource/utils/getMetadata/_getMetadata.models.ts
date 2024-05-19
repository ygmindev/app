import { type ClassModel, type StringKeyModel } from '@lib/shared/core/core.models';

export type _GetMetadataParamsModel<TType extends unknown> = {
  Resource(): ClassModel<TType>;
};

export type _GetMetadataModel<TType extends unknown> = {
  indices?: Array<Array<StringKeyModel<TType>>>;
};
