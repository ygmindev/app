import { type PaymentMethodModel } from '@lib/model/billing/PaymentMethod/PaymentMethod.models';
import { type ProductItemModel } from '@lib/model/commerce/ProductItem/ProductItem.models';
import { type NilModel } from '@lib/shared/core/core.models';

export type _NewPaymentMethodInputPropsModel = {
  products?: Array<Partial<ProductItemModel>>;
  redirectTo?: string;
  token: string;
  onCreate?(form: Partial<PaymentMethodModel>): Promise<Partial<PaymentMethodModel> | NilModel>;
};

export type _NewPaymentMethodInputRefModel = {
  submit(): Promise<Partial<PaymentMethodModel> | NilModel>;
};
