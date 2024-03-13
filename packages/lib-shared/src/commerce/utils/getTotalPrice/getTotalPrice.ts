import {
  type GetTotalPriceModel,
  type GetTotalPriceParamsModel,
} from '@lib/shared/commerce/utils/getTotalPrice/getTotalPrice.models';

export const getTotalPrice = (items?: GetTotalPriceParamsModel): GetTotalPriceModel =>
  items?.reduce((result, item) => result + item.price * (item.quantity ?? 1), 0) ?? 0;
