import { type EmbeddedResourceServiceModel } from '#lib-shared/resource/resources/EmbeddedResource/EmbeddedResourceService/EmbeddedResourceService.models';
import {
type  RatingStepFormModel,
  RatingStepModel,
} from '#lib-shared/funding/resources/RatingStep/RatingStep.models';
import { type RatingAgencyModel } from '#lib-shared/funding/resources/RatingAgency/RatingAgency.models';

export type RatingStepServiceModel = EmbeddedResourceServiceModel<
    RatingStepModel,
    RatingStepFormModel,
    RatingAgencyModel,
  >;
