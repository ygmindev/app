import { Pricing } from '@lib/backend/commerce/resources/Pricing/Pricing';
import { PricingImplementation } from '@lib/backend/commerce/resources/Pricing/PricingImplementation/PricingImplementation';
import { type PricingResolverModel } from '@lib/backend/commerce/resources/Pricing/PricingResolver/PricingResolver.models';
import { Product } from '@lib/backend/commerce/resources/Product/Product';
import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { withResolver } from '@lib/backend/http/utils/withResolver/withResolver';
import { createEmbeddedResourceResolver } from '@lib/backend/resource/utils/createEmbeddedResourceResolver/createEmbeddedResourceResolver';
import { PRICING_RESOURCE_NAME } from '@lib/shared/commerce/resources/Pricing/Pricing.constants';
import { type PricingModel } from '@lib/shared/commerce/resources/Pricing/Pricing.models';
import { type ProductModel } from '@lib/shared/commerce/resources/Product/Product.models';

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
