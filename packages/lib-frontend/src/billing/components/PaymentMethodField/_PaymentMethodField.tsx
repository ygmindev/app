import { STRIPE_ELEMENTS_STYLE } from '@lib/frontend/billing/components/PaymentMethodField/_PaymentMethodField.constants';
import type { _PaymentMethodFieldPropsModel } from '@lib/frontend/billing/components/PaymentMethodField/_PaymentMethodField.models';
import { REDIRECT } from '@lib/frontend/core/core.constants';
import type { RSFCModel } from '@lib/frontend/core/core.models';
import { useErrorContext } from '@lib/frontend/core/hooks/useErrorContext/useErrorContext';
import type { FormRefModel } from '@lib/frontend/form/form.models';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import type { CardFundingModel } from '@lib/shared/billing/resources/Card/Card.models';
import type { PaymentMethodFormModel } from '@lib/shared/billing/resources/PaymentMethod/PaymentMethod.models';
import { InvalidTypeError } from '@lib/shared/core/errors/InvalidTypeError/InvalidTypeError';
import { appUri } from '@lib/shared/http/utils/appUri/appUri';
import { Elements, PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js';
import type { PaymentMethod, StripePaymentElementOptions } from '@stripe/stripe-js';
import { loadStripe } from '@stripe/stripe-js/pure';
import get from 'lodash/get';
import { forwardRef, useImperativeHandle } from 'react';

const _stripe = loadStripe(process.env.APP_STRIPE_TOKEN);

export const _PaymentMethodField: RSFCModel<
  FormRefModel<PaymentMethodFormModel>,
  _PaymentMethodFieldPropsModel
> = forwardRef(({ token, ...props }, ref) => {
  const theme = useTheme();
  return token ? (
    <Elements
      options={{ ...STRIPE_ELEMENTS_STYLE(theme), clientSecret: token }}
      stripe={_stripe}>
      <_StripeForm
        {...props}
        ref={ref}
      />
    </Elements>
  ) : null;
});

const _StripeForm: RSFCModel<
  FormRefModel<PaymentMethodFormModel>,
  _PaymentMethodFieldPropsModel
> = forwardRef(({ defaultValue, onBankCreate, onCardCreate, value, ...props }, ref) => {
  const stripeClient = useStripe();
  const elements = useElements();
  const { handleError } = useErrorContext();

  useImperativeHandle(ref, () => ({
    reset: () => null,
    submit: _handleSubmit,
  }));

  const _handleCreate = async (data: PaymentMethod): Promise<void> => {
    const { card, id, type, us_bank_account } = data;
    switch (type) {
      case 'us_bank_account': {
        us_bank_account &&
          (await onBankCreate({
            bank: get(us_bank_account, 'bank_name') || '',
            id,
            last4: get(us_bank_account, 'last4') || '',
          }));
        break;
      }
      case 'card': {
        card &&
          (await onCardCreate({
            brand: card.brand,
            expMonth: card.exp_month,
            expYear: card.exp_year,
            funding: card.funding as CardFundingModel,
            id,
            last4: card.last4,
          }));
        break;
      }
      default:
        throw new InvalidTypeError(type, 'payment method type');
    }
  };

  const _handleSubmit = async (): Promise<void> => {
    if (stripeClient && elements) {
      const { error, setupIntent } = await stripeClient.confirmSetup({
        confirmParams: {
          expand: ['payment_method'],
          return_url: appUri({ path: `$/${REDIRECT}` }),
        },
        elements,
        redirect: 'if_required',
      });
      if (error) {
        handleError(new Error(error.message));
      } else if (setupIntent) {
        const { payment_method, status } = setupIntent;
        if (status === 'succeeded') {
          await _handleCreate(payment_method as PaymentMethod);
        }
      }
    }
  };

  return (
    <PaymentElement
      options={
        { defaultValues: undefined, layout: { type: 'tabs' } } as StripePaymentElementOptions
      }
    />
  );
});
