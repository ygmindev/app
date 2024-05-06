import { type PRICING_FREQUENCY } from '@lib/shared/commerce/resources/Pricing/Pricing.constants';
import { type PRODUCT_RESOURCE_NAME } from '@lib/shared/commerce/resources/Product/Product.constants';
import { type ProductModel } from '@lib/shared/commerce/resources/Product/Product.models';
import { type EmbeddedResourceModel } from '@lib/shared/resource/resources/EmbeddedResource/EmbeddedResource.models';
import { type EntityResourceDataModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';

export type PricingModel = EmbeddedResourceModel & {
  [PRODUCT_RESOURCE_NAME]?: ProductModel;

  currency?: string;

  frequency?: PricingFrequencyModel;

  price: number;
};

export type PricingFormModel = EntityResourceDataModel<PricingModel>;

export type PricingFrequencyModel = `${PRICING_FREQUENCY}`;
