import {
  type CreateResourceManyModel,
  type CreateResourceManyParamsModel,
} from '@lib/backend/resource/utils/createResourceMany/createResourceMany.models';
import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { PartialModel } from '@lib/shared/core/core.models';
import { PROPERTY_TYPE } from '@lib/shared/data/data.constants';

export const createResourceMany = <TType extends unknown>({
  Resource,
  name,
}: CreateResourceManyParamsModel<TType>): CreateResourceManyModel<TType> => {
  @withEntity({ name })
  class ResourceMany {
    @withField({
      Resource,
      isArray: true,
      type: PROPERTY_TYPE.RESOURCE,
    })
    result!: Array<PartialModel<TType>>;
  }
  return ResourceMany;
};
