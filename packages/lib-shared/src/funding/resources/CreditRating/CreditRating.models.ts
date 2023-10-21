import {
  type CREDIT_RATING_STEP,
  type CREDIT_RATING_WATCH,
} from '#lib-shared/funding/resources/CreditRating/CreditRating.constants';
import { type RatingAgencyModel } from '#lib-shared/funding/resources/RatingAgency/RatingAgency.models';
import { type EmbeddedResourceModel } from '#lib-shared/resource/resources/EmbeddedResource/EmbeddedResource.models';
import { type EntityResourceDataModel } from '#lib-shared/resource/resources/EntityResource/EntityResource.models';

export type CreditRatingModel = EmbeddedResourceModel & {
  agency?: RatingAgencyModel;

  longTermStep?: CreditRatingStepModel;

  longTermWatch?: CreditRatingWatchModel;
};

export type CreditRatingFormModel = EntityResourceDataModel<CreditRatingModel>;

export type CreditRatingStepModel = `${CREDIT_RATING_STEP}`;

export type CreditRatingWatchModel = `${CREDIT_RATING_WATCH}`;
