import { withEntity } from '#lib-backend/resource/utils/withEntity/withEntity';
import { withField } from '#lib-backend/resource/utils/withField/withField';
import { type NumberUnitModel } from '#lib-frontend/data/data.models';
import { DATA_TYPE } from '#lib-shared/data/data.constants';
import { type ScaledNumberRangeModel } from '#lib-shared/data/resources/ScaledNumberRange/ScaledNumberRange.models';

@withEntity({ name: 'ScaledNumberRange' })
export class ScaledNumberRange<TType extends NumberUnitModel>
  implements ScaledNumberRangeModel<TType>
{
  @withField({ isOptional: true, type: DATA_TYPE.STRING })
  unit?: TType;

  @withField({ isOptional: true, type: DATA_TYPE.NUMBER })
  min?: number;

  @withField({ isOptional: true, type: DATA_TYPE.NUMBER })
  max?: number;
}
