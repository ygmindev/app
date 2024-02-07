import { type LibraryPropsModel } from '@lib/library/core/components/Library/Library.models';
import { PaymentButton } from 'lib/frontend/billing/components/PaymentButton/PaymentButton';
import { type PaymentButtonPropsModel } from 'lib/frontend/billing/components/PaymentButton/PaymentButton.models';

export const props: LibraryPropsModel<PaymentButtonPropsModel> = {
  Component: PaymentButton,
  defaultProps: {},
  variants: [],
};
