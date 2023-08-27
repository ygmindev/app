import { withEntity } from '#lib-backend/resource/utils/withEntity/withEntity';
import { withField } from '#lib-backend/resource/utils/withField/withField';
import { type StringKeyModel } from '#lib-shared/core/core.models';
import { DATA_TYPE } from '#lib-shared/data/data.constants';
import {
  type FilterConditionModel,
  type FilterModel,
} from '#lib-shared/resource/utils/Filter/Filter.models';

@withEntity({ name: 'Filter' })
export class Filter<TType> implements FilterModel<TType> {
  @withField({ type: DATA_TYPE.STRING })
  field!: StringKeyModel<TType>;

  @withField({ type: DATA_TYPE.STRING })
  condition!: FilterConditionModel;

  @withField({ type: DATA_TYPE.STRING })
  value!: string;
}
