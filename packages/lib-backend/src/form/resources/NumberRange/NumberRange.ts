import { type NumberRangeModel } from '#lib-backend/form/resources/NumberRange/NumberRange.models';
import { withEntity } from '#lib-backend/resource/utils/withEntity/withEntity';
import { withField } from '#lib-backend/resource/utils/withField/withField';
import { FIELD_TYPE } from '#lib-shared/form/form.constants';

@withEntity({ name: 'NumberRange' })
export class NumberRange implements NumberRangeModel {
  @withField({ type: FIELD_TYPE.NUMBER })
  max?: number;

  @withField({ type: FIELD_TYPE.NUMBER })
  value?: number;
}
