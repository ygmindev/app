import {
  type EntityResourceDataModel,
  type EntityResourceModel,
} from '#lib-shared/resource/resources/EntityResource/EntityResource.models';

export type GroupModel = EntityResourceModel & {};

export type GroupFormModel = EntityResourceDataModel<GroupModel>;
