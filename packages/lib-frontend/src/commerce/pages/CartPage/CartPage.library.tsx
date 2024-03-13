import { type LibraryPropsModel } from '@lib/library/core/components/Library/Library.models';
import { CartPage } from '@lib/frontend/commerce/pages/CartPage/CartPage';
import { type CartPagePropsModel } from '@lib/frontend/commerce/pages/CartPage/CartPage.models';

export const props: LibraryPropsModel<CartPagePropsModel> = {
  defaultProps: {},
  Component: CartPage,
  variants: [],
};
