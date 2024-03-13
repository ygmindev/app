import { type CartItemModel } from '@lib/shared/commerce/utils/CartItem/CartItem.models';

export type CheckoutButtonPropsModel = {
  items?: Array<CartItemModel>;
};
