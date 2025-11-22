import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { type NumberValueModel } from '@lib/model/resource/NumberValue/NumberValue.models';

@withEntity({ isAbstract: true })
export class NumberValue implements NumberValueModel {
  @withField()
  value!: number;
}
