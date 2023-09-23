import { Access } from '#lib-backend/auth/resources/Access/Access';
import { EntityResource } from '#lib-backend/resource/resources/EntityResource/EntityResource';
import { withEntity } from '#lib-backend/resource/utils/withEntity/withEntity';
import { withField } from '#lib-backend/resource/utils/withField/withField';
import { FIELD_RELATION } from '#lib-backend/resource/utils/withField/withField.constants';
import { type AccessModel } from '#lib-shared/auth/resources/Access/Access.models';
import { DATA_TYPE, PROPERTY_TYPE } from '#lib-shared/data/data.constants';
import { GROUP_RESOURCE_NAME } from '#lib-shared/funding/resources/Group/Group.constants';
import { type GroupModel } from '#lib-shared/funding/resources/Group/Group.models';

@withEntity({ isRepository: true, name: GROUP_RESOURCE_NAME })
export class Group extends EntityResource implements GroupModel {
  @withField({
    Resource: () => Access,
    isArray: true,
    isOptional: true,
    isRepository: true,
    relation: FIELD_RELATION.ONE_TO_MANY,
    type: PROPERTY_TYPE.RESOURCE,
  })
  access?: Array<AccessModel>;

  @withField({ isRepository: true, type: DATA_TYPE.STRING })
  name!: string;
}
