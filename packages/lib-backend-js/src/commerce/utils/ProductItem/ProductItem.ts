import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { type ProductItemModel } from '@lib/model/commerce/ProductItem/ProductItem.models';
import { DATA_TYPE } from '@lib/shared/data/data.constants';

@withEntity({ name: 'ProductItem' })
export class ProductItem implements ProductItemModel {
  @withField()
  name!: string;

  @withField({ isOptional: true, type: DATA_TYPE.NUMBER })
  price?: number;

  @withField()
  pricingId!: string;

  @withField()
  productId!: string;

  @withField({ isOptional: true, type: DATA_TYPE.NUMBER })
  quantity?: number;
}
