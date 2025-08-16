import { type RefModel } from '@lib/backend/resource/utils/RefModel/RefModel.models';
import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { withManyToOneField } from '@lib/backend/resource/utils/withManyToOneField/withManyToOneField';
import { ROLE_RESOURCE_NAME } from '@lib/model/auth/Role/Role.constants';
import { type RoleModel } from '@lib/model/auth/Role/Role.models';
import { GROUP_RESOURCE_NAME } from '@lib/model/group/Group/Group.constants';
import { Group } from '@lib/model/group/Group/Group.entity';
import { type GroupModel } from '@lib/model/group/Group/Group.models';
import { EntityResource } from '@lib/model/resource/EntityResource/EntityResource';
import { DATA_TYPE } from '@lib/shared/data/data.constants';

@withEntity({ isDatabase: true, name: ROLE_RESOURCE_NAME })
export class Role extends EntityResource implements RoleModel {
  @withManyToOneField({ Resource: () => Group })
  [GROUP_RESOURCE_NAME]?: RefModel<GroupModel>;

  @withField({ isDatabase: true, isOptional: true, type: DATA_TYPE.STRING })
  name?: string;
}

export default Role;
