import {
  type RelativeDateBoundModel,
  type RelativeDateRangeModel,
  type RelativeDateValueModel,
} from '#lib-backend/form/resources/RelativeDateRange/RelativeDateRange.models';
import { createUnion } from '#lib-backend/resource/utils/createUnion/createUnion';
import { withEntity } from '#lib-backend/resource/utils/withEntity/withEntity';
import { withField } from '#lib-backend/resource/utils/withField/withField';
import { FIELD_TYPE } from '#lib-shared/form/form.constants';
import { type RelativeDateModel } from '#lib-shared/form/form.models';

@withEntity({ name: 'RelativeDateInput' })
class RelativeDate implements RelativeDateModel {
  @withField({ type: FIELD_TYPE.STRING })
  unit!: string;

  @withField({ type: FIELD_TYPE.NUMBER })
  value!: number;
}

@withEntity({ name: 'RelativeDateValue' })
class RelativeDateValue implements RelativeDateValueModel {
  @withField({ Resource: RelativeDate, type: FIELD_TYPE.RESOURCE })
  value?: RelativeDateModel;
}

@withEntity({ name: 'RelativeDateBound' })
class RelativeDateBound implements RelativeDateBoundModel {
  @withField({ Resource: RelativeDate, type: FIELD_TYPE.NUMBER })
  max?: RelativeDateModel;

  @withField({ Resource: RelativeDate, type: FIELD_TYPE.NUMBER })
  min?: RelativeDateModel;
}

export const RelativeDateRange = createUnion<RelativeDateRangeModel>({
  Resource: [RelativeDateValue, RelativeDateBound],
  name: 'RelativeDateRange',
  resolve: (value) =>
    (value as RelativeDateValueModel).value ? RelativeDateValue : RelativeDateBound,
});
