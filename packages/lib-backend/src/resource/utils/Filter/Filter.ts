import isFunction from 'lodash/isFunction';

import { withEntity } from '#lib-backend/resource/decorators/withEntity/withEntity';
import { EntityResource } from '#lib-backend/resource/resources/EntityResource/EntityResource';
import { type FilterParamsModel } from '#lib-backend/resource/utils/Filter/Filter.models';
import { type ClassModel } from '#lib-shared/core/core.models';
import { type FilterModel } from '#lib-shared/resource/utils/Filter/Filter.models';

export const Filter = <TType extends unknown>({
  Resource,
  name,
}: FilterParamsModel<TType>): ClassModel<FilterModel<TType>> => {
  const nameF = `${name}Filter`;
  const isResource = Resource && isFunction(Resource);

  @withEntity({ name: nameF })
  class _Filter extends (isResource ? (Resource as unknown as ClassModel) : EntityResource) {}
  return _Filter;
};
