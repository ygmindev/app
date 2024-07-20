import {
  type StripeAdminImplementationModel,
  type StripeCreateTokenParamsModel,
} from '@lib/backend/billing/utils/StripeAdminImplementation/StripeAdminImplementation.models';
import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { PAYMENT_METHOD_TYPE } from '@lib/shared/billing/resources/PaymentMethod/PaymentMethod.constants';
import { type PaymentMethodTypeModel } from '@lib/shared/billing/resources/PaymentMethod/PaymentMethod.models';
import { ExternalError } from '@lib/shared/core/errors/ExternalError/ExternalError';
import Stripe from 'stripe';

@withContainer()
export class StripeAdminImplementation implements StripeAdminImplementationModel {
  stripe: Stripe = new Stripe(process.env.SERVER_STRIPE_TOKEN, {
    apiVersion: process.env.SERVER_STRIPE_API_VERSION as Stripe.LatestApiVersion,
  });

  createCustomer = async (): Promise<string> => {
    const { id } = await this.stripe.customers.create();
    return id;
  };

  getFingerprint = async ({
    id,
    type,
  }: {
    id: string;
    type: PaymentMethodTypeModel;
  }): Promise<string | undefined> => {
    const paymentMethod = await this.stripe.paymentMethods.retrieve(id);
    return (
      (() => {
        switch (type) {
          case PAYMENT_METHOD_TYPE.BANK:
            return paymentMethod.us_bank_account?.fingerprint;
          case PAYMENT_METHOD_TYPE.CARD:
            return paymentMethod.card?.fingerprint;
          default:
            return undefined;
        }
      })() ?? undefined
    );
  };

  createToken = async ({
    charge,
    paymentMethodId,
    userId,
  }: StripeCreateTokenParamsModel): Promise<string | undefined> => {
    const token = charge
      ? (
          await this.stripe.paymentIntents.create({
            amount: Math.round(charge.amount * 1e2),
            automatic_payment_methods: { allow_redirects: 'never', enabled: true },
            confirm: !!paymentMethodId,
            currency: charge.currency,
            customer: userId,
            // off_session: !!paymentMethodId,
            payment_method: paymentMethodId,
            setup_future_usage: 'off_session',
          })
        ).client_secret
      : (
          await this.stripe.setupIntents.create({
            automatic_payment_methods: { allow_redirects: 'never', enabled: true },
            customer: userId,
          })
        ).client_secret;
    if (token) {
      return token;
    }
    throw new ExternalError('Stripe create intent');
  };
}
