import { type PaymentArgsModel } from '@lib/shared/billing/utils/PaymentArgs/PaymentArgs.models';

export type StripeAdminImplementationModel = {
  createCustomer(): Promise<string>;

  createToken(params: PaymentArgsModel): Promise<string | null>;
};
