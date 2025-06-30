import { type CollectionModel } from '@lib/backend/core/utils/Collection/Collection.models';
import { type PRICING_RESOURCE_NAME } from '@lib/model/commerce/Pricing/Pricing.constants';
import { type PricingModel } from '@lib/model/commerce/Pricing/Pricing.models';
import { type EntityResourceModel } from '@lib/model/resource/EntityResource/EntityResource.models';

export type ProductModel = EntityResourceModel & {
  [PRICING_RESOURCE_NAME]?: CollectionModel<PricingModel>;

  description?: string;

  imageSrc?: Array<string>;

  name: string;
};
