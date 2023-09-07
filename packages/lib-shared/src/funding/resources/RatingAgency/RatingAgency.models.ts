import { type CREDIT_RATING_CATEGORY } from '#lib-shared/funding/resources/CreditRating/CreditRating.constants';
import {
  type EntityResourceDataModel,
  type EntityResourceModel,
} from '#lib-shared/resource/resources/EntityResource/EntityResource.models';

export type RatingAgencyModel = EntityResourceModel & {
  name: string;
  [CREDIT_RATING_CATEGORY.AAA]?: string;
  [CREDIT_RATING_CATEGORY.AAp]?: string;
  [CREDIT_RATING_CATEGORY.AA]?: string;
  [CREDIT_RATING_CATEGORY.AAm]?: string;
  [CREDIT_RATING_CATEGORY.Ap]?: string;
  [CREDIT_RATING_CATEGORY.A]?: string;
  [CREDIT_RATING_CATEGORY.Am]?: string;
  [CREDIT_RATING_CATEGORY.BBBp]?: string;
  [CREDIT_RATING_CATEGORY.BBB]?: string;
  [CREDIT_RATING_CATEGORY.BBBm]?: string;
  [CREDIT_RATING_CATEGORY.BBp]?: string;
  [CREDIT_RATING_CATEGORY.BB]?: string;
  [CREDIT_RATING_CATEGORY.BBm]?: string;
  [CREDIT_RATING_CATEGORY.Bp]?: string;
  [CREDIT_RATING_CATEGORY.B]?: string;
  [CREDIT_RATING_CATEGORY.Bm]?: string;
  [CREDIT_RATING_CATEGORY.CCCp]?: string;
  [CREDIT_RATING_CATEGORY.CCC]?: string;
  [CREDIT_RATING_CATEGORY.CCCm]?: string;
  [CREDIT_RATING_CATEGORY.D]?: string;
};

export type RatingAgencyFormModel = EntityResourceDataModel<RatingAgencyModel>;
