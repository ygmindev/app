import { withEntity } from '#lib-backend/resource/utils/withEntity/withEntity';
import { withField } from '#lib-backend/resource/utils/withField/withField';
import { NumberUnitModel } from '#lib-frontend/data/data.models';
import { DATA_TYPE } from '#lib-shared/data/data.constants';
import { type ScaledNumberModel } from '#lib-shared/data/data.models';
import { type ScaledNumberRangeModel } from '#lib-shared/data/resources/ScaledNumberRange/ScaledNumberRange.models';

@withEntity({ name: 'ScaledNumber' })
class ScaledNumber implements ScaledNumberModel {
  @withField({ type: DATA_TYPE.STRING })
  unit!: NumberUnitModel;

  @withField({ type: DATA_TYPE.NUMBER })
  value!: number;
}

@withEntity({ name: 'ScaledNumberRange' })
export class ScaledNumberRange implements ScaledNumberRangeModel {
  @withField({ Resource: ScaledNumber, type: DATA_TYPE.NUMBER })
  max?: ScaledNumberModel;

  @withField({ Resource: ScaledNumber, type: DATA_TYPE.NUMBER })
  value?: ScaledNumberModel;
}
