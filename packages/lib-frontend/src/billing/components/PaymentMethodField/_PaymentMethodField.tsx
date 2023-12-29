import { Elements, PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { type PaymentMethod, type StripePaymentElementOptions } from '@stripe/stripe-js';
import { loadStripe } from '@stripe/stripe-js/pure';
import { forwardRef, useImperativeHandle } from 'react';

import { STRIPE_ELEMENTS_STYLE } from '#lib-frontend/billing/components/PaymentMethodField/_PaymentMethodField.constants';
import { type _PaymentMethodFieldPropsModel } from '#lib-frontend/billing/components/PaymentMethodField/_PaymentMethodField.models';
import { type PaymentMethodFieldRefModel } from '#lib-frontend/billing/components/PaymentMethodField/PaymentMethodField.models';
import { REDIRECT } from '#lib-frontend/core/core.constants';
import { type RLFCModel } from '#lib-frontend/core/core.models';
import { useTheme } from '#lib-frontend/style/hooks/useTheme/useTheme';
import { type CardFundingModel } from '#lib-shared/billing/resources/Card/Card.models';
import { PAYMENT_METHOD_TYPE } from '#lib-shared/billing/resources/PaymentMethod/PaymentMethod.constants';
import { type PaymentMethodFormModel } from '#lib-shared/billing/resources/PaymentMethod/PaymentMethod.models';
import { InvalidTypeError } from '#lib-shared/core/errors/InvalidTypeError/InvalidTypeError';
import { uri } from '#lib-shared/http/utils/uri/uri';

const stripe = loadStripe(process.env.APP_STRIPE_TOKEN);

export const _PaymentMethodField: RLFCModel<
  PaymentMethodFieldRefModel,
  _PaymentMethodFieldPropsModel
> = forwardRef(({ token, ...props }, ref) => {
  const theme = useTheme();
  return (
    <Elements
      options={{ ...STRIPE_ELEMENTS_STYLE(theme), clientSecret: token }}
      stripe={stripe}>
      <StripeField
        {...props}
        ref={ref}
        token={token}
      />
    </Elements>
  );
});

const StripeField: RLFCModel<PaymentMethodFieldRefModel, _PaymentMethodFieldPropsModel> =
  forwardRef(({ defaultValue, onError }, ref) => {
    const stripeClient = useStripe();
    const elements = useElements();

    useImperativeHandle(ref, () => ({
      beforeSubmit,
      blur: () => elements?.getElement('cardNumber')?.blur(),
      focus: () => elements?.getElement('cardNumber')?.focus(),
      reset: () => null,
    }));

    const beforeSubmit = async (): Promise<PaymentMethodFormModel | undefined> => {
      if (stripeClient && elements) {
        const { error, setupIntent } = await stripeClient.confirmSetup({
          confirmParams: {
            expand: ['payment_method'],
            return_url: uri({
              host: process.env.APP_HOST,
              pathname: `$/${REDIRECT}`,
              port: process.env.APP_PORT,
            }),
          },
          elements,
          redirect: 'if_required',
        });
        if (error) {
          onError(new Error(error.message));
        } else if (setupIntent) {
          const { payment_method, status } = setupIntent;
          if (status === 'succeeded') {
            const { card, id, type, us_bank_account } = payment_method as PaymentMethod;
            switch (type) {
              case 'us_bank_account': {
                return (
                  us_bank_account && {
                    id,
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
                    funding: card.funding as CardFundingModel,
                    id,
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
    };

    return (
      <PaymentElement
        id={defaultValue?.id}
        options={{ layout: { type: 'tabs' } } as StripePaymentElementOptions}
      />
    );
  });
