import { selfAuthorizer } from '#lib-backend/auth/utils/selfAuthorizer/selfAuthorizer';
import { withContainer } from '#lib-backend/core/utils/withContainer/withContainer';
import { withResolver } from '#lib-backend/http/utils/withResolver/withResolver';
import { createEmbeddedResourceResolver } from '#lib-backend/resource/utils/createEmbeddedResourceResolver/createEmbeddedResourceResolver';
import { LinkedUser } from '#lib-backend/user/resources/LinkedUser/LinkedUser';
import { LinkedUserService } from '#lib-backend/user/resources/LinkedUser/LinkedUserService/LinkedUserService';
import { User } from '#lib-backend/user/resources/User/User';
import { LINKED_USER_RESOURCE_NAME } from '#lib-shared/user/resources/LinkedUser/LinkedUser.constants';
import {
  type LinkedUserFormModel,
  type LinkedUserModel,
} from '#lib-shared/user/resources/LinkedUser/LinkedUser.models';
import { type LinkedUserServiceModel } from '#lib-shared/user/resources/LinkedUser/LinkedUserService/LinkedUserService.models';
import { type UserModel } from '#lib-shared/user/resources/User/User.models';

@withContainer()
@withResolver({ Resource: LinkedUser })
export class LinkedUserResolver
  extends createEmbeddedResourceResolver<LinkedUserModel, LinkedUserFormModel, UserModel>({
    Resource: LinkedUser,
    ResourceService: LinkedUserService,
    RootResource: User,
    authorizer: { default: selfAuthorizer() },
    name: LINKED_USER_RESOURCE_NAME,
  })
  implements LinkedUserServiceModel {}
