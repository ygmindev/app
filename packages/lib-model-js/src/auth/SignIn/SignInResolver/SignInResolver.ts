import { SignIn } from '@lib/model/auth/SignIn/SignIn';
import { SignInImplementation } from '@lib/model/auth/SignIn/SignInImplementation/SignInImplementation';
import { SignInInput } from '@lib/model/auth/SignIn/SignInInput/SignInInput';
import { type SignInResolverModel } from '@lib/model/auth/SignIn/SignInResolver/SignInResolver.models';
import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { withContext } from '@lib/backend/http/utils/withContext/withContext';
import { withResolver } from '@lib/backend/http/utils/withResolver/withResolver';
import { withInput } from '@lib/backend/resource/utils/withInput/withInput';
import { withOutput } from '@lib/backend/resource/utils/withOutput/withOutput';
import { RequestContextModel } from '@lib/config/api/api.models';
import { SIGN_IN, USERNAME_UPDATE } from '@lib/shared/auth/auth.constants';
import { ACCESS_LEVEL } from '@lib/model/auth/Access/Access.constants';
import { type SignInModel } from '@lib/model/auth/SignIn/SignIn.models';
import { SignInInputModel } from '@lib/model/auth/SignIn/SignInInput/SignInInput.models';
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

  @withOutput({
    Resource: () => SignIn,
    access: ACCESS_LEVEL.PROTECTED,
    name: USERNAME_UPDATE,
  })
  async usernameUpdate(
    @withInput({ Resource: () => SignInInput })
    input: SignInInputModel,
    @withContext()
    context?: RequestContextModel,
  ): Promise<SignInModel> {
    return this.signInImplementation.usernameUpdate(input, context);
  }
}
