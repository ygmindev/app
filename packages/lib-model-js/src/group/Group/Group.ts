import { Collection } from '@lib/backend/core/utils/Collection/Collection';
import { type CollectionModel } from '@lib/backend/core/utils/Collection/Collection.models';
import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { withOneToManyField } from '@lib/backend/resource/utils/withOneToManyField/withOneToManyField';
import { Access } from '@lib/model/auth/Access/Access';
import { ACCESS_RESOURCE_NAME } from '@lib/model/auth/Access/Access.constants';
import { AccessModel } from '@lib/model/auth/Access/Access.models';
import { Role } from '@lib/model/auth/Role/Role';
import { ROLE_RESOURCE_NAME } from '@lib/model/auth/Role/Role.constants';
import { RoleModel } from '@lib/model/auth/Role/Role.models';
import { GROUP_RESOURCE_NAME } from '@lib/model/group/Group/Group.constants';
import { GROUP_TYPE, type GroupModel } from '@lib/model/group/Group/Group.models';
import { EntityResource } from '@lib/model/resource/EntityResource/EntityResource';
import { DATA_TYPE } from '@lib/shared/data/data.constants';

@withEntity({ isDatabase: true, name: GROUP_RESOURCE_NAME })
export class Group extends EntityResource implements GroupModel {
  @withOneToManyField({ Resource: () => Access, root: GROUP_RESOURCE_NAME })
  [ACCESS_RESOURCE_NAME]?: CollectionModel<AccessModel> = new Collection(this);

  @withOneToManyField({ Resource: () => Role, root: GROUP_RESOURCE_NAME })
  [ROLE_RESOURCE_NAME]?: CollectionModel<RoleModel> = new Collection(this);

  @withField({ isDatabase: true, isOptional: true, type: DATA_TYPE.STRING })
  logo?: string;

  @withField({ isDatabase: true, type: DATA_TYPE.STRING })
  name!: string;

  @withField({ isArray: true, isDatabase: true, isOptional: true, type: DATA_TYPE.STRING })
  types?: Array<GROUP_TYPE>;
}
