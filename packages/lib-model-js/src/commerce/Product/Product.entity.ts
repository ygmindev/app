import { withEmbeddedField } from '@lib/backend/resource/utils/withEmbeddedField/withEmbeddedField';
import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { PRICING_RESOURCE_NAME } from '@lib/model/commerce/Pricing/Pricing.constants';
import { Pricing } from '@lib/model/commerce/Pricing/Pricing.entity';
import { type PricingModel } from '@lib/model/commerce/Pricing/Pricing.models';
import { PRODUCT_RESOURCE_NAME } from '@lib/model/commerce/Product/Product.constants';
import { type ProductModel } from '@lib/model/commerce/Product/Product.models';
import { EntityResource } from '@lib/model/resource/EntityResource/EntityResource';
import { PartialArrayModel } from '@lib/shared/core/core.models';

@withEntity({ isDatabase: true, name: PRODUCT_RESOURCE_NAME })
export class Product extends EntityResource implements ProductModel {
  @withEmbeddedField({ Resource: () => Pricing })
  [PRICING_RESOURCE_NAME]?: PartialArrayModel<PricingModel>;

  @withField({ isDatabase: true, isOptional: true })
  description?: string;

  @withField({ isOptional: true })
  imageSrc?: Array<string>;

  @withField({ isDatabase: true })
  name!: string;
}

export default Product;
