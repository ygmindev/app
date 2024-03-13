import { type PaymentMethodTypeModel } from '@lib/shared/billing/resources/PaymentMethod/PaymentMethod.models';

export type StripeAdminImplementationModel = {
  createCustomer(): Promise<string>;

  createToken(params: StripeCreateTokenParamsModel): Promise<string | null>;

  getFingerprint(params: { id: string; type: PaymentMethodTypeModel }): Promise<string | null>;
};

export type StripeCreateTokenParamsModel = {
  paymentMethodId?: string;
  price?: { amount: number; currency: string };
  userId: string;
};
