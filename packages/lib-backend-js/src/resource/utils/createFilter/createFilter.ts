import {
  type CreateFilterModel,
  type CreateFilterParamsModel,
} from '@lib/backend/resource/utils/createFilter/createFilter.models';
import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import {
  type PartialModel,
  type PrimitiveModel,
  type StringKeyModel,
} from '@lib/shared/core/core.models';
import { DATA_TYPE, PROPERTY_TYPE } from '@lib/shared/data/data.constants';
import {
  type FilterConditionModel,
  type FilterModel,
} from '@lib/shared/resource/utils/Filter/Filter.models';

export const createFilter = <TType extends unknown>({
  Resource,
  name,
}: CreateFilterParamsModel<TType>): CreateFilterModel<TType> => {
  @withEntity({ name: `${name}Filter` })
  class Filter implements FilterModel<TType> {
    @withField({ type: DATA_TYPE.BOOLEAN })
    booleanValue?: boolean;

    @withField({ type: DATA_TYPE.STRING })
    condition!: FilterConditionModel;

    @withField({ type: DATA_TYPE.DATE })
    dateValue?: Date;

    @withField({ type: DATA_TYPE.STRING })
    field!: StringKeyModel<TType>;

    @withField({ Resource, isArray: true, type: PROPERTY_TYPE.RESOURCE })
    resourceArrayValue?: Array<PartialModel<TType>>;

    @withField({ Resource, type: PROPERTY_TYPE.RESOURCE })
    resourceValue?: PartialModel<TType>;

    @withField({ type: DATA_TYPE.NUMBER })
    numberValue?: number;

    @withField({ isArray: true, type: DATA_TYPE.STRING })
    stringArrayValue?: Array<string>;

    @withField({ type: DATA_TYPE.STRING })
    stringValue?: string;

    value?: PrimitiveModel | keyof TType;
  }
  return Filter as CreateFilterModel<TType>;
};
