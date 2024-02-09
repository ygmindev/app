import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { type PriceModel } from '@lib/shared/billing/utils/Price/Price.models';
import { DATA_TYPE } from '@lib/shared/data/data.constants';

@withEntity({ name: 'Price' })
export class Price implements PriceModel {
  @withField({ type: DATA_TYPE.STRING })
  currency!: string;

  @withField({ type: DATA_TYPE.NUMBER })
  value!: number;
}
