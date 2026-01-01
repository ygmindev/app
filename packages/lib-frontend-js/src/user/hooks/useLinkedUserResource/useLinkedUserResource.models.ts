import { type UseResourceModel } from '@lib/frontend/resource/hooks/useResource/useResource.models';
import { type LinkedUserModel } from '@lib/model/user/LinkedUser/LinkedUser.models';
import { type UserModel } from '@lib/model/user/User/User.models';

export type UseLinkedUserResourceModel = UseResourceModel<LinkedUserModel, UserModel>;
