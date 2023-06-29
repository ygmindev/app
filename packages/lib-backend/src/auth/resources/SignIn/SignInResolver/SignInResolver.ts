import { SignIn, SignInForm } from '#lib-backend/auth/resources/SignIn/SignIn';
import { SignInService } from '#lib-backend/auth/resources/SignIn/SignInService/SignInService';
import { withContainer } from '#lib-backend/core/decorators/withContainer/withContainer';
import { withContext } from '#lib-backend/http/decorators/withContext/withContext';
import { withResolver } from '#lib-backend/http/decorators/withResolver/withResolver';
import { withInput } from '#lib-backend/resource/decorators/withInput/withInput';
import { withOutput } from '#lib-backend/resource/decorators/withOutput/withOutput';
import { EntityResourceResolver } from '#lib-backend/resource/resources/EntityResource/EntityResourceResolver/EntityResourceResolver';
import { ACCESS_LEVEL } from '#lib-shared/auth/resources/Access/Access.constants';
import {
  SIGN_IN_RESOURCE_NAME,
  USERNAME_UPDATE,
} from '#lib-shared/auth/resources/SignIn/SignIn.constants';
import {
  type SignInFormModel,
  type SignInModel,
} from '#lib-shared/auth/resources/SignIn/SignIn.models';
import { type SignInServiceModel } from '#lib-shared/auth/resources/SignIn/SignInService/SignInService.models';
import { withInject } from '#lib-shared/core/decorators/withInject/withInject';
import { RESOURCE_METHOD_TYPE } from '#lib-shared/resource/resource.constants';
import { type ContextModel } from '#lib-shared/resource/utils/Context/Context.models';
import { type InputModel } from '#lib-shared/resource/utils/Input/Input.models';
import { type OutputModel } from '#lib-shared/resource/utils/Output/Output.models';

@withContainer()
@withResolver({ Resource: SignIn })
export class SignInResolver
  extends EntityResourceResolver<SignInModel, SignInFormModel>({
    Resource: SignIn,
    ResourceData: SignInForm,
    ResourceService: SignInService,
    name: SIGN_IN_RESOURCE_NAME,
  })
  implements SignInServiceModel
{
  @withInject(SignInService) protected _signInService!: SignInService;

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
    return this._signInService.usernameUpdate(input, context);
  }
}
