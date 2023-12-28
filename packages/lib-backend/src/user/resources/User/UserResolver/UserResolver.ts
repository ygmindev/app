import isEqual from 'lodash/isEqual';

import { withContainer } from '#lib-backend/core/utils/withContainer/withContainer';
import { withResolver } from '#lib-backend/http/utils/withResolver/withResolver';
import { createEntityResourceResolver } from '#lib-backend/resource/utils/createEntityResourceResolver/createEntityResourceResolver';
import { User } from '#lib-backend/user/resources/User/User';
import { type UserResolverModel } from '#lib-backend/user/resources/User/UserResolver/UserResolver.models';
import { UserService } from '#lib-backend/user/resources/User/UserService/UserService';
import { USER_RESOURCE_NAME } from '#lib-shared/user/resources/User/User.constants';
import { type UserFormModel, type UserModel } from '#lib-shared/user/resources/User/User.models';

@withContainer()
@withResolver({ Resource: () => User })
export class UserResolver
  extends createEntityResourceResolver<UserModel, UserFormModel>({
    Resource: () => User,
    ResourceService: UserService,
    authorizer: {
      Update: ({ context, input }) => isEqual(context?.user?._id, input.filter._id),
    },
    name: USER_RESOURCE_NAME,
  })
  implements UserResolverModel {}
