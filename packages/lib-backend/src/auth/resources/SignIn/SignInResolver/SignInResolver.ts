import { SignIn, SignInForm } from '@lib/backend/auth/resources/SignIn/SignIn';
import { SignInService } from '@lib/backend/auth/resources/SignIn/SignInService/SignInService';
import { withContext } from '@lib/backend/graphql/decorators/withContext/withContext';
import { withResolver } from '@lib/backend/graphql/decorators/withResolver/withResolver';
import { withInput } from '@lib/backend/resource/decorators/withInput/withInput';
import { withOutput } from '@lib/backend/resource/decorators/withOutput/withOutput';
import { EntityResourceResolver } from '@lib/backend/resource/resources/EntityResource/EntityResourceResolver/EntityResourceResolver';
import type { EntityResourceResolverModel } from '@lib/backend/resource/resources/EntityResource/EntityResourceResolver/EntityResourceResolver.models';
import { ACCESS_LEVEL } from '@lib/shared/auth/resources/Access/Access.constants';
import {
  SIGN_IN_RESOURCE_NAME,
  USERNAME_UPDATE,
} from '@lib/shared/auth/resources/SignIn/SignIn.constants';
import type { SignInFormModel, SignInModel } from '@lib/shared/auth/resources/SignIn/SignIn.models';
import { withContainer } from '@lib/shared/core/decorators/withContainer/withContainer';
import { withInject } from '@lib/shared/core/decorators/withInject/withInject';
import { RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.constants';
import type { ContextModel } from '@lib/shared/resource/utils/Context/Context.models';
import type { InputModel } from '@lib/shared/resource/utils/Input/Input.models';
import type { OutputModel } from '@lib/shared/resource/utils/Output/Output.models';

@withContainer()
@withResolver({ Resource: SignIn })
export class SignInResolver
  extends EntityResourceResolver<SignInModel, SignInFormModel>({
    Resource: SignIn,
    ResourceData: SignInForm,
    ResourceService: SignInService,
    createAccess: ACCESS_LEVEL.PUBLIC,
    name: SIGN_IN_RESOURCE_NAME,
  })
  implements EntityResourceResolverModel<SignInModel, SignInFormModel>
{
  @withInject(SignInService) protected _signInService!: SignInService;

  @withOutput({ Resource: SignIn, method: RESOURCE_METHOD_TYPE.UPDATE, name: USERNAME_UPDATE })
  async usernameUpdate(
    @withInput({ Resource: SignInForm, method: RESOURCE_METHOD_TYPE.UPDATE, name: USERNAME_UPDATE })
    input: InputModel<RESOURCE_METHOD_TYPE.CREATE, SignInModel, SignInFormModel>,
    @withContext()
    context: ContextModel,
  ): Promise<OutputModel<RESOURCE_METHOD_TYPE.CREATE, SignInModel>> {
    return this._signInService.usernameUpdate(input, context);
  }
}
