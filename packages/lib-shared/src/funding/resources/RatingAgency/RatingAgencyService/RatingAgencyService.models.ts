import {
  type RatingAgencyFormModel,
  type RatingAgencyModel,
} from '#lib-shared/funding/resources/RatingAgency/RatingAgency.models';
import { type EntityResourceServiceModel } from '#lib-shared/resource/resources/EntityResource/EntityResourceService/EntityResourceService.models';

export type RatingAgencyServiceModel = EntityResourceServiceModel<
  RatingAgencyModel,
  RatingAgencyFormModel
>;
