import { RatingAgency } from '#lib-backend/funding/resources/RatingAgency/RatingAgency';
import { EmbeddedResource } from '#lib-backend/resource/resources/EmbeddedResource/EmbeddedResource';
import { withEntity } from '#lib-backend/resource/utils/withEntity/withEntity';
import { withField } from '#lib-backend/resource/utils/withField/withField';
import { DATA_TYPE, PROPERTY_TYPE } from '#lib-shared/data/data.constants';
import { CREDIT_RATING_RESOURCE_NAME } from '#lib-shared/funding/resources/CreditRating/CreditRating.constants';
import {
  CreditRatingCategoryModel,
  type CreditRatingModel,
} from '#lib-shared/funding/resources/CreditRating/CreditRating.models';
import { type RatingAgencyModel } from '#lib-shared/funding/resources/RatingAgency/RatingAgency.models';
import { ResolvedFieldModel } from '#lib-shared/resource/resource.models';

@withEntity({ isEmbedded: true, isRepository: true, name: CREDIT_RATING_RESOURCE_NAME })
export class CreditRating extends EmbeddedResource implements CreditRatingModel {
  @withField({ isRepository: true, type: PROPERTY_TYPE.ID })
  _agency!: string;

  @withField({ Resource: RatingAgency, isOptional: true, type: PROPERTY_TYPE.RESOURCE })
  agency?: ResolvedFieldModel<RatingAgencyModel>;

  @withField({ isOptional: true, type: DATA_TYPE.STRING })
  longTermCategory?: CreditRatingCategoryModel;
}
