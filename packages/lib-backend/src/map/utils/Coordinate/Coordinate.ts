import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { DATA_TYPE } from '@lib/shared/data/data.constants';
import { type CoordinateModel } from '@lib/shared/map/utils/Coordinate/Coordinate.models';

@withEntity({ name: 'Coordinate' })
export class Coordinate implements CoordinateModel {
  @withField({ type: DATA_TYPE.NUMBER })
  latitude!: number;

  @withField({ type: DATA_TYPE.NUMBER })
  longitude!: number;
}
