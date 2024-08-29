import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { createEmbeddedResourceImplementation } from '@lib/backend/resource/utils/createEmbeddedResourceImplementation/createEmbeddedResourceImplementation';
import { LinkedUser } from '@lib/backend/user/resources/LinkedUser/LinkedUser';
import { UserImplementation } from '@lib/backend/user/resources/User/UserImplementation/UserImplementation';
import { LINKED_USER_RESOURCE_NAME } from '@lib/shared/user/resources/LinkedUser/LinkedUser.constants';
import {
  type LinkedUserFormModel,
  type LinkedUserModel,
} from '@lib/shared/user/resources/LinkedUser/LinkedUser.models';
import { type LinkedUserImplementationModel } from '@lib/shared/user/resources/LinkedUser/LinkedUserImplementation/LinkedUserImplementation.models';
import { type UserFormModel, type UserModel } from '@lib/shared/user/resources/User/User.models';

@withContainer()
export class LinkedUserImplementation
  extends createEmbeddedResourceImplementation<
    LinkedUserModel,
    LinkedUserFormModel,
    UserModel,
    UserFormModel
  >({
    Resource: LinkedUser,
    RootImplementation: UserImplementation,
    name: LINKED_USER_RESOURCE_NAME,
  })
  implements LinkedUserImplementationModel {}
