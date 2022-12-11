import { BILLING, PAYMENT_METHODS } from '@lib/frontend/billing/billing.constants';
import { STRIPE_ELEMENTS_STYLE } from '@lib/frontend/billing/containers/PaymentMethodForm/_PaymentMethodForm.constants';
import type { _PaymentMethodFormPropsModel } from '@lib/frontend/billing/containers/PaymentMethodForm/_PaymentMethodForm.models';
import { usePaymentMethodResource } from '@lib/frontend/billing/hooks/usePaymentMethodResource/usePaymentMethodResource';
import { REDIRECT } from '@lib/frontend/core/core.constants';
import type { FCModel, SFCModel } from '@lib/frontend/core/core.models';
import { useQuery } from '@lib/frontend/core/hooks/useQuery/useQuery';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import { useCurrentUser } from '@lib/frontend/user/hooks/useCurrentUser/useCurrentUser';
import { getEnv } from '@lib/shared/environment/utils/getEnv/getEnv';
import { appUri } from '@lib/shared/http/utils/appUri/appUri';
import { Elements, PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js';
import type { PaymentMethod, StripePaymentElementOptions } from '@stripe/stripe-js';
import { loadStripe } from '@stripe/stripe-js/pure';
import { useImperativeHandle } from 'react';

const APP_STRIPE_TOKEN = getEnv<string>('APP_STRIPE_TOKEN', null);
const stripe = loadStripe(APP_STRIPE_TOKEN);

export const _PaymentMethodForm: SFCModel<_PaymentMethodFormPropsModel> = (props) => {
  const theme = useTheme();
  const user = useCurrentUser();
  const { createToken } = usePaymentMethodResource();
  const { data, error, isLoading } = useQuery({
    id: 'cardFormCreateToken',
    query: async () => user && createToken({ form: undefined, root: { _id: user._id } }),
  });
  return data ? (
    <Elements
      options={{ ...STRIPE_ELEMENTS_STYLE(theme), clientSecret: data.result }}
      stripe={stripe}
    >
      <_StripeForm {...props} />
    </Elements>
  ) : null;
};

const _StripeForm: FCModel<_PaymentMethodFormPropsModel> = ({ forwardedRef, ...props }) => {
  const stripeClient = useStripe();
  const elements = useElements();

  useImperativeHandle(forwardedRef, () => ({
    submit: _handleSubmit,
  }));

  const _handleSubmit = async (): Promise<void> => {
    if (stripeClient && elements) {
      const { error, setupIntent } = await stripeClient.confirmSetup({
        confirmParams: {
          expand: ['payment_method'],
          return_url: appUri({ path: `${BILLING}/${PAYMENT_METHODS}/${REDIRECT}` }),
        },
        elements,
        redirect: 'if_required',
      });
      if (error) {
        // TODO: raise
      } else if (setupIntent) {
        const { payment_method, status } = setupIntent;
        if (status === 'succeeded') {
          const { id, type } = payment_method as PaymentMethod;
        }
      }
    }
  };

  return <PaymentElement options={{} as StripePaymentElementOptions} />;
};
