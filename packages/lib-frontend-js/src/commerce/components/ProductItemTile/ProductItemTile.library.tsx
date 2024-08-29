import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';
import { ProductItemTile } from '@lib/frontend/commerce/components/ProductItemTile/ProductItemTile';
import { type ProductItemTilePropsModel } from '@lib/frontend/commerce/components/ProductItemTile/ProductItemTile.models';

export const props: LibraryPropsModel<ProductItemTilePropsModel> = {
  Component: ProductItemTile,
  defaultProps: {},
  variants: [],
};
