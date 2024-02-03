import {
  type EntityResourceDataModel,
  type EntityResourceModel,
} from '@lib/shared/resource/resources/EntityResource/EntityResource.models';

export type SpecificationModel = EntityResourceModel & {
  name: string;
};

export type SpecificationFormModel = EntityResourceDataModel<SpecificationModel>;
