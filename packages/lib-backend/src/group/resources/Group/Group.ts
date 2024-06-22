import { Role } from '@lib/backend/auth/resources/Role/Role';
import { EntityResource } from '@lib/backend/resource/resources/EntityResource/EntityResource';
import { withEmbeddedResourceField } from '@lib/backend/resource/utils/withEmbeddedResourceField/withEmbeddedResourceField';
import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { ROLE_RESOURCE_NAME } from '@lib/shared/auth/resources/Role/Role.constants';
import { RoleModel } from '@lib/shared/auth/resources/Role/Role.models';
import { DATA_TYPE } from '@lib/shared/data/data.constants';
import { GROUP_RESOURCE_NAME } from '@lib/shared/group/resources/Group/Group.constants';
import {
  type GroupModel,
  type GroupTypeModel,
} from '@lib/shared/group/resources/Group/Group.models';

@withEntity({ isDatabase: true, name: GROUP_RESOURCE_NAME })
export class Group extends EntityResource implements GroupModel {
  @withEmbeddedResourceField({ Resource: () => Role, isDatabase: true, root: '_group' })
  [ROLE_RESOURCE_NAME]?: Array<RoleModel>;

  @withField({ isDatabase: true, type: DATA_TYPE.STRING })
  name!: string;

  @withField({ isArray: true, isDatabase: true, isOptional: true, type: DATA_TYPE.STRING })
  types?: Array<GroupTypeModel>;

  @withField({ isDatabase: true, isOptional: true, type: DATA_TYPE.STRING })
  logo?: string;
}
