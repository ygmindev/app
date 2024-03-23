import {
  type PaymentMethodFormModel,
  type PaymentMethodModel,
} from '@lib/shared/billing/resources/PaymentMethod/PaymentMethod.models';
import { type NilModel, type PartialModel } from '@lib/shared/core/core.models';

export type _NewPaymentMethodInputPropsModel = {
  items?: Array<string>;
  onCreate?(form: PaymentMethodFormModel): Promise<PartialModel<PaymentMethodModel> | NilModel>;
  price?: number;
  redirectTo?: string;
  token: string;
};

export type _NewPaymentMethodInputRefModel = {
  submit(): Promise<PartialModel<PaymentMethodModel> | NilModel>;
};
