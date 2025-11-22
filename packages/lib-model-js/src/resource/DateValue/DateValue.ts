import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { type DateValueModel } from '@lib/model/resource/DateValue/DateValue.models';

@withEntity({ isAbstract: true })
export class DateValue implements DateValueModel {
  @withField({ Resource: () => Date })
  value!: Date;
}
