import { type CollectionModel } from '@lib/backend/resource/utils/Collection/Collection.models';
import { type PRICING_RESOURCE_NAME } from '@lib/shared/commerce/resources/Pricing/Pricing.constants';
import { type PricingModel } from '@lib/shared/commerce/resources/Pricing/Pricing.models';
import {
  type EntityResourceDataModel,
  type EntityResourceModel,
} from '@lib/shared/resource/resources/EntityResource/EntityResource.models';

export type ProductModel = EntityResourceModel & {
  [PRICING_RESOURCE_NAME]?: CollectionModel<PricingModel>;

  description?: string;

  imageSrc?: Array<string>;

  name: string;
};

export type ProductFormModel = EntityResourceDataModel<ProductModel>;
