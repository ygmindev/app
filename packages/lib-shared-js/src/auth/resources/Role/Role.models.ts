import { type RefFieldModel } from '@lib/backend/resource/utils/RefField/RefField.models';
import { type GroupModel } from '@lib/shared/group/resources/Group/Group.models';
import { type EmbeddedResourceModel } from '@lib/shared/resource/resources/EmbeddedResource/EmbeddedResource.models';
import { type EntityResourceDataModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';

export type RoleModel = EmbeddedResourceModel & {
  _group?: RefFieldModel<GroupModel>;

  name?: string;
};

export type RoleFormModel = EntityResourceDataModel<RoleModel>;
