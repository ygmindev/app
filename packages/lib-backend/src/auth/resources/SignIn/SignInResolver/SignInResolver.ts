import { SignIn, SignInForm } from '#lib-backend/auth/resources/SignIn/SignIn';
import { type SignInResolverModel } from '#lib-backend/auth/resources/SignIn/SignInResolver/SignInResolver.models';
import { SignInService } from '#lib-backend/auth/resources/SignIn/SignInService/SignInService';
import { withContainer } from '#lib-backend/core/utils/withContainer/withContainer';
import { withContext } from '#lib-backend/http/utils/withContext/withContext';
import { withResolver } from '#lib-backend/http/utils/withResolver/withResolver';
import { createEntityResourceResolver } from '#lib-backend/resource/utils/createEntityResourceResolver/createEntityResourceResolver';
import { withInput } from '#lib-backend/resource/utils/withInput/withInput';
import { withOutput } from '#lib-backend/resource/utils/withOutput/withOutput';
import { ACCESS_LEVEL } from '#lib-shared/auth/resources/Access/Access.constants';
import {
  SIGN_IN_RESOURCE_NAME,
  USERNAME_UPDATE,
} from '#lib-shared/auth/resources/SignIn/SignIn.constants';
import {
  type SignInFormModel,
  type SignInModel,
} from '#lib-shared/auth/resources/SignIn/SignIn.models';
import { withInject } from '#lib-shared/core/utils/withInject/withInject';
import { RESOURCE_METHOD_TYPE } from '#lib-shared/resource/resource.constants';
import { type ContextModel } from '#lib-shared/resource/utils/Context/Context.models';
import { type InputModel } from '#lib-shared/resource/utils/Input/Input.models';
import { type OutputModel } from '#lib-shared/resource/utils/Output/Output.models';

@withContainer()
@withResolver({ Resource: SignIn })
export class SignInResolver
  extends createEntityResourceResolver<SignInModel, SignInFormModel>({
    Resource: SignIn,
    ResourceData: SignInForm,
    ResourceService: SignInService,
    name: SIGN_IN_RESOURCE_NAME,
  })
  implements SignInResolverModel
{
  @withInject(SignInService) protected signInService!: SignInService;

  @withOutput({
    Resource: SignIn,
    level: ACCESS_LEVEL.PROTECTED,
    method: RESOURCE_METHOD_TYPE.CREATE,
    name: USERNAME_UPDATE,
  })
  async usernameUpdate(
    @withInput({ Resource: SignInForm, method: RESOURCE_METHOD_TYPE.CREATE, name: USERNAME_UPDATE })
    input: InputModel<RESOURCE_METHOD_TYPE.CREATE, SignInModel, SignInFormModel>,
    @withContext()
    context?: ContextModel,
  ): Promise<OutputModel<RESOURCE_METHOD_TYPE.CREATE, SignInModel>> {
    return this.signInService.usernameUpdate(input, context);
  }
}
