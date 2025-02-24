import { type RefFieldModel } from '@lib/backend/resource/utils/RefField/RefField.models';
import { type PRICING_RESOURCE_NAME } from '@lib/shared/commerce/resources/Pricing/Pricing.constants';
import { type PricingModel } from '@lib/shared/commerce/resources/Pricing/Pricing.models';
import {
  type EntityResourceDataModel,
  type EntityResourceModel,
} from '@lib/shared/resource/resources/EntityResource/EntityResource.models';

export type ProductModel = EntityResourceModel & {
  [PRICING_RESOURCE_NAME]?: Array<RefFieldModel<PricingModel>>;

  description?: string;

  imageSrc?: Array<string>;

  name: string;
};

export type ProductFormModel = EntityResourceDataModel<ProductModel>;
