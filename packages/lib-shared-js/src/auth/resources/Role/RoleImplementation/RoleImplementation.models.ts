import { type RoleModel } from '@lib/shared/auth/resources/Role/Role.models';
import { type GroupModel } from '@lib/shared/group/resources/Group/Group.models';
import { type EmbeddedResourceImplementationModel } from '@lib/shared/resource/resources/EmbeddedResource/EmbeddedResourceImplementation/EmbeddedResourceImplementation.models';

export type RoleImplementationModel = EmbeddedResourceImplementationModel<RoleModel, GroupModel>;
