import { type AmountUnitModel, type RelativeDateUnitModel } from '#lib-frontend/data/data.models';
import { type ScaledNumberRangeModel } from '#lib-shared/data/resources/ScaledNumberRange/ScaledNumberRange.models';
import {
  type EntityResourceDataModel,
  type EntityResourceModel,
} from '#lib-shared/resource/resources/EntityResource/EntityResource.models';

export type FundingModel = EntityResourceModel & {
  amount?: Array<ScaledNumberRangeModel<AmountUnitModel>>;
  creditRating: Array<CreditRatingModel>;
  currency?: string;
  maturity?: Array<ScaledNumberRangeModel<RelativeDateUnitModel>>;
  // financials?
  // ccr
  // tranche ratings
  //
};

export type FundingFormModel = EntityResourceDataModel<FundingModel>;
