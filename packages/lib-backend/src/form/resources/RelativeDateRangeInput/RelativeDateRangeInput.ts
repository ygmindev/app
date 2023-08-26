import {
  type RelativeDateRangeInputModel,
  type RelativeDateRangeModel,
  type RelativeDateValueModel,
} from '#lib-backend/form/resources/RelativeDateRangeInput/RelativeDateRangeInput.models';
import { createUnion } from '#lib-backend/resource/utils/createUnion/createUnion';
import { withEntity } from '#lib-backend/resource/utils/withEntity/withEntity';
import { withField } from '#lib-backend/resource/utils/withField/withField';
import { FIELD_TYPE } from '#lib-shared/form/form.constants';
import { type RelativeDateInputModel } from '#lib-shared/form/form.models';

@withEntity({ name: 'RelativeDateInput' })
class RelativeDateInput implements RelativeDateInputModel {
  @withField({ type: FIELD_TYPE.STRING })
  unit!: string;

  @withField({ type: FIELD_TYPE.NUMBER })
  value!: number;
}

@withEntity({ name: 'RelativeDateValue' })
class RelativeDateValue implements RelativeDateValueModel {
  @withField({ Resource: RelativeDateInput, type: FIELD_TYPE.RESOURCE })
  value?: RelativeDateInputModel;
}

@withEntity({ name: 'RelativeDateRange' })
class RelativeDateRange implements RelativeDateRangeModel {
  @withField({ Resource: RelativeDateInput, type: FIELD_TYPE.NUMBER })
  max?: RelativeDateInput;

  @withField({ Resource: RelativeDateInput, type: FIELD_TYPE.NUMBER })
  min?: RelativeDateInput;
}

export const RelativeDateRangeInput = createUnion<RelativeDateRangeInputModel>({
  Resource: [RelativeDateValue, RelativeDateRange],
  name: 'RelativeDateRangeInput',
  resolve: (value) =>
    (value as RelativeDateValueModel).value ? RelativeDateValue : RelativeDateRange,
});
