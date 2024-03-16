import { type ProductArgsModel } from '@lib/shared/commerce/utils/ProductArgs/ProductArgs.models';

export type PaymentArgsModel = {
  paymentMethodId?: string;
  products?: Array<ProductArgsModel>;
};
