import {
  type EntityResourceDataModel,
  type EntityResourceModel,
} from '#lib-shared/resource/resources/EntityResource/EntityResource.models';

export type UnderwriterModel = EntityResourceModel & {};

export type UnderwriterFormModel = EntityResourceDataModel<UnderwriterModel>;
