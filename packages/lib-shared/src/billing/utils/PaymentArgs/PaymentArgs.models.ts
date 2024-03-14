import { type ProductArgsModel } from '@lib/shared/commerce/resources/Product/Product.models';

export type PaymentArgsModel = {
  paymentMethodId?: string;
  products?: Array<ProductArgsModel>;
};
