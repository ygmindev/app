import { type ORDER_STATUS } from '@lib/model/commerce/Order/Order.constants';
import { type ProductItemModel } from '@lib/model/commerce/ProductItem/ProductItem.models';
import { type EntityResourceModel } from '@lib/model/resource/EntityResource/EntityResource.models';
import { type PartialArrayModel } from '@lib/shared/core/core.models';

export type OrderModel = EntityResourceModel & {
  items?: PartialArrayModel<ProductItemModel>;

  paymentMethodId?: string;

  status?: ORDER_STATUS;
};
