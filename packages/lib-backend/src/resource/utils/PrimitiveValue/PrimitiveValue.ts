import { createUnion } from '#lib-backend/resource/utils/createUnion/createUnion';
import { withEntity } from '#lib-backend/resource/utils/withEntity/withEntity';
import { withField } from '#lib-backend/resource/utils/withField/withField';
import { DATA_TYPE } from '#lib-shared/data/data.constants';
import { type PrimitiveValueModel } from '#lib-shared/resource/utils/PrimitiveValue/PrimitiveValue.models';

@withEntity({ name: 'BooleanValue' })
export class BooleanValue {
  @withField({ type: DATA_TYPE.BOOLEAN })
  value!: boolean;
}

@withEntity({ name: 'DateValue' })
export class DateValue {
  @withField({ type: DATA_TYPE.DATE })
  value!: Date;
}

@withEntity({ name: 'IntegerValue' })
export class IntegerValue {
  @withField({ type: DATA_TYPE.NUMBER })
  value!: number;
}

@withEntity({ name: 'StringValue' })
export class StringValue {
  @withField({ type: DATA_TYPE.STRING })
  value!: string;
}

export const PrimitiveValue = createUnion<PrimitiveValueModel>({
  Resource: [BooleanValue, DateValue, IntegerValue, StringValue],
  name: 'PrimitiveValue',
});
