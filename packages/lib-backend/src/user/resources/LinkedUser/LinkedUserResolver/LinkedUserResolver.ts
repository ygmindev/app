import { selfAuthorizer } from '@lib/backend/auth/utils/selfAuthorizer/selfAuthorizer';
import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { withResolver } from '@lib/backend/http/utils/withResolver/withResolver';
import { createEmbeddedResourceResolver } from '@lib/backend/resource/utils/createEmbeddedResourceResolver/createEmbeddedResourceResolver';
import { LinkedUser } from '@lib/backend/user/resources/LinkedUser/LinkedUser';
import { LinkedUserImplementation } from '@lib/backend/user/resources/LinkedUser/LinkedUserImplementation/LinkedUserImplementation';
import { User } from '@lib/backend/user/resources/User/User';
import { LINKED_USER_RESOURCE_NAME } from '@lib/shared/user/resources/LinkedUser/LinkedUser.constants';
import {
  type LinkedUserFormModel,
  type LinkedUserModel,
} from '@lib/shared/user/resources/LinkedUser/LinkedUser.models';
import { type LinkedUserImplementationModel } from '@lib/shared/user/resources/LinkedUser/LinkedUserImplementation/LinkedUserImplementation.models';
import { type UserModel } from '@lib/shared/user/resources/User/User.models';

@withContainer()
@withResolver({ Resource: () => LinkedUser })
export class LinkedUserResolver
  extends createEmbeddedResourceResolver<LinkedUserModel, LinkedUserFormModel, UserModel>({
    Resource: () => LinkedUser,
    ResourceImplementation: LinkedUserImplementation,
    RootResource: () => User,
    authorizer: { default: selfAuthorizer() },
    name: LINKED_USER_RESOURCE_NAME,
  })
  implements LinkedUserImplementationModel {}
