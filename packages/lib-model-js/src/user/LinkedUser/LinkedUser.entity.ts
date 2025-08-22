import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { EntityResource } from '@lib/model/resource/EntityResource/EntityResource';
import { LINKED_USER_RESOURCE_NAME } from '@lib/model/user/LinkedUser/LinkedUser.constants';
import {
  LINKED_USER_TYPE,
  type LinkedUserModel,
} from '@lib/model/user/LinkedUser/LinkedUser.models';

@withEntity({ isDatabase: true, name: LINKED_USER_RESOURCE_NAME })
export class LinkedUser extends EntityResource implements LinkedUserModel {
  @withField({ isDatabase: true })
  externalId!: string;

  @withField({ isDatabase: true })
  type!: LINKED_USER_TYPE;
}

export default LinkedUser;
