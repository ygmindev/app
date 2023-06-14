import type { SignInFormModel, SignInModel } from '#lib-shared/auth/resources/SignIn/SignIn.models';
import type { RESOURCE_METHOD_TYPE } from '#lib-shared/resource/resource.constants';
import type { EntityResourceServiceModel } from '#lib-shared/resource/resources/EntityResource/EntityResourceService/EntityResourceService.models';
import type { ContextModel } from '#lib-shared/resource/utils/Context/Context.models';
import type { InputModel } from '#lib-shared/resource/utils/Input/Input.models';
import type { OutputModel } from '#lib-shared/resource/utils/Output/Output.models';

export interface SignInServiceModel
  extends Pick<EntityResourceServiceModel<SignInModel, SignInFormModel>, 'create'> {
  usernameUpdate(
    input: InputModel<RESOURCE_METHOD_TYPE.CREATE, SignInModel, SignInFormModel>,
    context?: ContextModel,
  ): Promise<OutputModel<RESOURCE_METHOD_TYPE.CREATE, SignInModel>>;
}
