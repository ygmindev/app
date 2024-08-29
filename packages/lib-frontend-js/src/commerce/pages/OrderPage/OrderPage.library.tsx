import { OrderPage } from '@lib/frontend/commerce/pages/OrderPage/OrderPage';
import { type OrderPagePropsModel } from '@lib/frontend/commerce/pages/OrderPage/OrderPage.models';
import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';

export const props: LibraryPropsModel<OrderPagePropsModel> = {
  Component: OrderPage,
  defaultProps: {},
  variants: [],
};
