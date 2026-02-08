import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { DATA_TYPE } from '@lib/shared/data/data.constants';
import { type NumberRangeModel } from '@lib/shared/data/utils/NumberRange/NumberRange.models';

// TODO: move to model?
@withEntity({ name: 'NumberRange' })
export class NumberRange implements NumberRangeModel {
  @withField({ isOptional: true, type: DATA_TYPE.NUMBER })
  max?: number;

  @withField({ isOptional: true, type: DATA_TYPE.NUMBER })
  min?: number;
}
