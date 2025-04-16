import { STRIPE_ELEMENTS_STYLE } from '@lib/frontend/billing/components/NewPaymentMethodInput/_NewPaymentMethodInput.constants';
import {
  type _NewPaymentMethodInputPropsModel,
  type _NewPaymentMethodInputRefModel,
} from '@lib/frontend/billing/components/NewPaymentMethodInput/_NewPaymentMethodInput.models';
import { type RLFCModel } from '@lib/frontend/core/core.models';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import { type CardFundingModel } from '@lib/shared/billing/resources/Card/Card.models';
import { PAYMENT_METHOD_TYPE } from '@lib/shared/billing/resources/PaymentMethod/PaymentMethod.constants';
import { type PaymentMethodModel } from '@lib/shared/billing/resources/PaymentMethod/PaymentMethod.models';
import { getPrice } from '@lib/shared/commerce/utils/getPrice/getPrice';
import { type NilModel, type PartialModel } from '@lib/shared/core/core.models';
import { InvalidTypeError } from '@lib/shared/core/errors/InvalidTypeError/InvalidTypeError';
import { Elements, PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js';
import {
  type PaymentIntent,
  type PaymentMethod,
  type SetupIntent,
  type StripePaymentElementOptions,
} from '@stripe/stripe-js';
import { loadStripe } from '@stripe/stripe-js/pure';
import { forwardRef, useImperativeHandle, useMemo } from 'react';

const stripe = loadStripe(process.env.APP_STRIPE_TOKEN);

export const _NewPaymentMethodInput: RLFCModel<
  _NewPaymentMethodInputRefModel,
  _NewPaymentMethodInputPropsModel
> = forwardRef(({ onCreate, products, redirectTo, token }, ref) => {
  const theme = useTheme();
  const price = useMemo(() => getPrice(products), [products]);
  return (
    <Elements
      options={{
        ...STRIPE_ELEMENTS_STYLE(theme),
        ...(products
          ? {
              // TODO: to locale currency
              amount: Math.round(price * 1e2),
              currency: 'usd',
              mode: 'payment',
              setup_future_usage: 'off_session',
            }
          : // TODO: to locale currency
            { currency: 'usd', mode: 'setup' }),
      }}
      stripe={stripe}>
      <StripeInput
        onCreate={onCreate}
        products={products}
        redirectTo={redirectTo}
        ref={ref}
        token={token}
      />
    </Elements>
  );
});

const StripeInput: RLFCModel<_NewPaymentMethodInputRefModel, _NewPaymentMethodInputPropsModel> =
  forwardRef(({ onCreate, products, redirectTo, token }, ref) => {
    const stripeClient = useStripe();
    const elements = useElements();
    const isReady = stripeClient && elements;

    const handleSetup = async (
      intent: PaymentIntent | SetupIntent,
    ): Promise<PartialModel<PaymentMethodModel> | NilModel> => {
      const { payment_method, status } = intent;
      if (status === 'succeeded') {
        const { card, id, type, us_bank_account } = payment_method as PaymentMethod;
        const form = (() => {
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
        })();
        return form && (await onCreate?.(form));
      }
    };

    useImperativeHandle(ref, () => ({
      submit: async () => {
        if (isReady) {
          const { error: submitError } = await elements.submit();
          if (submitError) {
            throw new Error(submitError.message);
          }
          if (products) {
            const { error, paymentIntent } = await stripeClient.confirmPayment({
              clientSecret: token,
              confirmParams: { expand: ['payment_method'], return_url: redirectTo ?? '' },
              elements,
              redirect: 'if_required',
            });
            if (error) {
              throw new Error(error.message);
            }
            return paymentIntent && (await handleSetup(paymentIntent));
          } else {
            const { error, setupIntent } = await stripeClient.confirmSetup({
              clientSecret: token,
              confirmParams: { expand: ['payment_method'], return_url: redirectTo ?? '' },
              elements,
              redirect: 'if_required',
            });
            if (error) {
              throw new Error(error.message);
            }
            return setupIntent && (await handleSetup(setupIntent));
          }
        }
        return null;
      },
    }));

    return <PaymentElement options={{ layout: { type: 'tabs' } } as StripePaymentElementOptions} />;
  });
