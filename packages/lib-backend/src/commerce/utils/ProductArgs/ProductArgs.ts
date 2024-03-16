import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { type ProductArgsModel } from '@lib/shared/commerce/utils/ProductArgs/ProductArgs.models';
import { DATA_TYPE } from '@lib/shared/data/data.constants';

@withEntity({ name: 'ProductArgs' })
export class ProductArgs implements ProductArgsModel {
  @withField({ type: DATA_TYPE.STRING })
  name!: string;

  @withField({ type: DATA_TYPE.NUMBER })
  price!: number;

  @withField({ type: DATA_TYPE.STRING })
  pricingId!: string;

  @withField({ type: DATA_TYPE.STRING })
  productId!: string;

  @withField({ isOptional: true, type: DATA_TYPE.NUMBER })
  quantity?: number;
}
