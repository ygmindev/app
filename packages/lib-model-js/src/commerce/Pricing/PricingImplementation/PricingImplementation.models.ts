import { type PricingModel } from '@lib/model/commerce/Pricing/Pricing.models';
import { type ProductModel } from '@lib/model/commerce/Product/Product.models';
import { type EmbeddedResourceImplementationModel } from '@lib/model/resource/EmbeddedResource/EmbeddedResourceImplementation/EmbeddedResourceImplementation.models';

export type PricingImplementationModel = EmbeddedResourceImplementationModel<
  PricingModel,
  ProductModel
>;
