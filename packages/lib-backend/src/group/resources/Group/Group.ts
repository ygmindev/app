import { ProtectedResource } from '#lib-backend/auth/resources/ProtectedResource/ProtectedResource';
import { withEntity } from '#lib-backend/resource/utils/withEntity/withEntity';
import { withField } from '#lib-backend/resource/utils/withField/withField';
import { DATA_TYPE } from '#lib-shared/data/data.constants';
import { GROUP_RESOURCE_NAME } from '#lib-shared/group/resources/Group/Group.constants';
import {
  type GroupModel,
  type GroupTypeModel,
} from '#lib-shared/group/resources/Group/Group.models';

@withEntity({ isRepository: true, name: GROUP_RESOURCE_NAME })
export class Group extends ProtectedResource implements GroupModel {
  @withField({ isRepository: true, type: DATA_TYPE.STRING })
  name!: string;

  @withField({ isArray: true, isOptional: true, isRepository: true, type: DATA_TYPE.STRING })
  types?: Array<GroupTypeModel>;

  @withField({ isOptional: true, isRepository: true, type: DATA_TYPE.STRING })
  profileImage?: string;
}
