import { type EntityResourceImplementationModel } from '@lib/shared/resource/resources/EntityResource/EntityResourceImplementation/EntityResourceImplementation.models';
import { type UserFormModel, type UserModel } from '@lib/shared/user/resources/User/User.models';

export type UserImplementationModel = EntityResourceImplementationModel<UserModel, UserFormModel>;
