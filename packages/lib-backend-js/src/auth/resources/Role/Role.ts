import { Group } from '@lib/backend/group/resources/Group/Group';
import { EntityResource } from '@lib/backend/resource/resources/EntityResource/EntityResource';
import { type RefFieldModel } from '@lib/backend/resource/utils/RefField/RefField.models';
import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { withManyToOneField } from '@lib/backend/resource/utils/withManyToOneField/withManyToOneField';
import { ROLE_RESOURCE_NAME } from '@lib/shared/auth/resources/Role/Role.constants';
import { type RoleModel } from '@lib/shared/auth/resources/Role/Role.models';
import { DATA_TYPE } from '@lib/shared/data/data.constants';
import { GROUP_RESOURCE_NAME } from '@lib/shared/group/resources/Group/Group.constants';
import { type GroupModel } from '@lib/shared/group/resources/Group/Group.models';

@withEntity({ isDatabase: true, name: ROLE_RESOURCE_NAME })
export class Role extends EntityResource implements RoleModel {
  @withManyToOneField({ Resource: () => Group, mappedBy: ROLE_RESOURCE_NAME })
  [GROUP_RESOURCE_NAME]?: RefFieldModel<GroupModel>;

  @withField({ isDatabase: true, isOptional: true, type: DATA_TYPE.STRING })
  name?: string;
}
