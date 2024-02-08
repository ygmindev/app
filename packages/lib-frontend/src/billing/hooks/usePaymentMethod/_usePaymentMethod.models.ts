import { type PaymentMethodFormModel } from '@lib/shared/billing/resources/PaymentMethod/PaymentMethod.models';

export type _UsePaymentMethodParamsModel = {
  redirect: string;
  token: string;
};

export type _UsePaymentMethodModel = {
  isReady?: boolean;

  paymentMethodSetup(): Promise<PaymentMethodFormModel | undefined>;

  paymentMethodSubmit(): Promise<void>;
};
