import { type RefModel } from '@lib/backend/resource/utils/RefModel/RefModel.models';
import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { withManyToOneField } from '@lib/backend/resource/utils/withManyToOneField/withManyToOneField';
import {
  PRICING_FREQUENCY,
  PRICING_RESOURCE_NAME,
} from '@lib/model/commerce/Pricing/Pricing.constants';
import { type PricingModel } from '@lib/model/commerce/Pricing/Pricing.models';
import { Product } from '@lib/model/commerce/Product/Product';
import { PRODUCT_RESOURCE_NAME } from '@lib/model/commerce/Product/Product.constants';
import { ProductModel } from '@lib/model/commerce/Product/Product.models';
import { EntityResource } from '@lib/model/resource/EntityResource/EntityResource';
import { DATA_TYPE } from '@lib/shared/data/data.constants';

@withEntity({ isDatabase: true, isEmbeddable: true, name: PRICING_RESOURCE_NAME })
export class Pricing extends EntityResource implements PricingModel {
  @withManyToOneField({ Resource: () => Product })
  [PRODUCT_RESOURCE_NAME]!: RefModel<ProductModel>;

  @withField({ isDatabase: true, isOptional: true, type: DATA_TYPE.STRING })
  currency?: string;

  @withField({ isDatabase: true, type: DATA_TYPE.STRING })
  frequency!: PRICING_FREQUENCY;

  @withField({ isDatabase: true, isOptional: true, type: DATA_TYPE.NUMBER })
  price?: number;
}
