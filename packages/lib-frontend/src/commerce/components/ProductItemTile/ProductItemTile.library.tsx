import { type LibraryPropsModel } from '@lib/library/core/components/Library/Library.models';
import { ProductItemTile } from '@lib/frontend/commerce/components/ProductItemTile/ProductItemTile';
import { type ProductItemTilePropsModel } from '@lib/frontend/commerce/components/ProductItemTile/ProductItemTile.models';

export const props: LibraryPropsModel<ProductItemTilePropsModel> = {
  Component: ProductItemTile,
  defaultProps: {},
  variants: [],
};
