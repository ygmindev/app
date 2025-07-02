import { type RefModel } from '@lib/backend/resource/utils/RefModel/RefModel.models';
import { type PRICING_RESOURCE_NAME } from '@lib/model/commerce/Pricing/Pricing.constants';
import { type PricingModel } from '@lib/model/commerce/Pricing/Pricing.models';
import { type EntityResourceModel } from '@lib/model/resource/EntityResource/EntityResource.models';

export type ProductModel = EntityResourceModel & {
  [PRICING_RESOURCE_NAME]?: Array<RefModel<PricingModel>>;

  description?: string;

  imageSrc?: Array<string>;

  name: string;
};
