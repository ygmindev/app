import { type RefFieldModel } from '@lib/backend/resource/utils/RefField/RefField.models';
import { type PRODUCT_RESOURCE_NAME } from '@lib/shared/commerce/resources/Product/Product.constants';
import { type ProductModel } from '@lib/shared/commerce/resources/Product/Product.models';
import { type EntityResourceModel } from '@lib/model/core/EntityResource/EntityResource.models';

export enum PRICING_FREQUENCY {
  RECURRING = 'recurring',
}

export type PricingModel = EntityResourceModel & {
  [PRODUCT_RESOURCE_NAME]?: RefFieldModel<ProductModel>;

  currency?: string;

  frequency?: PricingFrequencyModel;

  price?: number;
};

export type PricingFrequencyModel = `${PRICING_FREQUENCY}`;
