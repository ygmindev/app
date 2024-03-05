import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { withResolver } from '@lib/backend/http/utils/withResolver/withResolver';
import { createEntityResourceResolver } from '@lib/backend/resource/utils/createEntityResourceResolver/createEntityResourceResolver';
import { User } from '@lib/backend/user/resources/User/User';
import { UserImplementation } from '@lib/backend/user/resources/User/UserImplementation/UserImplementation';
import { type UserResolverModel } from '@lib/backend/user/resources/User/UserResolver/UserResolver.models';
import { USER_RESOURCE_NAME } from '@lib/shared/user/resources/User/User.constants';
import { type UserFormModel, type UserModel } from '@lib/shared/user/resources/User/User.models';
// import isEqual from 'lodash/isEqual';

@withContainer()
@withResolver({ Resource: () => User })
export class UserResolver
  extends createEntityResourceResolver<UserModel, UserFormModel>({
    Resource: () => User,
    ResourceImplementation: UserImplementation,
    authorizer: {
      // Update: ({ context, input }) => isEqual(context?.user?._id, input?.filter?._id),
    },
    name: USER_RESOURCE_NAME,
  })
  implements UserResolverModel {}
