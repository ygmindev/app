import { withContainer } from '#lib-backend/core/decorators/withContainer/withContainer';
import { EmbeddedResourceService } from '#lib-backend/resource/resources/EmbeddedResource/EmbeddedResourceService/EmbeddedResourceService';
import { UserService } from '#lib-backend/user/resources/User/UserService/UserService';
import { LINKED_USER_RESOURCE_NAME } from '#lib-shared/user/resources/LinkedUser/LinkedUser.constants';
import type {
  LinkedUserFormModel,
  LinkedUserModel,
} from '#lib-shared/user/resources/LinkedUser/LinkedUser.models';
import type { LinkedUserServiceModel } from '#lib-shared/user/resources/LinkedUser/LinkedUserService/LinkedUserService.models';
import type { UserFormModel, UserModel } from '#lib-shared/user/resources/User/User.models';

@withContainer()
export class LinkedUserService
  extends EmbeddedResourceService<LinkedUserModel, LinkedUserFormModel, UserModel, UserFormModel>({
    RootService: UserService,
    name: LINKED_USER_RESOURCE_NAME,
  })
  implements LinkedUserServiceModel {}
