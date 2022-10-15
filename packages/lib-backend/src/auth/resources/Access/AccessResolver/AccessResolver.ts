import { Access } from '@lib/backend/auth/resources/Access/Access';
import { AccessService } from '@lib/backend/auth/resources/Access/AccessService/AccessService';
import { withFieldResolver } from '@lib/backend/graphql/decorators/withFieldResolver/withFieldResolver';
import { withResolver } from '@lib/backend/graphql/decorators/withResolver/withResolver';
import { withSelf } from '@lib/backend/graphql/decorators/withSelf/withSelf';
import { EntityResourceResolver } from '@lib/backend/resource/resources/EntityResource/EntityResourceResolver/EntityResourceResolver';
import type { EntityResourceResolverModel } from '@lib/backend/resource/resources/EntityResource/EntityResourceResolver/EntityResourceResolver.models';
import { User } from '@lib/backend/user/resources/User/User';
import { UserService } from '@lib/backend/user/resources/User/UserService/UserService';
import {
  ACCESS_LEVEL,
  ACCESS_RESOURCE_NAME,
} from '@lib/shared/auth/resources/Access/Access.constants';
import type { AccessFormModel, AccessModel } from '@lib/shared/auth/resources/Access/Access.models';
import { withContainer } from '@lib/shared/core/decorators/withContainer/withContainer';
import { NotFoundError } from '@lib/shared/core/errors/NotFoundError/NotFoundError';
import { Container } from '@lib/shared/core/utils/Container/Container';
import type { UserModel } from '@lib/shared/user/resources/User/User.models';

@withContainer()
@withResolver({ Resource: Access })
export class AccessResolver
  extends EntityResourceResolver<AccessModel, AccessFormModel>({
    Resource: Access,
    ResourceService: AccessService,
    createAccess: ACCESS_LEVEL.PUBLIC,
    name: ACCESS_RESOURCE_NAME,
  })
  implements EntityResourceResolverModel<AccessModel, AccessFormModel>
{
  @withFieldResolver({ Resource: User })
  async user(@withSelf() access: Access): Promise<UserModel> {
    const { result } = await Container.get(UserService).get({ filter: { _id: access._uid } });
    if (result) {
      return result;
    }
    throw new NotFoundError(access._uid);
  }
}
