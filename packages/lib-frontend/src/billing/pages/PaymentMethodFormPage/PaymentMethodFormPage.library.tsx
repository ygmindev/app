import { PaymentMethodFormPage } from '@lib/frontend/billing/pages/PaymentMethodFormPage/PaymentMethodFormPage';
import type { PaymentMethodFormPagePropsModel } from '@lib/frontend/billing/pages/PaymentMethodFormPage/PaymentMethodFormPage.models';
import type { LibraryPropsModel } from '@lib/library/core/components/Library/Library.models';

export const props: LibraryPropsModel<PaymentMethodFormPagePropsModel> = {
  Component: PaymentMethodFormPage,
  defaultProps: {},
  variants: [],
};
