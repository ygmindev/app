import { type UseResourceParamsModel } from '@lib/frontend/resource/hooks/useResource/useResource.models';
import {
  PRICING_FREQUENCY,
  PRICING_RESOURCE_NAME,
} from '@lib/model/commerce/Pricing/Pricing.constants';
import { type PricingModel } from '@lib/model/commerce/Pricing/Pricing.models';
import { type ProductModel } from '@lib/model/commerce/Product/Product.models';
import { DATA_TYPE } from '@lib/shared/data/data.constants';

export const PRICING_RESOURCE_PARAMS = {
  fields: [
    { id: 'frequency', options: Object.values(PRICING_FREQUENCY).map((id) => ({ id })) },
    { id: 'price', type: DATA_TYPE.NUMBER },
  ],
  name: PRICING_RESOURCE_NAME,
} satisfies UseResourceParamsModel<PricingModel, ProductModel>;
