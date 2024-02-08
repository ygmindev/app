import { STRIPE_ELEMENTS_STYLE } from '@lib/frontend/billing/containers/PaymentMethodContainer/_PaymentMethodContainer.constants';
import {
  type _PaymentMethodContainerPropsModel,
  type _PaymentMethodContainerRefModel,
} from '@lib/frontend/billing/containers/PaymentMethodContainer/_PaymentMethodContainer.models';
import { PAYMENT_METHOD_MODE } from '@lib/frontend/billing/containers/PaymentMethodContainer/PaymentMethodContainer.constants';
import { type RLFCModel } from '@lib/frontend/core/core.models';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import { type CardFundingModel } from '@lib/shared/billing/resources/Card/Card.models';
import { PAYMENT_METHOD_TYPE } from '@lib/shared/billing/resources/PaymentMethod/PaymentMethod.constants';
import { InvalidTypeError } from '@lib/shared/core/errors/InvalidTypeError/InvalidTypeError';
import { Elements, useElements, useStripe } from '@stripe/react-stripe-js';
import { type PaymentIntent, type PaymentMethod, type SetupIntent } from '@stripe/stripe-js';
import { loadStripe } from '@stripe/stripe-js/pure';
import { forwardRef, useImperativeHandle } from 'react';

const stripe = loadStripe(process.env.APP_STRIPE_TOKEN);

export const _PaymentMethodContainer: RLFCModel<
  _PaymentMethodContainerRefModel,
  _PaymentMethodContainerPropsModel
> = forwardRef(({ children, mode, onSetup, price, redirect, token }, ref) => {
  const theme = useTheme();
  return (
    <Elements
      options={{
        ...STRIPE_ELEMENTS_STYLE(theme),
        ...(mode === PAYMENT_METHOD_MODE.CHECKOUT
          ? {
              amount: price?.value,
              currency: price?.currency,
              mode: 'payment',
              setup_future_usage: 'off_session',
            }
          : { mode: 'setup' }),
      }}
      stripe={stripe}>
      <_PaymentMethodProvider
        mode={mode}
        onSetup={onSetup}
        price={price}
        redirect={redirect}
        ref={ref}
        token={token}>
        {children}
      </_PaymentMethodProvider>
    </Elements>
  );
});

const _PaymentMethodProvider: RLFCModel<
  _PaymentMethodContainerRefModel,
  _PaymentMethodContainerPropsModel
> = forwardRef(({ children, mode, onSetup, redirect, token }, ref) => {
  const stripeClient = useStripe();
  const elements = useElements();
  const isReady = stripeClient && elements;

  const handleSetup = async (intent: PaymentIntent | SetupIntent): Promise<void> => {
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
      onSetup && (await onSetup(form));
    }
  };

  useImperativeHandle(ref, () => ({
    paymentSubmit: async () => {
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

    submit: async () => {
      if (isReady) {
        switch (mode) {
          case PAYMENT_METHOD_MODE.CHECKOUT: {
            const { error: confirmError } = await stripeClient.confirmPayment({
              clientSecret: token,
              confirmParams: { return_url: redirect },
              elements,
            });
            if (confirmError) {
              throw new Error(confirmError.message);
            }
            const { error, paymentIntent } = await stripeClient.retrievePaymentIntent(token);
            if (error) {
              throw new Error(error.message);
            }
            paymentIntent && (await handleSetup(paymentIntent));
          }
          case PAYMENT_METHOD_MODE.SETUP: {
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
            }
            setupIntent && (await handleSetup(setupIntent));
          }
        }
      }
    },
  }));

  return children;
});
