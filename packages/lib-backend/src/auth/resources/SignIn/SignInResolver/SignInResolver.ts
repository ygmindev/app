import { SignIn, SignInForm } from '@lib/backend/auth/resources/SignIn/SignIn';
import { SignInImplementation } from '@lib/backend/auth/resources/SignIn/SignInImplementation/SignInImplementation';
import { type SignInResolverModel } from '@lib/backend/auth/resources/SignIn/SignInResolver/SignInResolver.models';
import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { withContext } from '@lib/backend/http/utils/withContext/withContext';
import { withResolver } from '@lib/backend/http/utils/withResolver/withResolver';
import { createEntityResourceResolver } from '@lib/backend/resource/utils/createEntityResourceResolver/createEntityResourceResolver';
import { withInput } from '@lib/backend/resource/utils/withInput/withInput';
import { withOutput } from '@lib/backend/resource/utils/withOutput/withOutput';
import { User } from '@lib/backend/user/resources/User/User';
import { RequestContextModel } from '@lib/config/platform/api/api.models';
import { ACCESS_LEVEL } from '@lib/shared/auth/resources/Access/Access.constants';
import {
  SIGN_IN_RESOURCE_NAME,
  SIGN_IN_USER,
  SIGN_IN_USERNAME,
} from '@lib/shared/auth/resources/SignIn/SignIn.constants';
import {
  type SignInFormModel,
  type SignInModel,
} from '@lib/shared/auth/resources/SignIn/SignIn.models';
import { withInject } from '@lib/shared/core/utils/withInject/withInject';
import { RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.constants';
import { type InputModel } from '@lib/shared/resource/utils/Input/Input.models';
import { type OutputModel } from '@lib/shared/resource/utils/Output/Output.models';
import { type UserFormModel, type UserModel } from '@lib/shared/user/resources/User/User.models';

@withContainer()
@withResolver({ Resource: () => SignIn })
export class SignInResolver
  extends createEntityResourceResolver<SignInModel, SignInFormModel>({
    Resource: () => SignIn,
    ResourceData: () => SignInForm,
    ResourceImplementation: SignInImplementation,
    access: {
      [RESOURCE_METHOD_TYPE.CREATE]: ACCESS_LEVEL.PUBLIC,
    },
    name: SIGN_IN_RESOURCE_NAME,
  })
  implements SignInResolverModel
{
  @withInject(SignInImplementation) protected signInImplementation!: SignInImplementation;

  @withOutput({
    Resource: () => SignIn,
    level: ACCESS_LEVEL.PROTECTED,
    method: RESOURCE_METHOD_TYPE.UPDATE,
    name: SIGN_IN_USER,
  })
  async userUpdate(
    @withInput({
      Resource: () => User,
      method: RESOURCE_METHOD_TYPE.UPDATE,
      name: SIGN_IN_USER,
    })
    input: InputModel<RESOURCE_METHOD_TYPE.UPDATE, UserModel, UserFormModel> = {},
    @withContext()
    context?: RequestContextModel,
  ): Promise<OutputModel<RESOURCE_METHOD_TYPE.CREATE, SignInModel>> {
    return this.signInImplementation.userUpdate(input, context);
  }

  @withOutput({
    Resource: () => SignIn,
    level: ACCESS_LEVEL.PROTECTED,
    method: RESOURCE_METHOD_TYPE.CREATE,
    name: SIGN_IN_USERNAME,
  })
  async usernameUpdate(
    @withInput({
      Resource: () => SignInForm,
      method: RESOURCE_METHOD_TYPE.CREATE,
      name: SIGN_IN_USERNAME,
    })
    input: InputModel<RESOURCE_METHOD_TYPE.CREATE, SignInModel, SignInFormModel> = {},
    @withContext()
    context?: RequestContextModel,
  ): Promise<OutputModel<RESOURCE_METHOD_TYPE.CREATE, SignInModel>> {
    return this.signInImplementation.usernameUpdate(input, context);
  }
}
