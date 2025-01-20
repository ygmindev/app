import { OrderPaymentPage } from '@lib/frontend/billing/containers/OrderPaymentPage/OrderPaymentPage';
import { type OrderPaymentPagePropsModel } from '@lib/frontend/billing/containers/OrderPaymentPage/OrderPaymentPage.models';
import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';

export const props: LibraryPropsModel<OrderPaymentPagePropsModel> = {
  Component: OrderPaymentPage,
  defaultProps: {},
  variants: [],
};
