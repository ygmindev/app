import {
  type SignInFormModel,
  type SignInModel,
} from '@lib/shared/auth/resources/SignIn/SignIn.models';
import { type RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.constants';
import { type EntityResourceImplementationModel } from '@lib/shared/resource/resources/EntityResource/EntityResourceImplementation/EntityResourceImplementation.models';
import { type ContextModel } from '@lib/platform/core/core.models';
import { type InputModel } from '@lib/shared/resource/utils/Input/Input.models';
import { type OutputModel } from '@lib/shared/resource/utils/Output/Output.models';
import { type UserFormModel, type UserModel } from '@lib/shared/user/resources/User/User.models';

export type SignInImplementationModel = Pick<
  EntityResourceImplementationModel<SignInModel, SignInFormModel>,
  'create'
> & {
  userUpdate(
    input?: InputModel<RESOURCE_METHOD_TYPE.UPDATE, UserModel, UserFormModel>,
    context?: ContextModel,
  ): Promise<OutputModel<RESOURCE_METHOD_TYPE.CREATE, SignInModel>>;

  usernameUpdate(
    input?: InputModel<RESOURCE_METHOD_TYPE.CREATE, SignInModel, SignInFormModel>,
    context?: ContextModel,
  ): Promise<OutputModel<RESOURCE_METHOD_TYPE.CREATE, SignInModel>>;
};
