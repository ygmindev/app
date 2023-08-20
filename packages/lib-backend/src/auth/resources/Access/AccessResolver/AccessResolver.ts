import { Access } from '#lib-backend/auth/resources/Access/Access';
import { type AccessResolverModel } from '#lib-backend/auth/resources/Access/AccessResolver/AccessResolver.models';
import { AccessService } from '#lib-backend/auth/resources/Access/AccessService/AccessService';
import { Container } from '#lib-backend/core/utils/Container/Container';
import { withContainer } from '#lib-backend/core/utils/withContainer/withContainer';
import { withFieldResolver } from '#lib-backend/http/utils/withFieldResolver/withFieldResolver';
import { withResolver } from '#lib-backend/http/utils/withResolver/withResolver';
import { withSelf } from '#lib-backend/http/utils/withSelf/withSelf';
import { createEntityResourceResolver } from '#lib-backend/resource/utils/createEntityResourceResolver/createEntityResourceResolver';
import { User } from '#lib-backend/user/resources/User/User';
import { UserService } from '#lib-backend/user/resources/User/UserService/UserService';
import { ACCESS_RESOURCE_NAME } from '#lib-shared/auth/resources/Access/Access.constants';
import {
  type AccessFormModel,
  type AccessModel,
} from '#lib-shared/auth/resources/Access/Access.models';
import { NotFoundError } from '#lib-shared/core/errors/NotFoundError/NotFoundError';
import { type UserModel } from '#lib-shared/user/resources/User/User.models';

@withContainer()
@withResolver({ Resource: Access })
export class AccessResolver
  extends createEntityResourceResolver<AccessModel, AccessFormModel>({
    Resource: Access,
    ResourceService: AccessService,
    name: ACCESS_RESOURCE_NAME,
  })
  implements AccessResolverModel
{
  @withFieldResolver({ Resource: User })
  async user(@withSelf() access: Access): Promise<UserModel> {
    const { result } = await Container.get(UserService).get({
      filter: [{ field: '_id', value: access._uid }],
    });
    if (result) {
      return result;
    }
    throw new NotFoundError(access._uid);
  }
}
