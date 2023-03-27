import { withEntity } from '@lib/backend/resource/decorators/withEntity/withEntity';
import { EntityResource } from '@lib/backend/resource/resources/EntityResource/EntityResource';
import type { FilterParamsModel } from '@lib/backend/resource/utils/Filter/Filter.models';
import type { ConstructorModel } from '@lib/shared/core/core.models';
import type { FilterModel } from '@lib/shared/resource/utils/Filter/Filter.models';
import isFunction from 'lodash/isFunction';

export const Filter = <TType extends unknown>({
  Resource,
  name,
}: FilterParamsModel<TType>): ConstructorModel<FilterModel<TType>> => {
  const _name = `${name}Filter`;
  const _isResource = Resource && isFunction(Resource);

  @withEntity({ name: _name })
  class _Filter extends (_isResource
    ? (Resource as unknown as ConstructorModel)
    : EntityResource) {}
  return _Filter;
};
