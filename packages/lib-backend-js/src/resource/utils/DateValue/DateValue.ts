import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { DATA_TYPE } from '@lib/shared/data/data.constants';
import { type DateValueModel } from '@lib/shared/resource/utils/DateValue/DateValue.models';

@withEntity({ isAbstract: true })
export class DateValue implements DateValueModel {
  @withField({ Resource: () => Date })
  value!: Date;
}
