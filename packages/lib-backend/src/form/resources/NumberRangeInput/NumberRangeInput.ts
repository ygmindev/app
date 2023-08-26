import {
  type NumberRangeInputModel,
  type NumberRangeModel,
  type NumberValueModel,
} from '#lib-backend/form/resources/NumberRangeInput/NumberRangeInput.models';
import { createUnion } from '#lib-backend/resource/utils/createUnion/createUnion';
import { withEntity } from '#lib-backend/resource/utils/withEntity/withEntity';
import { withField } from '#lib-backend/resource/utils/withField/withField';
import { FIELD_TYPE } from '#lib-shared/form/form.constants';

@withEntity({ name: 'NumberValue' })
class NumberValue implements NumberValueModel {
  @withField({ type: FIELD_TYPE.NUMBER })
  value?: number;
}

@withEntity({ name: 'NumberRange' })
class NumberRange implements NumberRangeModel {
  @withField({ type: FIELD_TYPE.NUMBER })
  max?: number;

  @withField({ type: FIELD_TYPE.NUMBER })
  min?: number;
}

export const NumberRangeInput = createUnion<NumberRangeInputModel>({
  Resource: [NumberValue, NumberRange],
  name: 'NumberRangeInput',
  resolve: (value) => ((value as NumberValueModel).value ? Number : NumberRange),
});
