import { type LibraryPropsModel } from '@lib/library/core/components/Library/Library.models';
import { ProductsPage } from '@lib/frontend/commerce/pages/ProductsPage/ProductsPage';
import { type ProductsPagePropsModel } from '@lib/frontend/commerce/pages/ProductsPage/ProductsPage.models';

export const props: LibraryPropsModel<ProductsPagePropsModel> = {
  defaultProps: {},
  Component: ProductsPage,
  variants: [],
};
