import { type ProductItemModel } from '@lib/model/commerce/ProductItem/ProductItem.models';
import { type EntityResourceModel } from '@lib/model/core/EntityResource/EntityResource.models';

export type OrderModel = EntityResourceModel & {
  items?: Array<ProductItemModel>;

  paymentMethodId?: string;

  status?: ORDER_STATUS;
};

export enum ORDER_STATUS {
  CANCELED = 'canceled',
  COMPLETED = 'completed',
  REFUNDED = 'refunded',
}
