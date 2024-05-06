import { type ClassModel, type StringKeyModel } from '@lib/shared/core/core.models';

export type _GetMetadataParamsModel<TType> = {
  Resource(): ClassModel<TType>;
};

export type _GetMetadataModel<TType> = {
  indices?: Array<Array<StringKeyModel<TType>>>;
};
