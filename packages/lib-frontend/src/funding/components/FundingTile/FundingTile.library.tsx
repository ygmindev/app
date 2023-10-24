import { type LibraryPropsModel } from '#lib-library/core/components/Library/Library.models';
import { FundingTile } from '#lib-frontend/funding/components/FundingTile/FundingTile';
import { type FundingTilePropsModel } from '#lib-frontend/funding/components/FundingTile/FundingTile.models';

export const props: LibraryPropsModel<FundingTilePropsModel> = {
  Component: FundingTile,
  defaultProps: {},
  variants: [],
};
