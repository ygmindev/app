import { _getMetadata } from '@lib/backend/resource/utils/getMetadata/_getMetadata';
import {
  type GetMetadataModel,
  type GetMetadataParamsModel,
} from '@lib/backend/resource/utils/getMetadata/getMetadata.models';

export const getMetadata = <TType>({
  ...params
}: GetMetadataParamsModel<TType>): GetMetadataModel<TType> => _getMetadata({ ...params });
