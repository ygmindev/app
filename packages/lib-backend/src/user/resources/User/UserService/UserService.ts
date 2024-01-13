import { withContainer } from '@lib-backend/core/utils/withContainer/withContainer';
import { createEntityResourceService } from '@lib-backend/resource/utils/createEntityResourceService/createEntityResourceService';
import { User } from '@lib-backend/user/resources/User/User';
import { USER_RESOURCE_NAME } from '@lib-shared/user/resources/User/User.constants';
import { type UserFormModel, type UserModel } from '@lib-shared/user/resources/User/User.models';
import { type UserServiceModel } from '@lib-shared/user/resources/User/UserService/UserService.models';

@withContainer({ name: `${USER_RESOURCE_NAME}Service` })
export class UserService
  extends createEntityResourceService<UserModel, UserFormModel>({
    Resource: User,
    name: USER_RESOURCE_NAME,
  })
  implements UserServiceModel {}
