import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';
import { ProductItemInput } from '@lib/frontend/commerce/containers/ProductItemInput/ProductItemInput';
import { type ProductItemInputPropsModel } from '@lib/frontend/commerce/containers/ProductItemInput/ProductItemInput.models';

export const props: LibraryPropsModel<ProductItemInputPropsModel> = {
  Component: ProductItemInput,
  defaultProps: {},
  variants: [],
};
