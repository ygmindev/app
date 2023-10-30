import { type RateUnitModel, type RelativeDateUnitModel } from '#lib-frontend/data/data.models';
import { type ScaledNumberModel } from '#lib-shared/data/resources/ScaledNumber/ScaledNumber.models';
import { type EmbeddedResourceModel } from '#lib-shared/resource/resources/EmbeddedResource/EmbeddedResource.models';
import { type EntityResourceDataModel } from '#lib-shared/resource/resources/EntityResource/EntityResource.models';

export type FundingQuoteModel = EmbeddedResourceModel & {
  maturity: ScaledNumberModel<RelativeDateUnitModel>;

  pricing?: ScaledNumberModel<RateUnitModel>;
};

export type FundingQuoteFormModel = EntityResourceDataModel<FundingQuoteModel>;
