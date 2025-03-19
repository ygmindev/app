import {
  type _GetMetadataModel,
  type _GetMetadataParamsModel,
} from '@lib/backend/resource/utils/getMetadata/_getMetadata.models';
import { type StringKeyModel } from '@lib/shared/core/core.models';
import { filterNil } from '@lib/shared/core/utils/filterNil/filterNil';
import { type EntityMetadata } from '@mikro-orm/mongodb';

export const _getMetadata = <TType extends unknown>({
  Resource,
}: _GetMetadataParamsModel<TType>): _GetMetadataModel<TType> => {
  const ResourceF = Resource();
  const indices = filterNil(
    (ResourceF.prototype as unknown as { __meta?: EntityMetadata }).__meta?.primaryKeys,
  ) as Array<StringKeyModel<TType>>;
  return { indices };
};
