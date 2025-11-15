import { withDatabaseField } from '@lib/backend/resource/utils/withDatabaseField/withDatabaseField';
import { withEmbeddedEntity } from '@lib/backend/resource/utils/withEmbeddedEntity/withEmbeddedEntity';
import { EmbeddedResource } from '@lib/model/resource/EmbeddedResource/EmbeddedResource';
import { LINKED_USER_RESOURCE_NAME } from '@lib/model/user/LinkedUser/LinkedUser.constants';
import {
  LINKED_USER_TYPE,
  type LinkedUserModel,
} from '@lib/model/user/LinkedUser/LinkedUser.models';

@withEmbeddedEntity({ name: LINKED_USER_RESOURCE_NAME })
export class LinkedUser extends EmbeddedResource implements LinkedUserModel {
  @withDatabaseField()
  externalId!: string;

  @withDatabaseField()
  type!: LINKED_USER_TYPE;
}

export default LinkedUser;
