import {
  type PaymentMethodFormModel,
  type PaymentMethodModel,
} from '@lib/shared/billing/resources/PaymentMethod/PaymentMethod.models';
import { type ProductItemModel } from '@lib/shared/commerce/utils/ProductItem/ProductItem.models';
import { type NilModel, type PartialModel } from '@lib/shared/core/core.models';

export type _NewPaymentMethodInputPropsModel = {
  onCreate?(form: PaymentMethodFormModel): Promise<PartialModel<PaymentMethodModel> | NilModel>;
  products?: Array<PartialModel<ProductItemModel>>;
  redirectTo?: string;
  token: string;
};

export type _NewPaymentMethodInputRefModel = {
  submit(): Promise<PartialModel<PaymentMethodModel> | NilModel>;
};
