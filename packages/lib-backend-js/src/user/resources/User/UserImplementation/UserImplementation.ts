import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { createEntityResourceImplementation } from '@lib/backend/resource/utils/createEntityResourceImplementation/createEntityResourceImplementation';
import { User } from '@lib/backend/user/resources/User/User';
import { USER_RESOURCE_NAME } from '@lib/shared/user/resources/User/User.constants';
import { type UserModel } from '@lib/shared/user/resources/User/User.models';
import { type UserImplementationModel } from '@lib/shared/user/resources/User/UserImplementation/UserImplementation.models';

@withContainer({ name: `${USER_RESOURCE_NAME}Implementation` })
export class UserImplementation
  extends createEntityResourceImplementation<UserModel>({
    Resource: User,
    name: USER_RESOURCE_NAME,
  })
  implements UserImplementationModel {}
