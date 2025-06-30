import { Access } from '@lib/backend/auth/resources/Access/Access';
import { Role } from '@lib/backend/auth/resources/Role/Role';
import { EntityResource } from '@lib/backend/resource/resources/EntityResource/EntityResource';
import { Collection } from '@lib/model/core/Collection/Collection';
import { type CollectionModel } from '@lib/model/core/Collection/Collection.models';
import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { withOneToManyField } from '@lib/backend/resource/utils/withOneToManyField/withOneToManyField';
import { ACCESS_RESOURCE_NAME } from '@lib/shared/auth/resources/Access/Access.constants';
import { AccessModel } from '@lib/shared/auth/resources/Access/Access.models';
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
  @withOneToManyField({ Resource: () => Access, root: GROUP_RESOURCE_NAME })
  [ACCESS_RESOURCE_NAME]?: CollectionModel<AccessModel> = new Collection(this);

  @withOneToManyField({ Resource: () => Role, root: GROUP_RESOURCE_NAME })
  [ROLE_RESOURCE_NAME]?: CollectionModel<RoleModel> = new Collection(this);

  @withField({ isDatabase: true, isOptional: true, type: DATA_TYPE.STRING })
  logo?: string;

  @withField({ isDatabase: true, type: DATA_TYPE.STRING })
  name!: string;

  @withField({ isArray: true, isDatabase: true, isOptional: true, type: DATA_TYPE.STRING })
  types?: Array<GroupTypeModel>;
}
