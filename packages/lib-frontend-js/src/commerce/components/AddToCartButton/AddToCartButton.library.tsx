import { AddToCartButton } from '@lib/frontend/commerce/components/AddToCartButton/AddToCartButton';
import { type AddToCartButtonPropsModel } from '@lib/frontend/commerce/components/AddToCartButton/AddToCartButton.models';
import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';

export const props: LibraryPropsModel<AddToCartButtonPropsModel> = {
  Component: AddToCartButton,
  defaultProps: {},
  variants: [],
};
