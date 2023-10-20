import { type RATING_STEP_RESOURCE_NAME } from '#lib-shared/funding/resources/RatingStep/RatingStep.constants';
import { type RatingStepModel } from '#lib-shared/funding/resources/RatingStep/RatingStep.models';
import {
  type EntityResourceDataModel,
  type EntityResourceModel,
} from '#lib-shared/resource/resources/EntityResource/EntityResource.models';

export type RatingAgencyModel = EntityResourceModel & {
  [RATING_STEP_RESOURCE_NAME]?: Array<RatingStepModel>;

  name: string;
};

export type RatingAgencyFormModel = EntityResourceDataModel<RatingAgencyModel>;
