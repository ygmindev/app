import { type CartItemModel } from '@lib/shared/commerce/utils/CartItem/CartItem.models';

export type PaymentArgsModel = {
  items?: Array<CartItemModel>;
  paymentMethodId?: string;
};
