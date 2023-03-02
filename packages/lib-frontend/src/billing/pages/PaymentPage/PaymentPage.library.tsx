import type { LibraryPropsModel } from '@lib/library/core/components/Library/Library.models';
import { PaymentPage } from '@lib/frontend/billing/pages/PaymentPage/PaymentPage';
import type { PaymentPagePropsModel } from '@lib/frontend/billing/pages/PaymentPage/PaymentPage.models';

export const props: LibraryPropsModel<PaymentPagePropsModel> = {
  defaultProps: {},
  Component: PaymentPage,
  variants: [],
};
