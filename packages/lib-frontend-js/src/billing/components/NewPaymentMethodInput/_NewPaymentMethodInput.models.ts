import { type PaymentMethodModel } from '@lib/shared/billing/resources/PaymentMethod/PaymentMethod.models';
import { type ProductItemModel } from '@lib/shared/commerce/utils/ProductItem/ProductItem.models';
import { type NilModel, type PartialModel } from '@lib/shared/core/core.models';
import { type EntityResourceDataModel } from '@lib/model/resource/EntityResource/EntityResource.models';

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
