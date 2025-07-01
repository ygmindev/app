import { type PAYMENT_METHOD_TYPE } from '@lib/model/billing/PaymentMethod/PaymentMethod.models';
import { type ChargeModel } from '@lib/shared/billing/billing.models';

export type StripeAdminImplementationModel = {
  createCustomer(): Promise<string>;

  createToken(params: StripeCreateTokenParamsModel): Promise<string | undefined>;

  getFingerprint(params: { id: string; type: PAYMENT_METHOD_TYPE }): Promise<string | undefined>;

  removeToken(params: string): Promise<void>;
};

export type StripeCreateTokenParamsModel = {
  charge?: ChargeModel;
  paymentMethodId?: string;
  userId: string;
};
