import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { withResolver } from '@lib/backend/http/utils/withResolver/withResolver';
import { createEntityResourceResolver } from '@lib/backend/resource/utils/createEntityResourceResolver/createEntityResourceResolver';
import { ACCESS_LEVEL } from '@lib/model/auth/Access/Access.constants';
import { User } from '@lib/model/user/User/User.entity';
import { USER_RESOURCE_NAME } from '@lib/model/user/User/User.constants';
import { type UserModel } from '@lib/model/user/User/User.models';
import { UserImplementation } from '@lib/model/user/User/UserImplementation/UserImplementation';
import { type UserResolverModel } from '@lib/model/user/User/UserResolver/UserResolver.models';

@withContainer()
@withResolver({ Resource: () => User })
export class UserResolver
  extends createEntityResourceResolver<UserModel>({
    Resource: () => User,
    ResourceImplementation: UserImplementation,
    access: {
      read: ACCESS_LEVEL.PUBLIC,
    },
    name: USER_RESOURCE_NAME,
  })
  implements UserResolverModel {}
