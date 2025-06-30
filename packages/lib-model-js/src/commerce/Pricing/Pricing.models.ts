import { type RefFieldModel } from '@lib/backend/resource/utils/RefField/RefField.models';
import { type PRICING_FREQUENCY } from '@lib/model/commerce/Pricing/Pricing.constants';
import { type PRODUCT_RESOURCE_NAME } from '@lib/model/commerce/Product/Product.constants';
import { type ProductModel } from '@lib/model/commerce/Product/Product.models';
import { type EntityResourceModel } from '@lib/model/resource/EntityResource/EntityResource.models';

export type PricingModel = EntityResourceModel & {
  [PRODUCT_RESOURCE_NAME]?: RefFieldModel<ProductModel>;

  currency?: string;

  frequency?: PRICING_FREQUENCY;

  price?: number;
};
