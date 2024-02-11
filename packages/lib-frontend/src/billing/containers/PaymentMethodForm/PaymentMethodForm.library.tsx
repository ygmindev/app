import { PaymentMethodForm } from '@lib/frontend/billing/containers/PaymentMethodForm/PaymentMethodForm';
import { type PaymentMethodFormPropsModel } from '@lib/frontend/billing/containers/PaymentMethodForm/PaymentMethodForm.models';
import { type LibraryPropsModel } from '@lib/library/core/components/Library/Library.models';

export const props: LibraryPropsModel<PaymentMethodFormPropsModel> = {
  Component: PaymentMethodForm,
  defaultProps: {},
  variants: [],
};
