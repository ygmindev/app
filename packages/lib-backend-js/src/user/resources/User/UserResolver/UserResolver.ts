import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { withResolver } from '@lib/backend/http/utils/withResolver/withResolver';
import { createEntityResourceResolver } from '@lib/backend/resource/utils/createEntityResourceResolver/createEntityResourceResolver';
import { User } from '@lib/backend/user/resources/User/User';
import { UserImplementation } from '@lib/backend/user/resources/User/UserImplementation/UserImplementation';
import { type UserResolverModel } from '@lib/backend/user/resources/User/UserResolver/UserResolver.models';
import { ACCESS_LEVEL } from '@lib/shared/auth/resources/Access/Access.constants';
import { RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.constants';
import { USER_RESOURCE_NAME } from '@lib/shared/user/resources/User/User.constants';
import { type UserModel } from '@lib/shared/user/resources/User/User.models';

@withContainer()
@withResolver({ Resource: () => User })
export class UserResolver
  extends createEntityResourceResolver<UserModel>({
    Resource: () => User,
    ResourceImplementation: UserImplementation,
    access: {
      [RESOURCE_METHOD_TYPE.GET]: ACCESS_LEVEL.PUBLIC,
      [RESOURCE_METHOD_TYPE.GET_MANY]: ACCESS_LEVEL.PUBLIC,
    },
    name: USER_RESOURCE_NAME,
  })
  implements UserResolverModel {}
