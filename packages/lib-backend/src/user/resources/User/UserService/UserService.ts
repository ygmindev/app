import { withContainer } from '#lib-backend/core/decorators/withContainer/withContainer';
import { EntityResourceService } from '#lib-backend/resource/resources/EntityResource/EntityResourceService/EntityResourceService';
import { USER_RESOURCE_NAME } from '#lib-shared/user/resources/User/User.constants';
import { type UserFormModel, type UserModel } from '#lib-shared/user/resources/User/User.models';
import { type UserServiceModel } from '#lib-shared/user/resources/User/UserService/UserService.models';

@withContainer({ name: `${USER_RESOURCE_NAME}Service` })
export class UserService
  extends EntityResourceService<UserModel, UserFormModel>({ name: USER_RESOURCE_NAME })
  implements UserServiceModel {}
