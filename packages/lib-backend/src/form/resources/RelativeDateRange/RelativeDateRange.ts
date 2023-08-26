import { type RelativeDateRangeModel } from '#lib-backend/form/resources/RelativeDateRange/RelativeDateRange.models';
import { withEntity } from '#lib-backend/resource/utils/withEntity/withEntity';
import { withField } from '#lib-backend/resource/utils/withField/withField';
import { FIELD_TYPE } from '#lib-shared/form/form.constants';
import { type RelativeDateModel } from '#lib-shared/form/form.models';

@withEntity({ name: 'RelativeDate' })
class RelativeDate implements RelativeDateModel {
  @withField({ type: FIELD_TYPE.STRING })
  unit!: string;

  @withField({ type: FIELD_TYPE.NUMBER })
  value!: number;
}

@withEntity({ name: 'RelativeDateRange' })
export class RelativeDateRange implements RelativeDateRangeModel {
  @withField({ Resource: RelativeDate, type: FIELD_TYPE.NUMBER })
  max?: RelativeDateModel;

  @withField({ Resource: RelativeDate, type: FIELD_TYPE.NUMBER })
  value?: RelativeDateModel;
}
