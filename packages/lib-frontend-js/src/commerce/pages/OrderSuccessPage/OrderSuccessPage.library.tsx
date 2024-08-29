import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';
import { OrderSuccessPage } from '@lib/frontend/commerce/pages/OrderSuccessPage/OrderSuccessPage';
import { type OrderSuccessPagePropsModel } from '@lib/frontend/commerce/pages/OrderSuccessPage/OrderSuccessPage.models';

export const props: LibraryPropsModel<OrderSuccessPagePropsModel> = {
  defaultProps: {},
  Component: OrderSuccessPage,
  variants: [],
};
