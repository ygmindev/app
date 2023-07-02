import isFunction from 'lodash/isFunction';

import { EntityResource } from '#lib-backend/resource/resources/EntityResource/EntityResource';
import {
  type CreateFilterModel,
  type CreateFilterParamsModel,
} from '#lib-backend/resource/utils/createFilter/createFilter.models';
import { withEntity } from '#lib-backend/resource/utils/withEntity/withEntity';
import { type ClassModel } from '#lib-shared/core/core.models';

export const createFilter = <TType extends unknown>({
  Resource,
  name,
}: CreateFilterParamsModel<TType>): CreateFilterModel<TType> => {
  const nameF = `${name}Filter`;
  const isResource = Resource && isFunction(Resource);
  @withEntity({ name: nameF })
  class Filter extends (isResource ? (Resource as unknown as ClassModel) : EntityResource) {}
  return Filter as CreateFilterModel<TType>;
};
