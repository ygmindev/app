import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { type NumberValueModel } from '@lib/shared/resource/utils/NumberValue/NumberValue.models';

@withEntity({ isAbstract: true })
export class NumberValue implements NumberValueModel {
  @withField()
  value!: number;
}
