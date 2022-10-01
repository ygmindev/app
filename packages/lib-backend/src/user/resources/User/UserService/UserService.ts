import { EntityResourceService } from '@lib/backend/resource/resources/EntityResource/EntityResourceService/EntityResourceService';
import { withContainer } from '@lib/shared/core/decorators/withContainer/withContainer';
import { USER_RESOURCE_NAME } from '@lib/shared/user/resources/User/User.constants';
import type { UserFormModel, UserModel } from '@lib/shared/user/resources/User/User.models';
import type { UserServiceModel } from '@lib/shared/user/resources/User/UserService/UserService.models';

@withContainer()
export class UserService
  extends EntityResourceService<UserModel, UserFormModel>({ name: USER_RESOURCE_NAME })
  implements UserServiceModel {}
