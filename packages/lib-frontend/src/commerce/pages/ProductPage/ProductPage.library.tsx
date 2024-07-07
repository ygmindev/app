import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';
import { ProductPage } from '@lib/frontend/commerce/pages/ProductPage/ProductPage';
import { type ProductPagePropsModel } from '@lib/frontend/commerce/pages/ProductPage/ProductPage.models';

export const props: LibraryPropsModel<ProductPagePropsModel> = {
  defaultProps: {},
  Component: ProductPage,
  variants: [],
};
