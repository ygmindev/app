import {
  type CreateResourceManyModel,
  type CreateResourceManyParamsModel,
} from '@lib/backend/resource/utils/createResourceMany/createResourceMany.models';
import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { PartialArrayModel } from '@lib/shared/core/core.models';

export const createResourceMany = <TType extends unknown>({
  Resource,
  name,
}: CreateResourceManyParamsModel<TType>): CreateResourceManyModel<TType> => {
  @withEntity({ name })
  class ResourceMany {
    @withField({ Resource })
    result!: PartialArrayModel<TType>;
  }
  return ResourceMany;
};
