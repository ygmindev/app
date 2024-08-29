import { type PagePropsModel } from '@lib/frontend/core/core.models';
import { type ProductModel } from '@lib/shared/commerce/resources/Product/Product.models';
import { type PartialModel } from '@lib/shared/core/core.models';
import { type WithIdModel } from '@lib/shared/core/utils/withId/withId.models';

export type ProductPagePropsModel = PagePropsModel<{
  product: PartialModel<ProductModel>;
}>;

export type ProductPageParamsModel = WithIdModel;
