import { ProductItemForm } from '@lib/frontend/commerce/containers/ProductItemForm/ProductItemForm';
import { type ProductItemFormPropsModel } from '@lib/frontend/commerce/containers/ProductItemForm/ProductItemForm.models';
import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';

export const props: LibraryPropsModel<ProductItemFormPropsModel> = {
  Component: ProductItemForm,
  defaultProps: {},
  variants: [],
};
