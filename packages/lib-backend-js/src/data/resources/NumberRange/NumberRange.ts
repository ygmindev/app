import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { type NumberRangeModel } from '@lib/shared/data/utils/NumberRange/NumberRange.models';

@withEntity({ name: 'NumberRange' })
export class NumberRange implements NumberRangeModel {
  @withField({ isOptional: true })
  max?: number;

  @withField({ isOptional: true })
  min?: number;
}
