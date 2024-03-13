import { PRICING_RESOURCE_NAME } from '@lib/shared/commerce/resources/Pricing/Pricing.constants';
import {
  type GetPriceModel,
  type GetPriceParamsModel,
} from '@lib/shared/commerce/utils/getPrice/getPrice.models';

export const getPrice = (products?: GetPriceParamsModel): GetPriceModel =>
  products?.reduce(
    (result, product) =>
      result +
      (product[PRICING_RESOURCE_NAME]?.reduce(
        (pricingResult, pricing) => pricingResult + (pricing.price ?? 0),
        0,
      ) ?? 0),
    0,
  ) ?? 0;
