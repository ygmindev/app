import { Funding } from '#lib-backend/funding/resources/Funding/Funding';
import { RatingAgency } from '#lib-backend/funding/resources/RatingAgency/RatingAgency';
import { EntityResource } from '#lib-backend/resource/resources/EntityResource/EntityResource';
import { withEntity } from '#lib-backend/resource/utils/withEntity/withEntity';
import { withField } from '#lib-backend/resource/utils/withField/withField';
import { FIELD_RELATION } from '#lib-backend/resource/utils/withField/withField.constants';
import { DATA_TYPE, PROPERTY_TYPE } from '#lib-shared/data/data.constants';
import { CREDIT_RATING_RESOURCE_NAME } from '#lib-shared/funding/resources/CreditRating/CreditRating.constants';
import {
  type CreditRatingCategoryModel,
  type CreditRatingModel,
  type CreditRatingWatchModel,
} from '#lib-shared/funding/resources/CreditRating/CreditRating.models';
import { FUNDING_RESOURCE_NAME } from '#lib-shared/funding/resources/Funding/Funding.constants';
import { type RatingAgencyModel } from '#lib-shared/funding/resources/RatingAgency/RatingAgency.models';

@withEntity({ isRepository: true, name: CREDIT_RATING_RESOURCE_NAME })
export class CreditRating extends EntityResource implements CreditRatingModel {
  @withField({ Resource: () => RatingAgency, isOptional: true, type: PROPERTY_TYPE.RESOURCE })
  agency?: RatingAgencyModel;

  @withField({
    Resource: () => Funding,
    isArray: true,
    isOptional: true,
    relation: FIELD_RELATION.MANY_TO_ONE,
    type: PROPERTY_TYPE.RESOURCE,
  })
  [FUNDING_RESOURCE_NAME]?: Array<RatingAgencyModel>;

  @withField({ isOptional: true, type: DATA_TYPE.STRING })
  longTermCategory?: CreditRatingCategoryModel;

  @withField({ isOptional: true, type: DATA_TYPE.STRING })
  longTermWatch?: CreditRatingWatchModel;
}
