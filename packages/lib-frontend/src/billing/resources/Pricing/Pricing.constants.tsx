import { type UseResourceParamsModel } from '@lib/frontend/resource/hooks/useResource/useResource.models';
import { PRICING_RESOURCE_NAME } from '@lib/shared/billing/resources/Pricing/Pricing.constants';
import {
  type PricingFormModel,
  type PricingModel,
} from '@lib/shared/billing/resources/Pricing/Pricing.models';
import { type ProductModel } from '@lib/shared/billing/resources/Product/Product.models';

export const PRICING_RESOURCE_PARAMS = {
  fields: [{ id: '_id' }],
  name: PRICING_RESOURCE_NAME,
} satisfies UseResourceParamsModel<PricingModel, PricingFormModel, ProductModel>;
