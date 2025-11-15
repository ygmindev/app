import { type RefModel } from '@lib/backend/resource/utils/RefModel/RefModel.models';
import { withDatabaseField } from '@lib/backend/resource/utils/withDatabaseField/withDatabaseField';
import { withEmbeddedEntity } from '@lib/backend/resource/utils/withEmbeddedEntity/withEmbeddedEntity';
import { withManyToOneField } from '@lib/backend/resource/utils/withManyToOneField/withManyToOneField';
import {
  PRICING_FREQUENCY,
  PRICING_RESOURCE_NAME,
} from '@lib/model/commerce/Pricing/Pricing.constants';
import { type PricingModel } from '@lib/model/commerce/Pricing/Pricing.models';
import { PRODUCT_RESOURCE_NAME } from '@lib/model/commerce/Product/Product.constants';
import { Product } from '@lib/model/commerce/Product/Product.entity';
import { ProductModel } from '@lib/model/commerce/Product/Product.models';
import { EmbeddedResource } from '@lib/model/resource/EmbeddedResource/EmbeddedResource';
import { DATA_TYPE } from '@lib/shared/data/data.constants';

@withEmbeddedEntity({ name: PRICING_RESOURCE_NAME })
export class Pricing extends EmbeddedResource implements PricingModel {
  @withManyToOneField({ Resource: () => Product })
  [PRODUCT_RESOURCE_NAME]!: RefModel<ProductModel>;

  @withDatabaseField({ isOptional: true })
  currency?: string;

  @withDatabaseField({ isOptional: true })
  frequency?: PRICING_FREQUENCY;

  @withDatabaseField({ isOptional: true, type: DATA_TYPE.NUMBER })
  price?: number;
}

export default Pricing;
