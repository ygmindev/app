import { type CREDIT_RATING_TYPE } from '#lib-shared/funding/resources/CreditRating/CreditRating.constants';
import { type EmbeddedResourceModel } from '#lib-shared/resource/resources/EmbeddedResource/EmbeddedResource.models';
import { type EntityResourceDataModel } from '#lib-shared/resource/resources/EntityResource/EntityResource.models';

export type CreditRatingModel = EmbeddedResourceModel & {
  _agency: string;

  type: CreditRatingTypeModel;

  value: string;
};

export type CreditRatingFormModel = EntityResourceDataModel<CreditRatingModel>;

export type CreditRatingTypeModel = `${CREDIT_RATING_TYPE}`;
