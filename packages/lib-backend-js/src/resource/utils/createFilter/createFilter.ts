import {
  type CreateFilterModel,
  type CreateFilterParamsModel,
} from '@lib/backend/resource/utils/createFilter/createFilter.models';
import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import {
  PartialArrayModel,
  type PartialModel,
  type PrimitiveModel,
  type StringKeyModel,
} from '@lib/shared/core/core.models';
import { DATA_TYPE } from '@lib/shared/data/data.constants';
import { FILTER_CONDITION } from '@lib/shared/resource/utils/Filter/Filter.constants';
import { type FilterModel } from '@lib/shared/resource/utils/Filter/Filter.models';

export const createFilter = <TType extends unknown>({
  Resource,
  name,
}: CreateFilterParamsModel<TType>): CreateFilterModel<TType> => {
  @withEntity({ name: `${name}Filter` })
  class Filter implements FilterModel<TType> {
    @withField({ isOptional: true, type: DATA_TYPE.BOOLEAN })
    booleanValue?: boolean;

    @withField({ type: DATA_TYPE.STRING })
    condition!: FILTER_CONDITION;

    @withField({ isOptional: true, type: DATA_TYPE.DATE })
    dateValue?: Date;

    @withField({ type: DATA_TYPE.STRING })
    field!: StringKeyModel<TType>;

    @withField({ isOptional: true, type: DATA_TYPE.NUMBER })
    numberValue?: number;

    @withField({ Resource, isArray: true, isOptional: true })
    resourceArrayValue?: PartialArrayModel<TType>;

    @withField({ Resource, isOptional: true })
    resourceValue?: PartialModel<TType>;

    @withField({ isArray: true, isOptional: true })
    stringArrayValue?: Array<string>;

    @withField({ isOptional: true })
    stringValue?: string;

    value?: PrimitiveModel | keyof TType;
  }
  return Filter as CreateFilterModel<TType>;
};
