import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { ENTITY_SCHEMA_TYPE } from '@lib/backend/resource/utils/withEntity/withEntity.constants';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { FILTER_CONDITION } from '@lib/model/resource/Filter/Filter.constants';
import { type FilterModel } from '@lib/model/resource/Filter/Filter.models';
import {
  PartialArrayModel,
  type PartialModel,
  type PrimitiveModel,
  type StringKeyModel,
} from '@lib/shared/core/core.models';
import { DATA_TYPE } from '@lib/shared/data/data.constants';

@withEntity({ name: 'Filter', schemaType: ENTITY_SCHEMA_TYPE.INPUT })
export class Filter<TType> implements FilterModel<TType> {
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

  @withField({ isArray: true, isOptional: true, type: DATA_TYPE.JSON })
  resourceArrayValue?: PartialArrayModel<TType>;

  @withField({ isOptional: true, type: DATA_TYPE.JSON })
  resourceValue?: PartialModel<TType>;

  @withField({ isArray: true, isOptional: true })
  stringArrayValue?: Array<string>;

  @withField({ isOptional: true })
  stringValue?: string;

  value?: PrimitiveModel | keyof TType;
}
