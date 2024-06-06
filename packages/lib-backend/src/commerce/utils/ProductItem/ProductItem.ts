import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { type ProductItemModel } from '@lib/shared/commerce/utils/ProductItem/ProductItem.models';
import { DATA_TYPE } from '@lib/shared/data/data.constants';

@withEntity({ name: 'ProductItem' })
export class ProductItem implements ProductItemModel {
  @withField({ type: DATA_TYPE.STRING })
  name!: string;

  @withField({ isOptional: true, type: DATA_TYPE.NUMBER })
  price?: number;

  @withField({ type: DATA_TYPE.STRING })
  pricingId!: string;

  @withField({ type: DATA_TYPE.STRING })
  productId!: string;

  @withField({ isOptional: true, type: DATA_TYPE.NUMBER })
  quantity?: number;
}
