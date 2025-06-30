import { Pricing } from '@lib/backend/commerce/resources/Pricing/Pricing';
import { ProductImplementation } from '@lib/backend/commerce/resources/Product/ProductImplementation/ProductImplementation';
import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { createEmbeddedResourceImplementation } from '@lib/backend/resource/utils/createEmbeddedResourceImplementation/createEmbeddedResourceImplementation';
import { PRICING_RESOURCE_NAME } from '@lib/model/commerce/Pricing/Pricing.constants';
import { type PricingModel } from '@lib/shared/commerce/resources/Pricing/Pricing.models';
import { type PricingImplementationModel } from '@lib/model/commerce/Pricing/PricingImplementation/PricingImplementation.models';
import { type ProductModel } from '@lib/shared/commerce/resources/Product/Product.models';

@withContainer()
export class PricingImplementation
  extends createEmbeddedResourceImplementation<PricingModel, ProductModel>({
    Resource: Pricing,
    RootImplementation: ProductImplementation,
    name: PRICING_RESOURCE_NAME,
  })
  implements PricingImplementationModel {}
