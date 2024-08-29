import { PriceTile } from '@lib/frontend/commerce/components/PriceTile/PriceTile';
import { type PriceTilePropsModel } from '@lib/frontend/commerce/components/PriceTile/PriceTile.models';
import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';

export const props: LibraryPropsModel<PriceTilePropsModel> = {
  Component: PriceTile,
  defaultProps: {},
  variants: [],
};
