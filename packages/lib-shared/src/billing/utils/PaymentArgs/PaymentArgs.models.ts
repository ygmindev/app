import { type ProductItemModel } from '@lib/shared/commerce/utils/ProductItem/ProductItem.models';
import { type PartialModel } from '@lib/shared/core/core.models';

export type PaymentArgsModel = {
  paymentMethodId?: string;
  products?: Array<PartialModel<ProductItemModel>>;
};
