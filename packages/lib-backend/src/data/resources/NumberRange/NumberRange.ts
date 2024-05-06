import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { DATA_TYPE } from '@lib/shared/data/data.constants';
import { type NumberRangeModel } from '@lib/shared/data/resources/NumberRange/NumberRange.models';

@withEntity({ name: 'NumberRange' })
export class NumberRange implements NumberRangeModel {
  @withField({ isOptional: true, type: DATA_TYPE.NUMBER })
  min?: number;

  @withField({ isOptional: true, type: DATA_TYPE.NUMBER })
  max?: number;
}
