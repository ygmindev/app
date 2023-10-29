import { type PagePropsModel } from '#lib-frontend/core/core.models';
import { type PartialModel } from '#lib-shared/core/core.models';
import { type FundingModel } from '#lib-shared/funding/resources/Funding/Funding.models';

export type FundingDetailPagePropsModel = PagePropsModel;

export type FundingDetailPageParamsModel = {
  funding?: PartialModel<FundingModel>;
  fundingid?: string;
};
