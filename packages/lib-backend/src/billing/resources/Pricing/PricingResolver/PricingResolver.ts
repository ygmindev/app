import { Pricing } from '@lib/backend/billing/resources/Pricing/Pricing';
import { PricingImplementation } from '@lib/backend/billing/resources/Pricing/PricingImplementation/PricingImplementation';
import { type PricingResolverModel } from '@lib/backend/billing/resources/Pricing/PricingResolver/PricingResolver.models';
import { Product } from '@lib/backend/billing/resources/Product/Product';
import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { withResolver } from '@lib/backend/http/utils/withResolver/withResolver';
import { createEmbeddedResourceResolver } from '@lib/backend/resource/utils/createEmbeddedResourceResolver/createEmbeddedResourceResolver';
import { PRICING_RESOURCE_NAME } from '@lib/shared/billing/resources/Pricing/Pricing.constants';
import {
  type PricingFormModel,
  type PricingModel,
} from '@lib/shared/billing/resources/Pricing/Pricing.models';
import { type ProductModel } from '@lib/shared/billing/resources/Product/Product.models';

@withContainer()
@withResolver({ Resource: () => Pricing })
export class PricingResolver
  extends createEmbeddedResourceResolver<PricingModel, PricingFormModel, ProductModel>({
    Resource: () => Pricing,
    ResourceImplementation: PricingImplementation,
    RootResource: () => Product,
    name: PRICING_RESOURCE_NAME,
  })
  implements PricingResolverModel {}
