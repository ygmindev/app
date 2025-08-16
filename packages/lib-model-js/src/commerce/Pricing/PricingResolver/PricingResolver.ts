import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { withResolver } from '@lib/backend/http/utils/withResolver/withResolver';
import { createEmbeddedResourceResolver } from '@lib/backend/resource/utils/createEmbeddedResourceResolver/createEmbeddedResourceResolver';
import { Pricing } from '@lib/model/commerce/Pricing/Pricing.entity';
import { PRICING_RESOURCE_NAME } from '@lib/model/commerce/Pricing/Pricing.constants';
import { type PricingModel } from '@lib/model/commerce/Pricing/Pricing.models';
import { PricingImplementation } from '@lib/model/commerce/Pricing/PricingImplementation/PricingImplementation';
import { type PricingResolverModel } from '@lib/model/commerce/Pricing/PricingResolver/PricingResolver.models';
import { Product } from '@lib/model/commerce/Product/Product.entity';
import { type ProductModel } from '@lib/model/commerce/Product/Product.models';

@withContainer()
@withResolver({ Resource: () => Pricing })
export class PricingResolver
  extends createEmbeddedResourceResolver<PricingModel, ProductModel>({
    Resource: () => Pricing,
    ResourceImplementation: PricingImplementation,
    RootResource: () => Product,
    name: PRICING_RESOURCE_NAME,
  })
  implements PricingResolverModel {}
