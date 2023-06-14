import type { UseResourceMethodHookParamsModel } from '#lib-frontend/resource/hooks/useResourceMethod/useResourceMethod.models';
import type { LinkedUserServiceModel } from '#lib-shared/user/resources/LinkedUser/LinkedUserService/LinkedUserService.models';
import type { UserModel } from '#lib-shared/user/resources/User/User.models';

export interface UseLinkedUserResourceParamsModel
  extends UseResourceMethodHookParamsModel<UserModel> {}

export interface UseLinkedUserResourceModel extends Pick<LinkedUserServiceModel, 'get'> {}
