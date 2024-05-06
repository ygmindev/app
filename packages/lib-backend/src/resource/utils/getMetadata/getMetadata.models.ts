import {
  type _GetMetadataModel,
  type _GetMetadataParamsModel,
} from '@lib/backend/resource/utils/getMetadata/_getMetadata.models';

export type GetMetadataParamsModel<TType> = _GetMetadataParamsModel<TType>;

export type GetMetadataModel<TType> = _GetMetadataModel<TType>;
