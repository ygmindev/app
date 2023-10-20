import { type EmbeddedResourceModel } from '#lib-shared/resource/resources/EmbeddedResource/EmbeddedResource.models';
import { type EntityResourceDataModel } from '#lib-shared/resource/resources/EntityResource/EntityResource.models';

export type RatingStepModel = EmbeddedResourceModel & {
  name: string;
  rank: number;
};

export type RatingStepFormModel = EntityResourceDataModel<RatingStepModel>;
