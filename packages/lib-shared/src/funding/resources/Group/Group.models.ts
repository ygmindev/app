import { type AccessModel } from '#lib-shared/auth/resources/Access/Access.models';
import {
  type EntityResourceDataModel,
  type EntityResourceModel,
} from '#lib-shared/resource/resources/EntityResource/EntityResource.models';

export type GroupModel = EntityResourceModel & {
  access?: Array<AccessModel>;

  name: string;
};

export type GroupFormModel = EntityResourceDataModel<GroupModel>;
