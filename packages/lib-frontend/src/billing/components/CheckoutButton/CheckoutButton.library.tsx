import { type LibraryPropsModel } from '@lib/library/core/components/Library/Library.models';
import { CheckoutButton } from 'lib/frontend/billing/components/CheckoutButton/CheckoutButton';
import { type CheckoutButtonPropsModel } from 'lib/frontend/billing/components/CheckoutButton/CheckoutButton.models';

export const props: LibraryPropsModel<CheckoutButtonPropsModel> = {
  Component: CheckoutButton,
  defaultProps: {},
  variants: [],
};
