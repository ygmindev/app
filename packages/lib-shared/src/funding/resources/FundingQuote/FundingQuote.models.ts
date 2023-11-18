import { type EmbeddedResourceModel } from '#lib-shared/resource/resources/EmbeddedResource/EmbeddedResource.models';
import { type EntityResourceDataModel } from '#lib-shared/resource/resources/EntityResource/EntityResource.models';

export type FundingQuoteModel = EmbeddedResourceModel & {
  maturityDays: number;

  pricing?: number;
};

export type FundingQuoteFormModel = EntityResourceDataModel<FundingQuoteModel>;
