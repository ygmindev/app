import { withContainer } from '@lib-backend/core/utils/withContainer/withContainer';
import { createEmbeddedResourceService } from '@lib-backend/resource/utils/createEmbeddedResourceService/createEmbeddedResourceService';
import { LinkedUser } from '@lib-backend/user/resources/LinkedUser/LinkedUser';
import { UserService } from '@lib-backend/user/resources/User/UserService/UserService';
import { LINKED_USER_RESOURCE_NAME } from '@lib-shared/user/resources/LinkedUser/LinkedUser.constants';
import {
  type LinkedUserFormModel,
  type LinkedUserModel,
} from '@lib-shared/user/resources/LinkedUser/LinkedUser.models';
import { type LinkedUserServiceModel } from '@lib-shared/user/resources/LinkedUser/LinkedUserService/LinkedUserService.models';
import { type UserFormModel, type UserModel } from '@lib-shared/user/resources/User/User.models';

@withContainer()
export class LinkedUserService
  extends createEmbeddedResourceService<
    LinkedUserModel,
    LinkedUserFormModel,
    UserModel,
    UserFormModel
  >({
    Resource: LinkedUser,
    RootService: UserService,
    name: LINKED_USER_RESOURCE_NAME,
  })
  implements LinkedUserServiceModel {}
