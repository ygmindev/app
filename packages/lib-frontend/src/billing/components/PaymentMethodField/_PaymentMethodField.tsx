import { Elements, PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { type PaymentMethod, type StripePaymentElementOptions } from '@stripe/stripe-js';
import { loadStripe } from '@stripe/stripe-js/pure';
import get from 'lodash/get';
import { forwardRef, useImperativeHandle } from 'react';

import { STRIPE_ELEMENTS_STYLE } from '#lib-frontend/billing/components/PaymentMethodField/_PaymentMethodField.constants';
import { type _PaymentMethodFieldPropsModel } from '#lib-frontend/billing/components/PaymentMethodField/_PaymentMethodField.models';
import { REDIRECT } from '#lib-frontend/core/core.constants';
import { type RSFCModel } from '#lib-frontend/core/core.models';
import { useErrorContext } from '#lib-frontend/core/hooks/useErrorContext/useErrorContext';
import { type FormRefModel } from '#lib-frontend/data/data.models';
import { useTheme } from '#lib-frontend/style/hooks/useTheme/useTheme';
import {
  type CardBrandModel,
  type CardFundingModel,
} from '#lib-shared/billing/resources/Card/Card.models';
import { PAYMENT_METHOD_TYPE } from '#lib-shared/billing/resources/PaymentMethod/PaymentMethod.constants';
import { InvalidTypeError } from '#lib-shared/core/errors/InvalidTypeError/InvalidTypeError';
import { uri } from '#lib-shared/http/utils/uri/uri';

const stripe = loadStripe(process.env.APP_STRIPE_TOKEN);

export const _PaymentMethodField: RSFCModel<FormRefModel, _PaymentMethodFieldPropsModel> =
  forwardRef(({ token, ...props }, ref) => {
    const theme = useTheme();
    return token ? (
      <Elements
        options={{ ...STRIPE_ELEMENTS_STYLE(theme), clientSecret: token }}
        stripe={stripe}>
        <StripeForm
          {...props}
          ref={ref}
        />
      </Elements>
    ) : null;
  });

const StripeForm: RSFCModel<FormRefModel, _PaymentMethodFieldPropsModel> = forwardRef(
  ({ defaultValue, onSubmit }, ref) => {
    const stripeClient = useStripe();
    const elements = useElements();
    const { handleError } = useErrorContext();

    useImperativeHandle(ref, () => ({
      reset: () => null,
      setValues: async () => {
        return;
      },
      submit: handleSubmit,
    }));

    const onSubmitF = async (data: PaymentMethod): Promise<void> => {
      const { card, id, type, us_bank_account } = data;
      switch (type) {
        case 'us_bank_account': {
          us_bank_account &&
            onSubmit &&
            (await onSubmit({
              bank: get(us_bank_account, 'bank_name') || '',
              id,
              last4: get(us_bank_account, 'last4') || '',
              type: PAYMENT_METHOD_TYPE.BANK,
            }));

          break;
        }
        case 'card': {
          card &&
            onSubmit &&
            (await onSubmit({
              brand: card.brand as CardBrandModel,
              expMonth: card.exp_month,
              expYear: card.exp_year,
              funding: card.funding as CardFundingModel,
              id,
              last4: card.last4,
              type: PAYMENT_METHOD_TYPE.CARD,
            }));
          break;
        }
        default:
          throw new InvalidTypeError(type, 'payment method type');
      }
    };

    const handleSubmit = async (): Promise<void> => {
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
          handleError(new Error(error.message));
        } else if (setupIntent) {
          const { payment_method, status } = setupIntent;
          if (status === 'succeeded') {
            await onSubmitF(payment_method as PaymentMethod);
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
  },
);
