import {
  type _UsePaymentMethodModel,
  type _UsePaymentMethodParamsModel,
} from '@lib/frontend/billing/hooks/usePaymentMethod/_usePaymentMethod.models';
import { type CardFundingModel } from '@lib/shared/billing/resources/Card/Card.models';
import { PAYMENT_METHOD_TYPE } from '@lib/shared/billing/resources/PaymentMethod/PaymentMethod.constants';
import { InvalidTypeError } from '@lib/shared/core/errors/InvalidTypeError/InvalidTypeError';
import { useElements, useStripe } from '@stripe/react-stripe-js';
import { type PaymentMethod } from '@stripe/stripe-js';

export const _usePaymentMethod = ({
  redirect,
  token,
}: _UsePaymentMethodParamsModel): _UsePaymentMethodModel => {
  const stripeClient = useStripe();
  const elements = useElements();
  const isReady = !!(stripeClient && elements);
  return {
    isReady,

    paymentMethodSetup: async () => {
      if (isReady) {
        const { error: submitError } = await elements.submit();
        if (submitError) {
          throw new Error(submitError.message);
        }
        const { error, setupIntent } = await stripeClient.confirmSetup({
          clientSecret: token,
          confirmParams: { expand: ['payment_method'], return_url: redirect },
          elements,
          redirect: 'if_required',
        });
        if (error) {
          throw new Error(error.message);
        } else if (setupIntent) {
          const { payment_method, status } = setupIntent;
          if (status === 'succeeded') {
            const { card, id, type, us_bank_account } = payment_method as PaymentMethod;
            switch (type) {
              case 'us_bank_account': {
                return (
                  us_bank_account && {
                    externalId: id,
                    last4: us_bank_account.last4,
                    name: us_bank_account.bank_name,
                    type: PAYMENT_METHOD_TYPE.BANK,
                  }
                );
              }
              case 'card': {
                return (
                  card && {
                    expMonth: card.exp_month,
                    expYear: card.exp_year,
                    externalId: id,
                    funding: card.funding as CardFundingModel,
                    last4: card.last4,
                    name: card.brand,
                    type: PAYMENT_METHOD_TYPE.CARD,
                  }
                );
              }
              default:
                throw new InvalidTypeError(type, 'payment method type');
            }
          }
        }
      }
    },

    paymentMethodSubmit: async () => {
      if (isReady) {
        const { error } = await stripeClient.confirmPayment({
          clientSecret: token,
          confirmParams: { return_url: redirect },
          elements,
        });
        if (error) {
          throw new Error(error.message);
        }
      }
    },
  };
};
