import { withResolver } from '@lib/backend/http/decorators/withResolver/withResolver';
import { EntityResourceResolver } from '@lib/backend/resource/resources/EntityResource/EntityResourceResolver/EntityResourceResolver';
import { User } from '@lib/backend/user/resources/User/User';
import { UserService } from '@lib/backend/user/resources/User/UserService/UserService';
import { withContainer } from '@lib/shared/core/decorators/withContainer/withContainer';
import { isEqual } from '@lib/shared/core/utils/isEqual/isEqual';
import { USER_RESOURCE_NAME } from '@lib/shared/user/resources/User/User.constants';
import type { UserFormModel, UserModel } from '@lib/shared/user/resources/User/User.models';
import type { UserServiceModel } from '@lib/shared/user/resources/User/UserService/UserService.models';

@withContainer()
@withResolver({ Resource: User })
export class UserResolver
  extends EntityResourceResolver<UserModel, UserFormModel>({
    Resource: User,
    ResourceService: UserService,
    authorizer: {
      Update: ({ context, input }) => isEqual(context?.user?._id, input.filter._id),
    },
    name: USER_RESOURCE_NAME,
  })
  implements UserServiceModel {}
