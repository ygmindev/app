import { STRIPE_ADMIN_SERVICE_API_VERSION } from '@lib/backend/billing/utils/StripeAdminService/StripeAdminService.constants';
import { withContainer } from '@lib/shared/core/decorators/withContainer/withContainer';
import { ExternalError } from '@lib/shared/core/errors/ExternalError/ExternalError';
import { getEnv } from '@lib/shared/environment/utils/getEnv/getEnv';
import Stripe from 'stripe';

const SERVER_STRIPE_TOKEN = getEnv('SERVER_STRIPE_TOKEN');

@withContainer()
export class StripeAdminService {
  stripe: Stripe = new Stripe(SERVER_STRIPE_TOKEN, {
    apiVersion: STRIPE_ADMIN_SERVICE_API_VERSION,
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
