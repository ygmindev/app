import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { DATA_TYPE } from '@lib/shared/data/data.constants';
import { type DATE_UNIT } from '@lib/shared/datetime/datetime.constants';
import { type PeriodModel } from '@lib/shared/datetime/utils/Period/Period.models';

@withEntity()
export class Period implements PeriodModel {
  @withField({ type: DATA_TYPE.STRING })
  unit!: DATE_UNIT;

  @withField({ type: DATA_TYPE.NUMBER })
  value!: number;
}
