import { type ProductItemModel } from '@lib/model/commerce/ProductItem/ProductItem.models';
import { type PartialArrayModel } from '@lib/shared/core/core.models';

export type PaymentInputModel = {
  paymentMethodId?: string;

  products?: PartialArrayModel<ProductItemModel>;
};
