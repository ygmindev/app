import { withEntity } from '#lib-backend/resource/utils/withEntity/withEntity';
import { withField } from '#lib-backend/resource/utils/withField/withField';
import { type PartialModel, type PrimitiveModel } from '#lib-shared/core/core.models';
import { DATA_TYPE } from '#lib-shared/data/data.constants';
import {
  type FilterConditionModel,
  type FilterModel,
} from '#lib-shared/resource/utils/Filter/Filter.models';

@withEntity({ name: 'Filter' })
export class Filter<TType, TKey extends keyof TType> implements FilterModel<TType, TKey> {
  @withField({ type: DATA_TYPE.STRING })
  field!: TKey;

  @withField({ type: DATA_TYPE.STRING })
  condition!: FilterConditionModel;

  @withField({ type: DATA_TYPE.STRING })
  value!: TType[TKey] extends PrimitiveModel ? TType[TKey] : PartialModel<TType[TKey]>;
}
