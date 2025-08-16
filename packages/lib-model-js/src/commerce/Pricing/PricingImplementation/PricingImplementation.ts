import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { createEmbeddedResourceImplementation } from '@lib/backend/resource/utils/createEmbeddedResourceImplementation/createEmbeddedResourceImplementation';
import { Pricing } from '@lib/model/commerce/Pricing/Pricing.entity';
import { PRICING_RESOURCE_NAME } from '@lib/model/commerce/Pricing/Pricing.constants';
import { type PricingModel } from '@lib/model/commerce/Pricing/Pricing.models';
import { type PricingImplementationModel } from '@lib/model/commerce/Pricing/PricingImplementation/PricingImplementation.models';
import { type ProductModel } from '@lib/model/commerce/Product/Product.models';
import { ProductImplementation } from '@lib/model/commerce/Product/ProductImplementation/ProductImplementation';

@withContainer()
export class PricingImplementation
  extends createEmbeddedResourceImplementation<PricingModel, ProductModel>({
    Resource: Pricing,
    RootImplementation: ProductImplementation,
    name: PRICING_RESOURCE_NAME,
  })
  implements PricingImplementationModel {}
