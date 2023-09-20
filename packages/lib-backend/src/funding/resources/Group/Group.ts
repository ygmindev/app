import { EntityResource } from '#lib-backend/resource/resources/EntityResource/EntityResource';
import { withEntity } from '#lib-backend/resource/utils/withEntity/withEntity';
import { withField } from '#lib-backend/resource/utils/withField/withField';
import { GROUP_RESOURCE_NAME } from '#lib-shared/funding/resources/Group/Group.constants';
import {
  type GroupFormModel,
  type GroupModel,
} from '#lib-shared/funding/resources/Group/Group.models';
import { PROPERTY_TYPE } from '#lib-shared/data/data.constants';

@withEntity({ isRepository: true, name: GROUP_RESOURCE_NAME })
export class Group extends EntityResource implements GroupModel {
  @withField({ isRepository: true, type: PROPERTY_TYPE.ID })
  id!: string;
}

@withEntity({ name: `${GROUP_RESOURCE_NAME}Form` })
export class GroupForm implements GroupFormModel {}
