import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { ExternalError } from '@lib/shared/core/errors/ExternalError/ExternalError';
import Stripe from 'stripe';

@withContainer()
export class StripeAdminImplementation {
  stripe: Stripe = new Stripe(process.env.SERVER_STRIPE_TOKEN, {
    apiVersion: process.env.SERVER_STRIPE_API_VERSION as Stripe.LatestApiVersion,
  });

  createCustomer = async (): Promise<string> => {
    const { id } = await this.stripe.customers.create();
    return id;
  };

  createIntent = async (id: string): Promise<string> => {
    const { client_secret } = await this.stripe.setupIntents.create({
      customer: id,
      payment_method_types: ['card', 'us_bank_account'],
    });
    if (client_secret) {
      return client_secret;
    }
    throw new ExternalError('Stripe create intent');
  };
}
