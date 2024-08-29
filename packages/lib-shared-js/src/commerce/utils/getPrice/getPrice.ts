import {
  type GetPriceModel,
  type GetPriceParamsModel,
} from '@lib/shared/commerce/utils/getPrice/getPrice.models';

export const getPrice = (items?: GetPriceParamsModel): GetPriceModel =>
  items?.reduce((result, item) => result + (item.price ?? 0) * (item.quantity ?? 1), 0) ?? 0;
