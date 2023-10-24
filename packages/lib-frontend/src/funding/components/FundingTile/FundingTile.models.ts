import { type TilePropsModel } from '#lib-frontend/core/components/Tile/Tile.models';
import { type PartialModel } from '#lib-shared/core/core.models';
import { type FundingModel } from '#lib-shared/funding/resources/Funding/Funding.models';

export type FundingTilePropsModel = Pick<TilePropsModel, 'image'> & {
  funding: PartialModel<FundingModel>;
};
