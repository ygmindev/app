import { ScaledNumber } from '#lib-backend/data/resources/ScaledNumber/ScaledNumber';
import { EmbeddedResource } from '#lib-backend/resource/resources/EmbeddedResource/EmbeddedResource';
import { withEntity } from '#lib-backend/resource/utils/withEntity/withEntity';
import { withField } from '#lib-backend/resource/utils/withField/withField';
import { type RateUnitModel, type RelativeDateUnitModel } from '#lib-frontend/data/data.models';
import { PROPERTY_TYPE } from '#lib-shared/data/data.constants';
import { type ScaledNumberModel } from '#lib-shared/data/resources/ScaledNumber/ScaledNumber.models';
import { FUNDING_QUOTE_RESOURCE_NAME } from '#lib-shared/funding/resources/FundingQuote/FundingQuote.constants';
import { type FundingQuoteModel } from '#lib-shared/funding/resources/FundingQuote/FundingQuote.models';

@withEntity({ isEmbeddable: true, isRepository: true, name: FUNDING_QUOTE_RESOURCE_NAME })
export class FundingQuote extends EmbeddedResource implements FundingQuoteModel {
  @withField({
    Resource: () => ScaledNumber,
    isRepository: true,
    type: PROPERTY_TYPE.RESOURCE,
  })
  maturity!: ScaledNumberModel<RelativeDateUnitModel>;

  @withField({
    Resource: () => ScaledNumber,
    isOptional: true,
    isRepository: true,
    type: PROPERTY_TYPE.RESOURCE,
  })
  pricing?: ScaledNumberModel<RateUnitModel>;
}
