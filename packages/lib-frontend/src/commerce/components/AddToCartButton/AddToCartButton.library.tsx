import { type LibraryPropsModel } from '@lib/library/core/components/Library/Library.models';
import { AddToCartButton } from '@lib/frontend/commerce/components/AddToCartButton/AddToCartButton';
import { type AddToCartButtonPropsModel } from '@lib/frontend/commerce/components/AddToCartButton/AddToCartButton.models';

export const props: LibraryPropsModel<AddToCartButtonPropsModel> = {
  Component: AddToCartButton,
  defaultProps: {},
  variants: [],
};
