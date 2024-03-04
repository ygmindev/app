import { ProductPage } from '@lib/frontend/commerce/pages/ProductPage/ProductPage';
import { type ProductPagePropsModel } from '@lib/frontend/commerce/pages/ProductPage/ProductPage.models';
import { type LibraryPropsModel } from '@lib/library/core/components/Library/Library.models';

export const props: LibraryPropsModel<ProductPagePropsModel> = {
  Component: ProductPage,
  defaultProps: {},
  variants: [],
};
