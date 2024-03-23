import { type ChargeModel } from '@lib/shared/billing/billing.models';
import { type PaymentMethodTypeModel } from '@lib/shared/billing/resources/PaymentMethod/PaymentMethod.models';

export type StripeAdminImplementationModel = {
  createCustomer(): Promise<string>;

  createToken(params: StripeCreateTokenParamsModel): Promise<string | null>;

  getFingerprint(params: { id: string; type: PaymentMethodTypeModel }): Promise<string | null>;
};

export type StripeCreateTokenParamsModel = {
  charge?: ChargeModel;
  paymentMethodId?: string;
  userId: string;
};
