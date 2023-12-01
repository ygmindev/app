import {
  type CREDIT_RATING_VALUE,
  type CREDIT_RATING_WATCH,
} from '#lib-shared/funding/resources/CreditRating/CreditRating.constants';
import { type RATING_AGENCY_RESOURCE_NAME } from '#lib-shared/funding/resources/RatingAgency/RatingAgency.constants';
import { type RatingAgencyModel } from '#lib-shared/funding/resources/RatingAgency/RatingAgency.models';
import { type EmbeddedResourceModel } from '#lib-shared/resource/resources/EmbeddedResource/EmbeddedResource.models';
import { type EntityResourceDataModel } from '#lib-shared/resource/resources/EntityResource/EntityResource.models';

export type CreditRatingModel = EmbeddedResourceModel & {
  [RATING_AGENCY_RESOURCE_NAME]?: RatingAgencyModel;

  longTermRating?: CreditRatingValueModel;

  longTermWatch?: CreditRatingWatchModel;
};

export type CreditRatingFormModel = EntityResourceDataModel<CreditRatingModel>;

export type CreditRatingValueModel = `${CREDIT_RATING_VALUE}`;

export type CreditRatingWatchModel = `${CREDIT_RATING_WATCH}`;
