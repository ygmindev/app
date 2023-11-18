import { ProtectedResource } from '#lib-backend/auth/resources/ProtectedResource/ProtectedResource';
import { NumberRange } from '#lib-backend/data/resources/NumberRange/NumberRange';
import { CreditRating } from '#lib-backend/funding/resources/CreditRating/CreditRating';
import { FundingQuote } from '#lib-backend/funding/resources/FundingQuote/FundingQuote';
import { withEntity } from '#lib-backend/resource/utils/withEntity/withEntity';
import { withField } from '#lib-backend/resource/utils/withField/withField';
import { FIELD_RELATION } from '#lib-backend/resource/utils/withField/withField.constants';
import { DATA_TYPE, PROPERTY_TYPE } from '#lib-shared/data/data.constants';
import { type NumberRangeModel } from '#lib-shared/data/resources/NumberRange/NumberRange.models';
import { CREDIT_RATING_RESOURCE_NAME } from '#lib-shared/funding/resources/CreditRating/CreditRating.constants';
import { type CreditRatingModel } from '#lib-shared/funding/resources/CreditRating/CreditRating.models';
import { FUNDING_RESOURCE_NAME } from '#lib-shared/funding/resources/Funding/Funding.constants';
import { type FundingModel } from '#lib-shared/funding/resources/Funding/Funding.models';
import { FUNDING_QUOTE_RESOURCE_NAME } from '#lib-shared/funding/resources/FundingQuote/FundingQuote.constants';
import { type FundingQuoteModel } from '#lib-shared/funding/resources/FundingQuote/FundingQuote.models';

@withEntity({ isRepository: true, name: FUNDING_RESOURCE_NAME })
export class Funding extends ProtectedResource implements FundingModel {
  @withField({
    Resource: () => CreditRating,
    isArray: true,
    isOptional: true,
    isRepository: true,
    relation: FIELD_RELATION.EMBEDDED,
    type: PROPERTY_TYPE.RESOURCE,
  })
  [CREDIT_RATING_RESOURCE_NAME]?: Array<CreditRatingModel>;

  @withField({
    Resource: () => FundingQuote,
    isArray: true,
    isOptional: true,
    isRepository: true,
    relation: FIELD_RELATION.EMBEDDED,
    type: PROPERTY_TYPE.RESOURCE,
  })
  [FUNDING_QUOTE_RESOURCE_NAME]?: Array<FundingQuoteModel>;

  @withField({
    Resource: () => NumberRange,
    isOptional: true,
    isRepository: true,
    type: PROPERTY_TYPE.RESOURCE,
  })
  amount?: NumberRangeModel;

  @withField({ isOptional: true, isRepository: true, type: DATA_TYPE.STRING })
  currency?: string;

  @withField({
    Resource: () => NumberRange,
    isOptional: true,
    isRepository: true,
    type: PROPERTY_TYPE.RESOURCE,
  })
  maturityDays?: NumberRangeModel;

  @withField({ isOptional: true, type: DATA_TYPE.NUMBER })
  quoteCount?: number;
}
