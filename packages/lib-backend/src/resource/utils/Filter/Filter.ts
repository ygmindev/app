import { withEntity } from '#lib-backend/resource/utils/withEntity/withEntity';
import { withField } from '#lib-backend/resource/utils/withField/withField';
import { type StringKeyModel } from '#lib-shared/core/core.models';
import { FIELD_TYPE } from '#lib-shared/form/form.constants';
import {
  type FilterConditionModel,
  type FilterModel,
} from '#lib-shared/resource/utils/Filter/Filter.models';

@withEntity({ name: 'Filter' })
export class Filter<TType> implements FilterModel<TType> {
  @withField({ type: FIELD_TYPE.STRING })
  field!: StringKeyModel<TType>;

  @withField({ type: FIELD_TYPE.STRING })
  condition!: FilterConditionModel;

  @withField({ type: FIELD_TYPE.STRING })
  value!: string;
}
