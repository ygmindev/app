import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { type TimingModel } from '@lib/shared/aroom/aroom.models';
import { type PriceTierModel } from '@lib/shared/aroom/utils/PriceTier/PriceTier.models';
import { DATA_TYPE } from '@lib/shared/data/data.constants';

@withEntity({ name: 'PriceTier' })
export class PriceTier implements PriceTierModel {
  @withField({ type: DATA_TYPE.NUMBER })
  price!: number;

  @withField({ type: DATA_TYPE.STRING })
  timing!: TimingModel;
}
