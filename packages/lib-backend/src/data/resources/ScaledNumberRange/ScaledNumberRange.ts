import { withEntity } from '#lib-backend/resource/utils/withEntity/withEntity';
import { withField } from '#lib-backend/resource/utils/withField/withField';
import { DATA_TYPE } from '#lib-shared/data/data.constants';
import { type ScaledNumberModel } from '#lib-shared/data/data.models';
import { type ScaledNumberRangeModel } from '#lib-shared/data/resources/ScaledNumberRange/ScaledNumberRange.models';

@withEntity({ name: 'ScaledNumber' })
class ScaledNumber<TType> implements ScaledNumberModel<TType> {
  @withField({ type: DATA_TYPE.STRING })
  unit!: TType;

  @withField({ type: DATA_TYPE.NUMBER })
  value!: number;
}

@withEntity({ name: 'ScaledNumberRange' })
export class ScaledNumberRange<TType> implements ScaledNumberRangeModel<TType> {
  @withField({ Resource: ScaledNumber<TType>, type: DATA_TYPE.NUMBER })
  max?: ScaledNumberModel<TType>;

  @withField({ Resource: ScaledNumber<TType>, type: DATA_TYPE.NUMBER })
  value?: ScaledNumberModel<TType>;
}