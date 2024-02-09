import { STRIPE_ELEMENTS_STYLE } from '@lib/frontend/billing/components/PaymentMethodInput/_PaymentMethodInput.constants';
import {
  type _PaymentMethodInputPropsModel,
  type _PaymentMethodInputRefModel,
} from '@lib/frontend/billing/components/PaymentMethodInput/_PaymentMethodInput.models';
import { type RLFCModel } from '@lib/frontend/core/core.models';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import { type BankFormModel } from '@lib/shared/billing/resources/Bank/Bank.models';
import {
  type CardFormModel,
  type CardFundingModel,
} from '@lib/shared/billing/resources/Card/Card.models';
import {
  PAYMENT_METHOD_MODE,
  PAYMENT_METHOD_TYPE,
} from '@lib/shared/billing/resources/PaymentMethod/PaymentMethod.constants';
import { InvalidTypeError } from '@lib/shared/core/errors/InvalidTypeError/InvalidTypeError';
import { Elements, PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js';
import {
  type PaymentIntent,
  type PaymentMethod,
  type SetupIntent,
  type StripePaymentElementOptions,
} from '@stripe/stripe-js';
import { loadStripe } from '@stripe/stripe-js/pure';
import { forwardRef, useImperativeHandle } from 'react';

const stripe = loadStripe(process.env.APP_STRIPE_TOKEN);

export const _PaymentMethodInput: RLFCModel<
  _PaymentMethodInputRefModel,
  _PaymentMethodInputPropsModel
> = forwardRef(({ mode, onChange, onCreate, price, redirectTo, token }, ref) => {
  const theme = useTheme();
  return (
    <Elements
      options={{
        ...STRIPE_ELEMENTS_STYLE(theme),
        ...(mode === PAYMENT_METHOD_MODE.CHECKOUT
          ? {
              amount: price?.value,
              confirm: true,
              currency: price?.currency,
              mode: 'payment',
              setup_future_usage: 'off_session',
            }
          : // TODO: to locale currency
            { currency: 'usd', mode: 'setup' }),
      }}
      stripe={stripe}>
      <StripeInput
        mode={mode}
        onChange={onChange}
        onCreate={onCreate}
        price={price}
        redirectTo={redirectTo}
        ref={ref}
        token={token}
      />
    </Elements>
  );
});

const StripeInput: RLFCModel<_PaymentMethodInputRefModel, _PaymentMethodInputPropsModel> =
  forwardRef(({ mode, onChange, onCreate, redirectTo, token }, ref) => {
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
                us_bank_account &&
                ({
                  externalId: id,
                  fingerprint: us_bank_account?.fingerprint,
                  last4: us_bank_account.last4,
                  name: us_bank_account.bank_name,
                  type: PAYMENT_METHOD_TYPE.BANK,
                } as BankFormModel)
              );
            }
            case 'card': {
              return (
                card &&
                ({
                  expMonth: card.exp_month,
                  expYear: card.exp_year,
                  externalId: id,
                  fingerprint: card?.fingerprint,
                  funding: card.funding as CardFundingModel,
                  last4: card.last4,
                  name: card.brand,
                  type: PAYMENT_METHOD_TYPE.CARD,
                } as CardFormModel)
              );
            }
            default:
              throw new InvalidTypeError(type, 'payment method type');
          }
        })();
        onCreate && (await onCreate(form));
      }
    };

    useImperativeHandle(ref, () => ({
      submit: async () => {
        if (isReady) {
          const { error: submitError } = await elements.submit();
          if (submitError) {
            throw new Error(submitError.message);
          }
          switch (mode) {
            case PAYMENT_METHOD_MODE.CHECKOUT: {
              const { error, paymentIntent } = await stripeClient.confirmPayment({
                clientSecret: token,
                confirmParams: { expand: ['payment_method'], return_url: redirectTo ?? '' },
                elements,
                redirect: 'if_required',
              });
              if (error) {
                throw new Error(error.message);
              }
              paymentIntent && (await handleSetup(paymentIntent));
              break;
            }
            case PAYMENT_METHOD_MODE.SETUP: {
              const { error, setupIntent } = await stripeClient.confirmSetup({
                clientSecret: token,
                confirmParams: { expand: ['payment_method'], return_url: redirectTo ?? '' },
                elements,
                redirect: 'if_required',
              });
              if (error) {
                throw new Error(error.message);
              }
              setupIntent && (await handleSetup(setupIntent));
              break;
            }
          }
        }
      },
    }));

    return (
      <PaymentElement
        onChange={({ complete }) => onChange && onChange({ isComplete: complete })}
        options={{ layout: { type: 'tabs' } } as StripePaymentElementOptions}
      />
    );
  });
