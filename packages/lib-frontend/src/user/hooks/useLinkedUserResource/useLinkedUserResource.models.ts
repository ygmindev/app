import type { LinkedUserServiceModel } from '@lib/shared/user/resources/LinkedUser/LinkedUserService/LinkedUserService.models';

export interface UseLinkedUserResourceModel extends Pick<LinkedUserServiceModel, 'get'> {}
