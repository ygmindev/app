import { type RoleModel } from '@lib/model/auth/Role/Role.models';
import { type GroupModel } from '@lib/model/group/Group/Group.models';
import { type EmbeddedResourceImplementationModel } from '@lib/model/resource/EmbeddedResource/EmbeddedResourceImplementation/EmbeddedResourceImplementation.models';

export type RoleImplementationModel = EmbeddedResourceImplementationModel<RoleModel, GroupModel>;
