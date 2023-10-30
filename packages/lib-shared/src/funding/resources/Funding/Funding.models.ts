import { type AmountUnitModel, type RelativeDateUnitModel } from '#lib-frontend/data/data.models';
import { type ProtectedResourceModel } from '#lib-shared/auth/resources/ProtectedResource/ProtectedResource.models';
import { type ScaledNumberRangeModel } from '#lib-shared/data/resources/ScaledNumberRange/ScaledNumberRange.models';
import { type CREDIT_RATING_RESOURCE_NAME } from '#lib-shared/funding/resources/CreditRating/CreditRating.constants';
import { type CreditRatingModel } from '#lib-shared/funding/resources/CreditRating/CreditRating.models';
import { type FUNDING_QUOTE_RESOURCE_NAME } from '#lib-shared/funding/resources/FundingQuote/FundingQuote.constants';
import { type FundingQuoteModel } from '#lib-shared/funding/resources/FundingQuote/FundingQuote.models';
import { type EntityResourceDataModel } from '#lib-shared/resource/resources/EntityResource/EntityResource.models';

export type FundingModel = ProtectedResourceModel & {
  [CREDIT_RATING_RESOURCE_NAME]?: Array<CreditRatingModel>;

  [FUNDING_QUOTE_RESOURCE_NAME]?: Array<FundingQuoteModel>;

  amount?: ScaledNumberRangeModel<AmountUnitModel>;

  currency?: string;

  maturity?: ScaledNumberRangeModel<RelativeDateUnitModel>;
};

export type FundingFormModel = EntityResourceDataModel<FundingModel>;
