import { type LibraryPropsModel } from '@lib/library/core/components/Library/Library.models';
import { Product } from '@lib/frontend/commerce/components/Product/Product';
import { type ProductPropsModel } from '@lib/frontend/commerce/components/Product/Product.models';

export const props: LibraryPropsModel<ProductPropsModel> = {
  Component: Product,
  defaultProps: {},
  variants: [],
};
