import { type PRICING_RESOURCE_NAME } from '@lib/shared/commerce/resources/Pricing/Pricing.constants';
import { type PricingModel } from '@lib/shared/commerce/resources/Pricing/Pricing.models';
import {
  type EntityResourceDataModel,
  type EntityResourceModel,
} from '@lib/shared/resource/resources/EntityResource/EntityResource.models';

export type ProductModel = EntityResourceModel & {
  [PRICING_RESOURCE_NAME]?: Array<PricingModel>;

  name: string;
};

export type ProductFormModel = EntityResourceDataModel<ProductModel>;

export type ProductSummaryModel = Pick<ProductModel, '_id' | 'name'> & {
  [PRICING_RESOURCE_NAME]?: Array<Pick<PricingModel, '_id' | 'price'>>;
};
