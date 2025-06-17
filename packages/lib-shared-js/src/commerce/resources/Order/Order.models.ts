import { type ORDER_STATUS } from '@lib/shared/commerce/resources/Order/Order.constants';
import { type ProductItemModel } from '@lib/shared/commerce/utils/ProductItem/ProductItem.models';
import { type PartialModel } from '@lib/shared/core/core.models';
import { type EntityResourceModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';

export type OrderStatusModel = `${ORDER_STATUS}`;

export type OrderModel = EntityResourceModel & {
  items?: Array<PartialModel<ProductItemModel>>;
  paymentMethodId?: string;
  status?: OrderStatusModel;
};
