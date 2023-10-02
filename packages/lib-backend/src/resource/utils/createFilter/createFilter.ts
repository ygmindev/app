import {
  type CreateFilterModel,
  type CreateFilterParamsModel,
} from '#lib-backend/resource/utils/createFilter/createFilter.models';
import { createUnion } from '#lib-backend/resource/utils/createUnion/createUnion';
import { PrimitiveValue } from '#lib-backend/resource/utils/PrimitiveValue/PrimitiveValue';
import { withEntity } from '#lib-backend/resource/utils/withEntity/withEntity';
import { withField } from '#lib-backend/resource/utils/withField/withField';
import {
  type ClassModel,
  type PartialModel,
  type StringKeyModel,
} from '#lib-shared/core/core.models';
import { DATA_TYPE, PROPERTY_TYPE } from '#lib-shared/data/data.constants';
import { FilterConditionModel } from '#lib-shared/resource/utils/Filter/Filter.models';

export const createFilter = <TType, TKey extends StringKeyModel<TType>>({
  Resource,
  name,
}: CreateFilterParamsModel<TType>): CreateFilterModel<TType, TKey> => {
  @withEntity({ name: `${name}ResourceValue` })
  class ResourceValue extends (Resource as unknown as ClassModel) {
    @withField({ Resource: () => Resource, type: PROPERTY_TYPE.RESOURCE })
    value!: PartialModel<TType>;
  }

  const FilterValue = createUnion({
    Resource: [PrimitiveValue, ResourceValue],
    name: `${name}Filter`,
  });

  @withEntity({ name: `${name}Filter` })
  class Filter extends FilterValue {
    @withField({ type: DATA_TYPE.STRING })
    field!: TKey;

    @withField({ type: DATA_TYPE.STRING })
    condition!: FilterConditionModel;
  }

  return Filter;
};
