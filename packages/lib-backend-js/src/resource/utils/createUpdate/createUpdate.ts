import {
  type CreateUpdateModel,
  type CreateUpdateParamsModel,
} from '@lib/backend/resource/utils/createUpdate/createUpdate.models';
import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { type ClassModel } from '@lib/shared/core/core.models';

export const createUpdate = <TType extends unknown>({
  Resource,
  name,
}: CreateUpdateParamsModel<TType>): CreateUpdateModel<TType> => {
  @withEntity({ name: `${name}Update` })
  class Update extends (Resource() as unknown as ClassModel) {}
  return Update as CreateUpdateModel<TType>;
};
