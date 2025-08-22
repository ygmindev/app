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
import { FILTER_CONDITION } from '@lib/shared/resource/utils/Filter/Filter.constants';
import { type FilterModel } from '@lib/shared/resource/utils/Filter/Filter.models';

export const createFilter = <TType extends unknown>({
  Resource,
  name,
}: CreateFilterParamsModel<TType>): CreateFilterModel<TType> => {
  @withEntity({ name: `${name}Filter` })
  class Filter implements FilterModel<TType> {
    @withField({ isOptional: true })
    booleanValue?: boolean;

    @withField()
    condition!: FILTER_CONDITION;

    @withField({ isOptional: true })
    dateValue?: Date;

    @withField()
    field!: StringKeyModel<TType>;

    @withField({ isOptional: true })
    numberValue?: number;

    @withField({ Resource, isOptional: true })
    resourceArrayValue?: PartialArrayModel<TType>;

    @withField({ Resource })
    resourceValue?: PartialModel<TType>;

    @withField({ isOptional: true })
    stringArrayValue?: Array<string>;

    @withField({ isOptional: true })
    stringValue?: string;

    value?: PrimitiveModel | keyof TType;
  }
  return Filter as CreateFilterModel<TType>;
};
