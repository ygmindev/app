import { withEmbeddedEntity } from '@lib/backend/resource/utils/withEmbeddedEntity/withEmbeddedEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { EmbeddedResource } from '@lib/model/resource/EmbeddedResource/EmbeddedResource';
import { LINKED_USER_RESOURCE_NAME } from '@lib/model/user/LinkedUser/LinkedUser.constants';
import {
  LINKED_USER_TYPE,
  type LinkedUserModel,
} from '@lib/model/user/LinkedUser/LinkedUser.models';

@withEmbeddedEntity({ name: LINKED_USER_RESOURCE_NAME })
export class LinkedUser extends EmbeddedResource implements LinkedUserModel {
  @withField({ isDatabase: true })
  externalId!: string;

  @withField({ isDatabase: true })
  type!: LINKED_USER_TYPE;
}

export default LinkedUser;
