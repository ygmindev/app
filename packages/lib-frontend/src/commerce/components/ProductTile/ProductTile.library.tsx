import { ProductTile } from '@lib/frontend/commerce/components/ProductTile/ProductTile';
import { type ProductTilePropsModel } from '@lib/frontend/commerce/components/ProductTile/ProductTile.models';
import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';

export const props: LibraryPropsModel<ProductTilePropsModel> = {
  Component: ProductTile,
  defaultProps: {},
  variants: [],
};
