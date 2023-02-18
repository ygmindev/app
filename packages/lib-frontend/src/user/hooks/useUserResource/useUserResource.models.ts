import type { UserServiceModel } from '@lib/shared/user/resources/User/UserService/UserService.models';

export interface UseUserResourceModel extends Pick<UserServiceModel, 'get' | 'update'> {}
