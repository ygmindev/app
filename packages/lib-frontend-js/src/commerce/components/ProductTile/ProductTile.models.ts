import { type ProductModel } from '@lib/model/commerce/Product/Product.models';
import { type PartialModel } from '@lib/shared/core/core.models';

export type ProductTilePropsModel = {
  product: PartialModel<ProductModel>;
};
