import type { EntityResourceServiceModel } from '@lib/shared/resource/resources/EntityResource/EntityResourceService/EntityResourceService.models';
import type { UserFormModel, UserModel } from '@lib/shared/user/resources/User/User.models';

export interface UserServiceModel extends EntityResourceServiceModel<UserModel, UserFormModel> {}
