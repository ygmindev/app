import { withResolver } from '@lib/backend/http/decorators/withResolver/withResolver';
import { EntityResourceResolver } from '@lib/backend/resource/resources/EntityResource/EntityResourceResolver/EntityResourceResolver';
import { User } from '@lib/backend/user/resources/User/User';
import { UserService } from '@lib/backend/user/resources/User/UserService/UserService';
import { ACCESS_LEVEL } from '@lib/shared/auth/resources/Access/Access.constants';
import { withContainer } from '@lib/shared/core/decorators/withContainer/withContainer';
import { USER_RESOURCE_NAME } from '@lib/shared/user/resources/User/User.constants';
import type { UserFormModel, UserModel } from '@lib/shared/user/resources/User/User.models';
import type { UserServiceModel } from '@lib/shared/user/resources/User/UserService/UserService.models';

@withContainer()
@withResolver({ Resource: User })
export class UserResolver
  extends EntityResourceResolver<UserModel, UserFormModel>({
    Resource: User,
    ResourceService: UserService,
    getAccess: ACCESS_LEVEL.PUBLIC,
    name: USER_RESOURCE_NAME,
    updateAccess: ACCESS_LEVEL.PROTECTED,
  })
  implements UserServiceModel {}
