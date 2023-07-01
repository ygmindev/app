import { Access } from '#lib-backend/auth/resources/Access/Access';
import { AccessService } from '#lib-backend/auth/resources/Access/AccessService/AccessService';
import { withContainer } from '#lib-backend/core/decorators/withContainer/withContainer';
import { Container } from '#lib-backend/core/utils/Container/Container';
import { withFieldResolver } from '#lib-backend/http/decorators/withFieldResolver/withFieldResolver';
import { withResolver } from '#lib-backend/http/decorators/withResolver/withResolver';
import { withSelf } from '#lib-backend/http/decorators/withSelf/withSelf';
import { EntityResourceResolver } from '#lib-backend/resource/resources/EntityResource/EntityResourceResolver/EntityResourceResolver';
import { User } from '#lib-backend/user/resources/User/User';
import { UserService } from '#lib-backend/user/resources/User/UserService/UserService';
import { ACCESS_RESOURCE_NAME } from '#lib-shared/auth/resources/Access/Access.constants';
import {
  type AccessFormModel,
  type AccessModel,
} from '#lib-shared/auth/resources/Access/Access.models';
import { type AccessServiceModel } from '#lib-shared/auth/resources/Access/AccessService/AccessService.models';
import { NotFoundError } from '#lib-shared/core/errors/NotFoundError/NotFoundError';
import { type UserModel } from '#lib-shared/user/resources/User/User.models';

const EntityResourceResolverF = EntityResourceResolver<AccessModel, AccessFormModel>({
  Resource: Access,
  ResourceService: AccessService,
  name: ACCESS_RESOURCE_NAME,
});

@withContainer()
@withResolver({ Resource: Access })
export class AccessResolver extends EntityResourceResolverF implements AccessServiceModel {
  @withFieldResolver({ Resource: User })
  async user(@withSelf() access: Access): Promise<UserModel> {
    const { result } = await Container.get(UserService).get({ filter: { _id: access._uid } });
    if (result) {
      return result;
    }
    throw new NotFoundError(access._uid);
  }
}
