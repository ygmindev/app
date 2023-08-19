import {
  type EntityResourceDataModel,
  type EntityResourceModel,
} from '#lib-shared/resource/resources/EntityResource/EntityResource.models';

export type UnderwriterModel = {
  name: string;
} & EntityResourceModel;

export type UnderwriterFormModel = EntityResourceDataModel<UnderwriterModel>;
