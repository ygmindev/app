import { type UseResourceMethodHookParamsModel } from '#lib-frontend/resource/hooks/useResourceMethod/useResourceMethod.models';
import { type LinkedUserServiceModel } from '#lib-shared/user/resources/LinkedUser/LinkedUserService/LinkedUserService.models';

export type UseLinkedUserResourceParamsModel = UseResourceMethodHookParamsModel;

export type UseLinkedUserResourceModel = Pick<LinkedUserServiceModel, 'get'>;
