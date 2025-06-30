import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { createEmbeddedResourceImplementation } from '@lib/backend/resource/utils/createEmbeddedResourceImplementation/createEmbeddedResourceImplementation';
import { LinkedUser } from '@lib/model/user/LinkedUser/LinkedUser';
import { UserImplementation } from '@lib/model/user/User/UserImplementation/UserImplementation';
import { LINKED_USER_RESOURCE_NAME } from '@lib/model/user/LinkedUser/LinkedUser.constants';
import { type LinkedUserModel } from '@lib/model/user/LinkedUser/LinkedUser.models';
import { type LinkedUserImplementationModel } from '@lib/model/user/LinkedUser/LinkedUserImplementation/LinkedUserImplementation.models';
import { type UserModel } from '@lib/model/user/User/User.models';

@withContainer()
export class LinkedUserImplementation
  extends createEmbeddedResourceImplementation<LinkedUserModel, UserModel>({
    Resource: LinkedUser,
    RootImplementation: UserImplementation,
    name: LINKED_USER_RESOURCE_NAME,
  })
  implements LinkedUserImplementationModel {}
