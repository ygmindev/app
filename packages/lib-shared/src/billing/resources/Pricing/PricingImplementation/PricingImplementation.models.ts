import {
  type PricingFormModel,
  type PricingModel,
} from '@lib/shared/billing/resources/Pricing/Pricing.models';
import { type ProductModel } from '@lib/shared/billing/resources/Product/Product.models';
import { type EmbeddedResourceImplementationModel } from '@lib/shared/resource/resources/EmbeddedResource/EmbeddedResourceImplementation/EmbeddedResourceImplementation.models';

export type PricingImplementationModel = EmbeddedResourceImplementationModel<
  PricingModel,
  PricingFormModel,
  ProductModel
>;
