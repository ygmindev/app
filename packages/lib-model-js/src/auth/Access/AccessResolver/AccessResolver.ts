import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { withFieldResolver } from '@lib/backend/http/utils/withFieldResolver/withFieldResolver';
import { withResolver } from '@lib/backend/http/utils/withResolver/withResolver';
import { withSelf } from '@lib/backend/http/utils/withSelf/withSelf';
import { createEntityResourceResolver } from '@lib/backend/resource/utils/createEntityResourceResolver/createEntityResourceResolver';
import { ACCESS_LEVEL, ACCESS_RESOURCE_NAME } from '@lib/model/auth/Access/Access.constants';
import { Access } from '@lib/model/auth/Access/Access.entity';
import { type AccessModel } from '@lib/model/auth/Access/Access.models';
import { AccessImplementation } from '@lib/model/auth/Access/AccessImplementation/AccessImplementation';
import { type AccessResolverModel } from '@lib/model/auth/Access/AccessResolver/AccessResolver.models';
import User from '@lib/model/user/User/User.entity';
import { UserModel } from '@lib/model/user/User/User.models';

@withContainer()
@withResolver({ Resource: () => Access })
export class AccessResolver
  extends createEntityResourceResolver<AccessModel>({
    Resource: () => Access,
    ResourceImplementation: AccessImplementation,
    access: { read: ACCESS_LEVEL.PUBLIC },
    name: ACCESS_RESOURCE_NAME,
  })
  implements AccessResolverModel
{
  @withFieldResolver({ Resource: () => User })
  async User(@withSelf() self: AccessModel): Promise<Partial<UserModel> | null> {
    return self.User;
  }
}
