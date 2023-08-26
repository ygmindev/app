import {
  type NumberBoundModel,
  type NumberRangeModel,
  type NumberValueModel,
} from '#lib-backend/form/resources/NumberRange/NumberRange.models';
import { createUnion } from '#lib-backend/resource/utils/createUnion/createUnion';
import { withEntity } from '#lib-backend/resource/utils/withEntity/withEntity';
import { withField } from '#lib-backend/resource/utils/withField/withField';
import { FIELD_TYPE } from '#lib-shared/form/form.constants';

@withEntity({ name: 'NumberValue' })
export class NumberValue implements NumberValueModel {
  @withField({ type: FIELD_TYPE.NUMBER })
  value?: number;
}

@withEntity({ name: 'NumberBound' })
export class NumberBound implements NumberBoundModel {
  @withField({ type: FIELD_TYPE.NUMBER })
  max?: number;

  @withField({ type: FIELD_TYPE.NUMBER })
  min?: number;
}

export const NumberRange = createUnion<NumberRangeModel>({
  Resource: [NumberValue, NumberBound],
  name: 'NumberRange',
  resolve: (value) => ((value as NumberValueModel).value ? NumberValue : NumberBound),
});
