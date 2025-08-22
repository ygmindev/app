import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { type StringValueModel } from '@lib/shared/resource/utils/StringValue/StringValue.models';

@withEntity({ isAbstract: true })
export class StringValue implements StringValueModel {
  @withField()
  value!: string;
}
