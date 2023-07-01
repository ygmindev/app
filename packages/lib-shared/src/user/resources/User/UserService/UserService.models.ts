import { type EntityResourceServiceModel } from '#lib-shared/resource/services/EntityResourceService/EntityResourceService.models';
import { type UserFormModel, type UserModel } from '#lib-shared/user/resources/User/User.models';

export type UserServiceModel = EntityResourceServiceModel<UserModel, UserFormModel>;
