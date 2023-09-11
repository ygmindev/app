import { ScaledNumberRange } from '#lib-backend/data/resources/ScaledNumberRange/ScaledNumberRange';
import { CreditRating } from '#lib-backend/funding/resources/CreditRating/CreditRating';
import { EntityResource } from '#lib-backend/resource/resources/EntityResource/EntityResource';
import { withEntity } from '#lib-backend/resource/utils/withEntity/withEntity';
import { withField } from '#lib-backend/resource/utils/withField/withField';
import { type AmountUnitModel, type RelativeDateUnitModel } from '#lib-frontend/data/data.models';
import { DATA_TYPE, PROPERTY_TYPE } from '#lib-shared/data/data.constants';
import { type ScaledNumberRangeModel } from '#lib-shared/data/resources/ScaledNumberRange/ScaledNumberRange.models';
import { CREDIT_RATING_RESOURCE_NAME } from '#lib-shared/funding/resources/CreditRating/CreditRating.constants';
import { type CreditRatingModel } from '#lib-shared/funding/resources/CreditRating/CreditRating.models';
import { FUNDING_RESOURCE_NAME } from '#lib-shared/funding/resources/Funding/Funding.constants';
import { type FundingModel } from '#lib-shared/funding/resources/Funding/Funding.models';

@withEntity({ isRepository: true, name: FUNDING_RESOURCE_NAME })
export class Funding extends EntityResource implements FundingModel {
  @withField({ Resource: CreditRating, isArray: true, type: PROPERTY_TYPE.RESOURCE })
  [CREDIT_RATING_RESOURCE_NAME]?: Array<CreditRatingModel>;

  @withField({ Resource: ScaledNumberRange, type: PROPERTY_TYPE.RESOURCE })
  amount?: ScaledNumberRangeModel<AmountUnitModel>;

  @withField({ type: DATA_TYPE.STRING })
  currency?: string;

  @withField({ Resource: ScaledNumberRange, type: PROPERTY_TYPE.RESOURCE })
  maturity?: ScaledNumberRangeModel<RelativeDateUnitModel>;
}
