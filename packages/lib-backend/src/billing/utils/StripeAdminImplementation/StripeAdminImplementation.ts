import { type StripeAdminImplementationModel } from '@lib/backend/billing/utils/StripeAdminImplementation/StripeAdminImplementation.models';
import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { type PaymentArgsModel } from '@lib/shared/billing/utils/PaymentArgs/PaymentArgs.models';
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

  createToken = async ({ items, paymentMethodId, userId }: PaymentArgsModel): Promise<string> => {
    const token = items
      ? (
          await this.stripe.paymentIntents.create({
            amount: 1,
            automatic_payment_methods: { allow_redirects: 'never', enabled: true },
            currency: 'usd',
            customer: userId,
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
