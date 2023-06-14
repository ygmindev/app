import { withEntity } from '#lib-backend/resource/decorators/withEntity/withEntity';
import { EntityResource } from '#lib-backend/resource/resources/EntityResource/EntityResource';
import type { UpdateParamsModel } from '#lib-backend/resource/utils/Update/Update.models';
import type { ConstructorModel } from '#lib-shared/core/core.models';
import type { UpdateModel } from '#lib-shared/resource/utils/Update/Update.models';
import isFunction from 'lodash/isFunction';

export const Update = <TType extends unknown>({
  Resource,
  name,
}: UpdateParamsModel<TType>): ConstructorModel<UpdateModel<TType>> => {
  const nameF = `${name}Update`;
  const isResource = Resource && isFunction(Resource);

  @withEntity({ name: nameF })
  class _Update extends (isResource ? (Resource as unknown as ConstructorModel) : EntityResource) {}
  return _Update;
};
