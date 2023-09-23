import { type AmountUnitModel, type RelativeDateUnitModel } from '#lib-frontend/data/data.models';
import { type ScaledNumberRangeModel } from '#lib-shared/data/resources/ScaledNumberRange/ScaledNumberRange.models';
import { type CREDIT_RATING_RESOURCE_NAME } from '#lib-shared/funding/resources/CreditRating/CreditRating.constants';
import { type CreditRatingModel } from '#lib-shared/funding/resources/CreditRating/CreditRating.models';
import {
  type EntityResourceDataModel,
  type EntityResourceModel,
} from '#lib-shared/resource/resources/EntityResource/EntityResource.models';

export type FundingModel = EntityResourceModel & {
  [CREDIT_RATING_RESOURCE_NAME]?: Array<CreditRatingModel>;

  amount?: ScaledNumberRangeModel<AmountUnitModel>;

  currency?: string;

  maturity?: ScaledNumberRangeModel<RelativeDateUnitModel>;
};

export type FundingFormModel = EntityResourceDataModel<FundingModel>;
