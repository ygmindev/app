import { type ProductItemModel } from '@lib/shared/commerce/utils/ProductItem/ProductItem.models';
import { type PartialModel } from '@lib/shared/core/core.models';
import { type EntityResourceModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';

export type OrderModel = EntityResourceModel & {
  items?: Array<PartialModel<ProductItemModel>>;
  paymentMethodId?: string;
};
