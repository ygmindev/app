import { Pricing } from '@lib/backend/billing/resources/Pricing/Pricing';
import { ProductImplementation } from '@lib/backend/billing/resources/Product/ProductImplementation/ProductImplementation';
import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { createEmbeddedResourceImplementation } from '@lib/backend/resource/utils/createEmbeddedResourceImplementation/createEmbeddedResourceImplementation';
import { PRICING_RESOURCE_NAME } from '@lib/shared/billing/resources/Pricing/Pricing.constants';
import {
  type PricingFormModel,
  type PricingModel,
} from '@lib/shared/billing/resources/Pricing/Pricing.models';
import { type PricingImplementationModel } from '@lib/shared/billing/resources/Pricing/PricingImplementation/PricingImplementation.models';
import {
  type ProductFormModel,
  type ProductModel,
} from '@lib/shared/billing/resources/Product/Product.models';

@withContainer()
export class PricingImplementation
  extends createEmbeddedResourceImplementation<
    PricingModel,
    PricingFormModel,
    ProductModel,
    ProductFormModel
  >({
    Resource: Pricing,
    RootImplementation: ProductImplementation,
    name: PRICING_RESOURCE_NAME,
  })
  implements PricingImplementationModel {}
