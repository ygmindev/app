import { type PRICING_RESOURCE_NAME } from '@lib/shared/commerce/resources/Pricing/Pricing.constants';
import { type PricingModel } from '@lib/shared/commerce/resources/Pricing/Pricing.models';
import { type ProductModel } from '@lib/shared/commerce/resources/Product/Product.models';
import { type PartialModel } from '@lib/shared/core/core.models';

export type ProductArgsModel = PartialModel<Pick<ProductModel, '_id' | 'name'>> & {
  [PRICING_RESOURCE_NAME]?: Array<PartialModel<Pick<PricingModel, '_id' | 'price'>>>;

  quantity?: number;
};
