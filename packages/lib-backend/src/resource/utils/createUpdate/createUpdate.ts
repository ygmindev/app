import isFunction from 'lodash/isFunction';

import { EntityResource } from '#lib-backend/resource/resources/EntityResource/EntityResource';
import {
  type CreateUpdateModel,
  type CreateUpdateParamsModel,
} from '#lib-backend/resource/utils/createUpdate/createUpdate.models';
import { withEntity } from '#lib-backend/resource/utils/withEntity/withEntity';
import { type ClassModel } from '#lib-shared/core/core.models';

export const createUpdate = <TType extends unknown>({
  Resource,
  name,
}: CreateUpdateParamsModel<TType>): CreateUpdateModel<TType> => {
  const nameF = `${name}Update`;
  const isResource = Resource && isFunction(Resource);
  @withEntity({ name: nameF })
  class Update extends (isResource ? (Resource as unknown as ClassModel) : EntityResource) {}
  return Update as CreateUpdateModel<TType>;
};
