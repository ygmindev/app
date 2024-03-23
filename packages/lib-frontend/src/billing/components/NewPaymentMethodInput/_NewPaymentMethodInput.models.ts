import { type PaymentMethodFormModel } from '@lib/shared/billing/resources/PaymentMethod/PaymentMethod.models';

export type _NewPaymentMethodInputPropsModel = {
  items?: Array<string>;
  onCreate?(form?: PaymentMethodFormModel): Promise<void>;
  price?: number;
  redirectTo?: string;
  token: string;
};

export type _NewPaymentMethodInputRefModel = {
  submit(): Promise<void>;
};
