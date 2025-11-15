import { withDatabaseEntity } from '@lib/backend/resource/utils/withDatabaseEntity/withDatabaseEntity';
import { withDatabaseField } from '@lib/backend/resource/utils/withDatabaseField/withDatabaseField';
import { withEmbeddedField } from '@lib/backend/resource/utils/withEmbeddedField/withEmbeddedField';
import { PRICING_RESOURCE_NAME } from '@lib/model/commerce/Pricing/Pricing.constants';
import { Pricing } from '@lib/model/commerce/Pricing/Pricing.entity';
import { type PricingModel } from '@lib/model/commerce/Pricing/Pricing.models';
import { PRODUCT_RESOURCE_NAME } from '@lib/model/commerce/Product/Product.constants';
import { type ProductModel } from '@lib/model/commerce/Product/Product.models';
import { EntityResource } from '@lib/model/resource/EntityResource/EntityResource';
import { PartialArrayModel } from '@lib/shared/core/core.models';

@withDatabaseEntity({ name: PRODUCT_RESOURCE_NAME })
export class Product extends EntityResource implements ProductModel {
  @withEmbeddedField({ Resource: () => Pricing })
  [PRICING_RESOURCE_NAME]?: PartialArrayModel<PricingModel>;

  @withDatabaseField({ isOptional: true })
  description?: string;

  @withDatabaseField({ isOptional: true })
  imageSrc?: Array<string>;

  @withDatabaseField()
  name!: string;
}

export default Product;
