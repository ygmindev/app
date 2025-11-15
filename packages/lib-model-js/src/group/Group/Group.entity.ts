import { withDatabaseEntity } from '@lib/backend/resource/utils/withDatabaseEntity/withDatabaseEntity';
import { withDatabaseField } from '@lib/backend/resource/utils/withDatabaseField/withDatabaseField';
import { withOneToManyField } from '@lib/backend/resource/utils/withOneToManyField/withOneToManyField';
import { ACCESS_RESOURCE_NAME } from '@lib/model/auth/Access/Access.constants';
import { Access } from '@lib/model/auth/Access/Access.entity';
import { AccessModel } from '@lib/model/auth/Access/Access.models';
import { ROLE_RESOURCE_NAME } from '@lib/model/auth/Role/Role.constants';
import { Role } from '@lib/model/auth/Role/Role.entity';
import { RoleModel } from '@lib/model/auth/Role/Role.models';
import { GROUP_RESOURCE_NAME } from '@lib/model/group/Group/Group.constants';
import { GROUP_TYPE, type GroupModel } from '@lib/model/group/Group/Group.models';
import { EntityResource } from '@lib/model/resource/EntityResource/EntityResource';
import { PartialArrayModel } from '@lib/shared/core/core.models';

@withDatabaseEntity({ name: GROUP_RESOURCE_NAME })
export class Group extends EntityResource implements GroupModel {
  @withOneToManyField({ Resource: () => Access, root: GROUP_RESOURCE_NAME })
  [ACCESS_RESOURCE_NAME]?: PartialArrayModel<AccessModel>;

  @withOneToManyField({ Resource: () => Role, root: GROUP_RESOURCE_NAME })
  [ROLE_RESOURCE_NAME]?: PartialArrayModel<RoleModel>;

  @withDatabaseField({ isOptional: true })
  logo?: string;

  @withDatabaseField()
  name!: string;

  @withDatabaseField({ isOptional: true })
  types?: Array<GROUP_TYPE>;
}

export default Group;
