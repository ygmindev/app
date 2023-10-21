import { RatingAgency } from '#lib-backend/funding/resources/RatingAgency/RatingAgency';
import { EmbeddedResource } from '#lib-backend/resource/resources/EmbeddedResource/EmbeddedResource';
import { withEntity } from '#lib-backend/resource/utils/withEntity/withEntity';
import { withField } from '#lib-backend/resource/utils/withField/withField';
import { FIELD_RELATION } from '#lib-backend/resource/utils/withField/withField.constants';
import { DATA_TYPE, PROPERTY_TYPE } from '#lib-shared/data/data.constants';
import { CREDIT_RATING_RESOURCE_NAME } from '#lib-shared/funding/resources/CreditRating/CreditRating.constants';
import {
  type CreditRatingModel,
  type CreditRatingValueModel,
  type CreditRatingWatchModel,
} from '#lib-shared/funding/resources/CreditRating/CreditRating.models';
import { type RatingAgencyModel } from '#lib-shared/funding/resources/RatingAgency/RatingAgency.models';

@withEntity({ isEmbeddable: true, isRepository: true, name: CREDIT_RATING_RESOURCE_NAME })
export class CreditRating extends EmbeddedResource implements CreditRatingModel {
  @withField({
    Resource: () => RatingAgency,
    isOptional: true,
    isRepository: true,
    relation: FIELD_RELATION.MANY_TO_ONE,
    type: PROPERTY_TYPE.RESOURCE,
  })
  agency?: RatingAgencyModel;

  @withField({ isOptional: true, isRepository: true, type: DATA_TYPE.STRING })
  longTermRating?: CreditRatingValueModel;

  @withField({ isOptional: true, isRepository: true, type: DATA_TYPE.STRING })
  longTermWatch?: CreditRatingWatchModel;
}
