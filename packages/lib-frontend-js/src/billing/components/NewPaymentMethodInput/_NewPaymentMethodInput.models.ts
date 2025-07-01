import { type PaymentMethodModel } from '@lib/model/billing/PaymentMethod/PaymentMethod.models';
import { type ProductItemModel } from '@lib/model/commerce/ProductItem/ProductItem.models';
import { type NilModel, type PartialModel } from '@lib/shared/core/core.models';
import { type EntityResourceDataModel } from '@lib/shared/resource/resource.models';

export type _NewPaymentMethodInputPropsModel = {
  onCreate?(
    form: EntityResourceDataModel<PaymentMethodModel>,
  ): Promise<PartialModel<PaymentMethodModel> | NilModel>;
  products?: Array<PartialModel<ProductItemModel>>;
  redirectTo?: string;
  token: string;
};

export type _NewPaymentMethodInputRefModel = {
  submit(): Promise<PartialModel<PaymentMethodModel> | NilModel>;
};
