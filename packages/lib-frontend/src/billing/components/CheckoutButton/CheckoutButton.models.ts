import { type ProductSummaryModel } from '@lib/shared/commerce/resources/Product/Product.models';

export type CheckoutButtonPropsModel = {
  products?: Array<ProductSummaryModel>;
};
