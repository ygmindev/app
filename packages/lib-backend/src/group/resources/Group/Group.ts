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

@withEntity({ isRepository: true, name: GROUP_RESOURCE_NAME })
export class Group extends EntityResource implements GroupModel {
  @withEmbeddedResourceField({
    Resource: () => Role,
    isRepository: true,
    root: GROUP_RESOURCE_NAME,
  })
  [ROLE_RESOURCE_NAME]?: Array<RoleModel>;

  @withField({ isRepository: true, type: DATA_TYPE.STRING })
  name!: string;

  @withField({ isArray: true, isOptional: true, isRepository: true, type: DATA_TYPE.STRING })
  types?: Array<GroupTypeModel>;

  @withField({ isOptional: true, isRepository: true, type: DATA_TYPE.STRING })
  logo?: string;
}
