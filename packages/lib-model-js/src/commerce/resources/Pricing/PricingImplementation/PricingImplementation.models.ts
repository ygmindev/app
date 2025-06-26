import { type PricingModel } from '@lib/shared/commerce/resources/Pricing/Pricing.models';
import { type ProductModel } from '@lib/shared/commerce/resources/Product/Product.models';
import { type EmbeddedResourceImplementationModel } from '@lib/shared/resource/resources/EmbeddedResource/EmbeddedResourceImplementation/EmbeddedResourceImplementation.models';

export type PricingImplementationModel = EmbeddedResourceImplementationModel<
  PricingModel,
  ProductModel
>;
