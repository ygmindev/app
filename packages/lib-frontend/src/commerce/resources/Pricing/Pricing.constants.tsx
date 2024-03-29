import { type UseResourceParamsModel } from '@lib/frontend/resource/hooks/useResource/useResource.models';
import {
  PRICING_FREQUENCY,
  PRICING_RESOURCE_NAME,
} from '@lib/shared/commerce/resources/Pricing/Pricing.constants';
import {
  type PricingFormModel,
  type PricingModel,
} from '@lib/shared/commerce/resources/Pricing/Pricing.models';
import { type ProductModel } from '@lib/shared/commerce/resources/Product/Product.models';
import { DATA_TYPE } from '@lib/shared/data/data.constants';

export const PRICING_RESOURCE_PARAMS = {
  fields: [
    { id: '_id' },
    { id: 'frequency', options: Object.values(PRICING_FREQUENCY).map((id) => ({ id })) },
    { id: 'price', type: DATA_TYPE.NUMBER },
  ],
  name: PRICING_RESOURCE_NAME,
} satisfies UseResourceParamsModel<PricingModel, PricingFormModel, ProductModel>;
