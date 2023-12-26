import { type LibraryPropsModel } from '#lib-library/core/components/Library/Library.models';
import { PaymentMethodFormPage } from '#lib-frontend/billing/pages/PaymentMethodFormPage/PaymentMethodFormPage';
import { type PaymentMethodFormPagePropsModel } from '#lib-frontend/billing/pages/PaymentMethodFormPage/PaymentMethodFormPage.models';

export const props: LibraryPropsModel<PaymentMethodFormPagePropsModel> = {
  defaultProps: {},
  Component: PaymentMethodFormPage,
  variants: [],
};
