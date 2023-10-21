import {
  type EntityResourceDataModel,
  type EntityResourceModel,
} from '#lib-shared/resource/resources/EntityResource/EntityResource.models';

export type RatingAgencyModel = EntityResourceModel & {
  logo?: string;

  name: string;
};

export type RatingAgencyFormModel = EntityResourceDataModel<RatingAgencyModel>;
