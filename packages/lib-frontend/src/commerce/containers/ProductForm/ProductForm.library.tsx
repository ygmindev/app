import { type LibraryPropsModel } from '@lib/library/core/components/Library/Library.models';
import { ProductForm } from '@lib/frontend/commerce/containers/ProductForm/ProductForm';
import { type ProductFormPropsModel } from '@lib/frontend/commerce/containers/ProductForm/ProductForm.models';

export const props: LibraryPropsModel<ProductFormPropsModel> = {
  Component: ProductForm,
  defaultProps: {},
  variants: [],
};
