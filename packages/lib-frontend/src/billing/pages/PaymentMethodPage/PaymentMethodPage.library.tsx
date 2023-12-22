import { type LibraryPropsModel } from '#lib-library/core/components/Library/Library.models';
import { PaymentMethodPage } from '#lib-frontend/billing/pages/PaymentMethodPage/PaymentMethodPage';
import { type PaymentMethodPagePropsModel } from '#lib-frontend/billing/pages/PaymentMethodPage/PaymentMethodPage.models';

export const props: LibraryPropsModel<PaymentMethodPagePropsModel> = {
  defaultProps: {},
  Component: PaymentMethodPage,
  variants: [],
};
