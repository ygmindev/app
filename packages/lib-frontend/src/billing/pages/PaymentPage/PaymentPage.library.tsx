import { PaymentPage } from '@lib/frontend/billing/pages/PaymentPage/PaymentPage';
import type { PaymentPagePropsModel } from '@lib/frontend/billing/pages/PaymentPage/PaymentPage.models';
import type { LibraryPropsModel } from '@lib/library/core/components/Library/Library.models';

export const props: LibraryPropsModel<PaymentPagePropsModel> = {
  Component: PaymentPage,
  defaultProps: {},
  variants: [],
};
