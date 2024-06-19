import { Group } from '@lib/backend/group/resources/Group/Group';
import { EmbeddedResource } from '@lib/backend/resource/resources/EmbeddedResource/EmbeddedResource';
import { type RefFieldModel } from '@lib/backend/resource/utils/RefField/RefField.models';
import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { withRefField } from '@lib/backend/resource/utils/withRefField/withRefField';
import { ROLE_RESOURCE_NAME } from '@lib/shared/auth/resources/Role/Role.constants';
import { type RoleModel } from '@lib/shared/auth/resources/Role/Role.models';
import { DATA_TYPE } from '@lib/shared/data/data.constants';
import { GROUP_RESOURCE_NAME } from '@lib/shared/group/resources/Group/Group.constants';
import { type GroupModel } from '@lib/shared/group/resources/Group/Group.models';

@withEntity({ isEmbeddable: true, isRepository: true, name: ROLE_RESOURCE_NAME })
export class Role extends EmbeddedResource implements RoleModel {
  @withRefField({ Resource: () => Group })
  [GROUP_RESOURCE_NAME]?: RefFieldModel<GroupModel>;

  @withField({ isOptional: true, isRepository: true, type: DATA_TYPE.STRING })
  name?: string;
}
