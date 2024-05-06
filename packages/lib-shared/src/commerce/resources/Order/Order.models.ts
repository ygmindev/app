import { type ProductItemModel } from '@lib/shared/commerce/utils/ProductItem/ProductItem.models';
import { type PartialModel } from '@lib/shared/core/core.models';
import {
  type EntityResourceDataModel,
  type EntityResourceModel,
} from '@lib/shared/resource/resources/EntityResource/EntityResource.models';

export type OrderModel = EntityResourceModel & {
  paymentMethodId?: string;
  products?: Array<PartialModel<ProductItemModel>>;
};

export type OrderFormModel = EntityResourceDataModel<OrderModel>;
