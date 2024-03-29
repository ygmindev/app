import { type LibraryPropsModel } from '@lib/library/core/components/Library/Library.models';
import { PaymentForm } from '@lib/frontend/billing/containers/PaymentForm/PaymentForm';
import { type PaymentFormPropsModel } from '@lib/frontend/billing/containers/PaymentForm/PaymentForm.models';

export const props: LibraryPropsModel<PaymentFormPropsModel> = {
  Component: PaymentForm,
  defaultProps: {},
  variants: [],
};
