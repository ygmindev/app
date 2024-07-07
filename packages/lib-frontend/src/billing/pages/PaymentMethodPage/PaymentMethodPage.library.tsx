import { PaymentMethodPage } from '@lib/frontend/billing/pages/PaymentMethodPage2/PaymentMethodPage';
import { type PaymentMethodPagePropsModel } from '@lib/frontend/billing/pages/PaymentMethodPage2/PaymentMethodPage.models';
import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';

export const props: LibraryPropsModel<PaymentMethodPagePropsModel> = {
  Component: PaymentMethodPage,
  defaultProps: {},
  variants: [],
};
