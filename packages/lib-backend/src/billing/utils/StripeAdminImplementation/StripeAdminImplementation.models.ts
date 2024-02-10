import { type PaymentMethodTypeModel } from '@lib/shared/billing/resources/PaymentMethod/PaymentMethod.models';
import { type PaymentArgsModel } from '@lib/shared/billing/utils/PaymentArgs/PaymentArgs.models';

export type StripeAdminImplementationModel = {
  createCustomer(): Promise<string>;

  createToken(params: PaymentArgsModel, userId: string): Promise<string | null>;

  getFingerprint(params: { id: string; type: PaymentMethodTypeModel }): Promise<string | null>;
};
