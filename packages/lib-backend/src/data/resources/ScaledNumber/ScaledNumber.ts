import { withEntity } from '#lib-backend/resource/utils/withEntity/withEntity';
import { withField } from '#lib-backend/resource/utils/withField/withField';
import { type NumberUnitModel } from '#lib-frontend/data/data.models';
import { DATA_TYPE } from '#lib-shared/data/data.constants';
import { type ScaledNumberModel } from '#lib-shared/data/resources/ScaledNumber/ScaledNumber.models';

@withEntity({ name: 'ScaledNumber' })
export class ScaledNumber<TType extends NumberUnitModel> implements ScaledNumberModel<TType> {
  @withField({ isOptional: true, type: DATA_TYPE.STRING })
  unit?: TType;

  @withField({ isOptional: true, type: DATA_TYPE.NUMBER })
  value?: number;
}
