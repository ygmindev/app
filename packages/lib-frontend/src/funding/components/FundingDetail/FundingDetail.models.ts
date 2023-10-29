import { type PartialModel } from '#lib-shared/core/core.models';
import { type FundingModel } from '#lib-shared/funding/resources/Funding/Funding.models';

export type FundingDetailPropsModel = {
  funding: PartialModel<FundingModel>;
};
