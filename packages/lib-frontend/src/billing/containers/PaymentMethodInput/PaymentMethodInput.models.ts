import { type NewPaymentMethodInputRefModel } from '@lib/frontend/billing/components/NewPaymentMethodInput/NewPaymentMethodInput.models';
import { type InputPropsModel } from '@lib/frontend/data/data.models';
import { type ProductItemModel } from '@lib/shared/commerce/utils/ProductItem/ProductItem.models';
import { type PartialModel } from '@lib/shared/core/core.models';

export type PaymentMethodInputPropsModel = InputPropsModel & {
  products?: Array<PartialModel<ProductItemModel>>;
};

export type PaymentMethodInputRefModel = NewPaymentMethodInputRefModel;
