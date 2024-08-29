import { type ProductItemModel } from '@lib/shared/commerce/utils/ProductItem/ProductItem.models';
import { type PartialModel } from '@lib/shared/core/core.models';

export type GetPriceParamsModel = Array<PartialModel<ProductItemModel>>;

export type GetPriceModel = number;
