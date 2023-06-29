import { type UserServiceModel } from '#lib-shared/user/resources/User/UserService/UserService.models';

export type UseUserResourceModel = Pick<UserServiceModel, 'get' | 'update'>;
