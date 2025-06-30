// import { selfAuthorizer } from '@lib/backend/auth/utils/selfAuthorizer/selfAuthorizer';
import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { withResolver } from '@lib/backend/http/utils/withResolver/withResolver';
import { createEmbeddedResourceResolver } from '@lib/backend/resource/utils/createEmbeddedResourceResolver/createEmbeddedResourceResolver';
import { LinkedUser } from '@lib/model/user/LinkedUser/LinkedUser';
import { LinkedUserImplementation } from '@lib/model/user/LinkedUser/LinkedUserImplementation/LinkedUserImplementation';
import { User } from '@lib/model/user/User/User';
import { LINKED_USER_RESOURCE_NAME } from '@lib/model/user/LinkedUser/LinkedUser.constants';
import { type LinkedUserModel } from '@lib/model/user/LinkedUser/LinkedUser.models';
import { type LinkedUserImplementationModel } from '@lib/model/user/LinkedUser/LinkedUserImplementation/LinkedUserImplementation.models';
import { type UserModel } from '@lib/model/user/User/User.models';

@withContainer()
@withResolver({ Resource: () => LinkedUser })
export class LinkedUserResolver
  extends createEmbeddedResourceResolver<LinkedUserModel, UserModel>({
    Resource: () => LinkedUser,
    ResourceImplementation: LinkedUserImplementation,
    RootResource: () => User,
    // authorizer: { default: selfAuthorizer },
    name: LINKED_USER_RESOURCE_NAME,
  })
  implements LinkedUserImplementationModel {}
