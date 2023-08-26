import { type ScaledNumberRangeModel } from '#lib-backend/form/resources/ScaledNumberRange/ScaledNumberRange.models';
import { withEntity } from '#lib-backend/resource/utils/withEntity/withEntity';
import { withField } from '#lib-backend/resource/utils/withField/withField';
import { FIELD_TYPE } from '#lib-shared/form/form.constants';
import { type ScaledNumberModel } from '#lib-shared/form/form.models';

@withEntity({ name: 'ScaledNumber' })
class ScaledNumber implements ScaledNumberModel {
  @withField({ type: FIELD_TYPE.STRING })
  unit!: string;

  @withField({ type: FIELD_TYPE.NUMBER })
  value!: number;
}

@withEntity({ name: 'ScaledNumberRange' })
export class ScaledNumberRange implements ScaledNumberRangeModel {
  @withField({ Resource: ScaledNumber, type: FIELD_TYPE.NUMBER })
  max?: ScaledNumberModel;

  @withField({ Resource: ScaledNumber, type: FIELD_TYPE.NUMBER })
  value?: ScaledNumberModel;
}
