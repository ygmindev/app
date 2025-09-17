import { type UserModel } from '@lib/model/user/User/User.models';
import { type RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.models';
import { type ResourceInputModel } from '@lib/shared/resource/utils/ResourceInput/ResourceInput.models';

export type SignInUserUpdateInputModel = ResourceInputModel<RESOURCE_METHOD_TYPE.UPDATE, UserModel>;
