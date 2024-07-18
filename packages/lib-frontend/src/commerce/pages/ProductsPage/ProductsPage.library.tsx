import { ProductsPage } from '@lib/frontend/commerce/pages/ProductsPage/ProductsPage';
import { type ProductsPagePropsModel } from '@lib/frontend/commerce/pages/ProductsPage/ProductsPage.models';
import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';

export const props: LibraryPropsModel<ProductsPagePropsModel> = {
  Component: ProductsPage,
  defaultProps: {},
  variants: [],
};
