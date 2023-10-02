import { createUnion } from '#lib-backend/resource/utils/createUnion/createUnion';
import { withField } from '#lib-backend/resource/utils/withField/withField';
import { DATA_TYPE } from '#lib-shared/data/data.constants';
import { type PrimitiveValueModel } from '#lib-shared/resource/utils/PrimitiveValue/PrimitiveValue.models';

export class BooleanValue {
  @withField({ type: DATA_TYPE.BOOLEAN })
  value!: boolean;
}

export class DateValue {
  @withField({ type: DATA_TYPE.DATE })
  value!: Date;
}

export class IntegerValue {
  @withField({ type: DATA_TYPE.NUMBER })
  value!: number;
}

export class StringValue {
  @withField({ type: DATA_TYPE.STRING })
  value!: string;
}

export const PrimitiveValue = createUnion<PrimitiveValueModel>({
  Resource: [BooleanValue, DateValue, IntegerValue, StringValue],
  name: 'PrimitiveValue',
});
