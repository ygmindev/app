import { SignIn } from '@lib/backend/auth/resources/SignIn/SignIn';
import { SignInImplementation } from '@lib/backend/auth/resources/SignIn/SignInImplementation/SignInImplementation';
import { SignInInput } from '@lib/backend/auth/resources/SignIn/SignInInput/SignInInput';
import { type SignInResolverModel } from '@lib/backend/auth/resources/SignIn/SignInResolver/SignInResolver.models';
import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { withResolver } from '@lib/backend/http/utils/withResolver/withResolver';
import { withInput } from '@lib/backend/resource/utils/withInput/withInput';
import { withOutput } from '@lib/backend/resource/utils/withOutput/withOutput';
import { SIGN_IN } from '@lib/shared/auth/auth.constants';
import { ACCESS_LEVEL } from '@lib/shared/auth/resources/Access/Access.constants';
import { type SignInModel } from '@lib/shared/auth/resources/SignIn/SignIn.models';
import { SignInInputModel } from '@lib/shared/auth/resources/SignIn/SignInInput/SignInInput.models';
import { withInject } from '@lib/shared/core/utils/withInject/withInject';

@withContainer()
@withResolver({ Resource: () => SignIn })
export class SignInResolver implements SignInResolverModel {
  @withInject(SignInImplementation) protected signInImplementation!: SignInImplementation;

  @withOutput({
    Resource: () => SignIn,
    access: ACCESS_LEVEL.PUBLIC,
    name: SIGN_IN,
  })
  async signIn(
    @withInput({ Resource: () => SignInInput })
    input: SignInInputModel,
  ): Promise<SignInModel> {
    return this.signInImplementation.signIn(input);
  }

  // @withResourceOutput({
  //   Resource: () => SignIn,
  //   method: RESOURCE_METHOD_TYPE.UPDATE,
  //   name: SIGN_IN_USER,
  // })
  // async userUpdate(
  //   @withResourceInput({
  //     Resource: () => User,
  //     method: RESOURCE_METHOD_TYPE.UPDATE,
  //     name: SIGN_IN_USER,
  //   })
  //   input: InputModel<RESOURCE_METHOD_TYPE.UPDATE, UserModel> = {},
  //   @withContext()
  //   context?: RequestContextModel,
  // ): Promise<OutputModel<RESOURCE_METHOD_TYPE.CREATE, SignInModel>> {
  //   return this.signInImplementation.userUpdate(input, context);
  // }

  // @withResourceOutput({
  //   Resource: () => SignIn,
  //   method: RESOURCE_METHOD_TYPE.CREATE,
  //   name: SIGN_IN_USERNAME,
  // })
  // async usernameUpdate(
  //   @withResourceInput({
  //     Resource: () => SignInForm,
  //     method: RESOURCE_METHOD_TYPE.CREATE,
  //     name: SIGN_IN_USERNAME,
  //   })
  //   input: InputModel<RESOURCE_METHOD_TYPE.CREATE, SignInModel> = {},
  //   @withContext()
  //   context?: RequestContextModel,
  // ): Promise<OutputModel<RESOURCE_METHOD_TYPE.CREATE, SignInModel>> {
  //   return this.signInImplementation.usernameUpdate(input, context);
  // }
}
