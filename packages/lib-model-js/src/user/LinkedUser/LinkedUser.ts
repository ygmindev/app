import { EntityResource } from '@lib/model/resource/EntityResource/EntityResource';
import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { DATA_TYPE } from '@lib/shared/data/data.constants';
import { LINKED_USER_RESOURCE_NAME } from '@lib/model/user/LinkedUser/LinkedUser.constants';
import {
  type LinkedUserModel,
  type LinkedUserTypeModel,
} from '@lib/model/user/LinkedUser/LinkedUser.models';

@withEntity({ isDatabase: true, name: LINKED_USER_RESOURCE_NAME })
export class LinkedUser extends EntityResource implements LinkedUserModel {
  @withField({ isDatabase: true, type: DATA_TYPE.STRING })
  externalId!: string;

  @withField({ isDatabase: true, type: DATA_TYPE.STRING })
  type!: LinkedUserTypeModel;
}
