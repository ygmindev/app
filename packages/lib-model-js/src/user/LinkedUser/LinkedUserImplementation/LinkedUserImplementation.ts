import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { createEmbeddedResourceImplementation } from '@lib/backend/resource/utils/createEmbeddedResourceImplementation/createEmbeddedResourceImplementation';
import { LINKED_USER_RESOURCE_NAME } from '@lib/model/user/LinkedUser/LinkedUser.constants';
import { LinkedUser } from '@lib/model/user/LinkedUser/LinkedUser.entity';
import { type LinkedUserModel } from '@lib/model/user/LinkedUser/LinkedUser.models';
import { type LinkedUserImplementationModel } from '@lib/model/user/LinkedUser/LinkedUserImplementation/LinkedUserImplementation.models';
import { type UserModel } from '@lib/model/user/User/User.models';
import { UserImplementation } from '@lib/model/user/User/UserImplementation/UserImplementation';

@withContainer()
export class LinkedUserImplementation
  extends createEmbeddedResourceImplementation<LinkedUserModel, UserModel>({
    name: LINKED_USER_RESOURCE_NAME,
    Resource: LinkedUser,
    RootImplementation: UserImplementation,
  })
  implements LinkedUserImplementationModel {}
