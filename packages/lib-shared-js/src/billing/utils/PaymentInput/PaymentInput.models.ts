import { type ProductItemModel } from '@lib/model/commerce/ProductItem/ProductItem.models';
import { type PartialModel } from '@lib/shared/core/core.models';

export type PaymentInputModel = {
  paymentMethodId?: string;
  products?: Array<PartialModel<ProductItemModel>>;
};
