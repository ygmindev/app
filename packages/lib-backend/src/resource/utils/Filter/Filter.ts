import { withEntity } from '@lib/backend/resource/decorators/withEntity/withEntity';
import type { FilterParamsModel } from '@lib/backend/resource/utils/Filter/Filter.models';
import type { ConstructorModel } from '@lib/shared/core/core.models';
import type { FilterModel } from '@lib/shared/resource/utils/Filter/Filter.models';

export const Filter = <TType>({
  Resource,
  name,
}: FilterParamsModel<TType>): ConstructorModel<FilterModel<TType>> => {
  const _name = `${name}Filter`;

  @withEntity({ name: _name })
  class _Filter extends (Resource as unknown as ConstructorModel) {}
  return _Filter;
};
