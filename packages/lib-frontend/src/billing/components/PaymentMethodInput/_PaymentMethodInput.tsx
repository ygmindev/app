import { type _PaymentMethodInputPropsModel } from '@lib/frontend/billing/components/PaymentMethodInput/_PaymentMethodInput.models';
import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import { PaymentElement, type PaymentElementProps } from '@stripe/react-stripe-js';
import { type StripePaymentElementOptions } from '@stripe/stripe-js';

export const _PaymentMethodInput = composeComponent<
  _PaymentMethodInputPropsModel,
  PaymentElementProps
>({
  Component: PaymentElement,

  getProps: ({ defaultValue }) => ({
    id: defaultValue?.externalId,
    options: { layout: { type: 'tabs' } } as StripePaymentElementOptions,
  }),
});
