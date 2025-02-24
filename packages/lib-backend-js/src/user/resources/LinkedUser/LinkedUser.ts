import { EmbeddedResource } from '@lib/backend/resource/resources/EmbeddedResource/EmbeddedResource';
import { type RefFieldModel } from '@lib/backend/resource/utils/RefField/RefField.models';
import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { withRootField } from '@lib/backend/resource/utils/withRootField/withRootField';
import { User } from '@lib/backend/user/resources/User/User';
import { DATA_TYPE } from '@lib/shared/data/data.constants';
import { LINKED_USER_RESOURCE_NAME } from '@lib/shared/user/resources/LinkedUser/LinkedUser.constants';
import {
  type LinkedUserModel,
  type LinkedUserTypeModel,
} from '@lib/shared/user/resources/LinkedUser/LinkedUser.models';
import { USER_RESOURCE_NAME } from '@lib/shared/user/resources/User/User.constants';
import { type UserModel } from '@lib/shared/user/resources/User/User.models';

@withEntity({ isDatabase: true, name: LINKED_USER_RESOURCE_NAME })
export class LinkedUser extends EmbeddedResource implements LinkedUserModel {
  @withRootField({ Resource: () => User, mappedBy: LINKED_USER_RESOURCE_NAME })
  [USER_RESOURCE_NAME]!: RefFieldModel<UserModel>;

  @withField({ isDatabase: true, type: DATA_TYPE.STRING })
  externalId!: string;

  @withField({ isDatabase: true, type: DATA_TYPE.STRING })
  type!: LinkedUserTypeModel;
}
