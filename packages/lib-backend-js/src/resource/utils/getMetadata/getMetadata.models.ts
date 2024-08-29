import {
  type _GetMetadataModel,
  type _GetMetadataParamsModel,
} from '@lib/backend/resource/utils/getMetadata/_getMetadata.models';

export type GetMetadataParamsModel<TType extends unknown> = _GetMetadataParamsModel<TType>;

export type GetMetadataModel<TType extends unknown> = _GetMetadataModel<TType>;
