import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { type DATE_UNIT } from '@lib/shared/datetime/datetime.constants';
import { type PeriodModel } from '@lib/shared/datetime/utils/Period/Period.models';

@withEntity({ name: 'Period' })
export class Period implements PeriodModel {
  @withField()
  unit!: DATE_UNIT;

  @withField()
  value!: number;
}
