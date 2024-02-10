import {
  type _GetMetadataModel,
  type _GetMetadataParamsModel,
} from '@lib/backend/resource/utils/getMetadata/_getMetadata.models';
import { filterNil } from '@lib/shared/core/utils/filterNil/filterNil';
import { type EntityMetadata } from '@mikro-orm/core';

export const _getMetadata = <TType>({
  Resource,
}: _GetMetadataParamsModel<TType>): _GetMetadataModel<TType> => {
  const ResourceF = Resource();
  const indices = filterNil(
    (ResourceF.prototype as unknown as { __meta?: EntityMetadata }).__meta?.indexes?.map(
      (index) => index.properties as Array<keyof TType>,
    ),
  );
  return {
    indices,
  };
};
