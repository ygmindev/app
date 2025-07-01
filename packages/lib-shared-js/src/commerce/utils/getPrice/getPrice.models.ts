import { type ProductItemModel } from '@lib/model/commerce/ProductItem/ProductItem.models';
import { type PartialModel } from '@lib/shared/core/core.models';

export type GetPriceParamsModel = Array<PartialModel<ProductItemModel>>;

export type GetPriceModel = number;
