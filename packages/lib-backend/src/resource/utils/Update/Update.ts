import isFunction from 'lodash/isFunction';

import { withEntity } from '#lib-backend/resource/decorators/withEntity/withEntity';
import { EntityResource } from '#lib-backend/resource/resources/EntityResource/EntityResource';
import { type UpdateParamsModel } from '#lib-backend/resource/utils/Update/Update.models';
import { type ClassModel } from '#lib-shared/core/core.models';
import { type UpdateModel } from '#lib-shared/resource/utils/Update/Update.models';

export const Update = <TType extends unknown>({
  Resource,
  name,
}: UpdateParamsModel<TType>): ClassModel<UpdateModel<TType>> => {
  const nameF = `${name}Update`;
  const isResource = Resource && isFunction(Resource);

  @withEntity({ name: nameF })
  class _Update extends (isResource ? (Resource as unknown as ClassModel) : EntityResource) {}
  return _Update;
};
