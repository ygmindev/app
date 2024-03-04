import { type PagePropsModel } from '@lib/frontend/core/core.models';
import { type ProductModel } from '@lib/shared/commerce/resources/Product/Product.models';

export type ProductPagePropsModel = PagePropsModel<{
  product: ProductModel;
}>;
