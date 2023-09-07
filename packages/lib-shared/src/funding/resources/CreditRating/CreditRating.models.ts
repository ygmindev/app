import {
  type CREDIT_RATING_CATEGORY,
  type CREDIT_RATING_WATCH,
} from '#lib-shared/funding/resources/CreditRating/CreditRating.constants';
import { type RatingAgencyModel } from '#lib-shared/funding/resources/RatingAgency/RatingAgency.models';
import { type ResolvedFieldModel } from '#lib-shared/resource/resource.models';
import { type EmbeddedResourceModel } from '#lib-shared/resource/resources/EmbeddedResource/EmbeddedResource.models';
import { type EntityResourceDataModel } from '#lib-shared/resource/resources/EntityResource/EntityResource.models';

export type CreditRatingModel = EmbeddedResourceModel & {
  _agency: string;

  agency?: ResolvedFieldModel<RatingAgencyModel>;

  longTermCategory?: CreditRatingCategoryModel;

  longTermWatch?: CreditRatingWatchModel;
};

export type CreditRatingFormModel = EntityResourceDataModel<CreditRatingModel>;

export type CreditRatingCategoryModel = `${CREDIT_RATING_CATEGORY}`;

export type CreditRatingWatchModel = `${CREDIT_RATING_WATCH}`;
