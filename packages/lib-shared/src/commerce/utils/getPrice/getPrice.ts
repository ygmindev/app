import {
  type GetPriceModel,
  type GetPriceParamsModel,
} from '@lib/shared/commerce/utils/getPrice/getPrice.models';

export const getPrice = (products?: GetPriceParamsModel): GetPriceModel =>
  products?.reduce((result, product) => result + product.price, 0) ?? 0;
