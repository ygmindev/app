import { withResolver } from '@lib/backend/graphql/decorators/withResolver/withResolver';
import { EntityResourceResolver } from '@lib/backend/resource/resources/EntityResource/EntityResourceResolver/EntityResourceResolver';
import type { EntityResourceResolverModel } from '@lib/backend/resource/resources/EntityResource/EntityResourceResolver/EntityResourceResolver.models';
import { User } from '@lib/backend/user/resources/User/User';
import { UserService } from '@lib/backend/user/resources/User/UserService/UserService';
import { withContainer } from '@lib/shared/core/decorators/withContainer/withContainer';
import { USER_RESOURCE_NAME } from '@lib/shared/user/resources/User/User.constants';
import type { UserFormModel, UserModel } from '@lib/shared/user/resources/User/User.models';

@withContainer()
@withResolver({ Resource: User })
export class UserResolver
  extends EntityResourceResolver<UserModel, UserFormModel>({
    Resource: User,
    ResourceService: UserService,
    name: USER_RESOURCE_NAME,
  })
  implements EntityResourceResolverModel<UserModel, UserFormModel> {}
