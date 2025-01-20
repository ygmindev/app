import { OrderProductsPage } from '@lib/frontend/commerce/pages/OrderProductsPage/OrderProductsPage';
import { type OrderProductsPagePropsModel } from '@lib/frontend/commerce/pages/OrderProductsPage/OrderProductsPage.models';
import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';

export const props: LibraryPropsModel<OrderProductsPagePropsModel> = {
  Component: OrderProductsPage,
  defaultProps: {},
  variants: [],
};
