import {
  type SignInFormModel,
  type SignInModel,
} from '#lib-shared/auth/resources/SignIn/SignIn.models';
import { type RESOURCE_METHOD_TYPE } from '#lib-shared/resource/resource.constants';
import { type EntityResourceServiceModel } from '#lib-shared/resource/services/EntityResourceService/EntityResourceService.models';
import { type ContextModel } from '#lib-shared/resource/utils/Context/Context.models';
import { type InputModel } from '#lib-shared/resource/utils/Input/Input.models';
import { type OutputModel } from '#lib-shared/resource/utils/Output/Output.models';
import { type UserModel } from '#lib-shared/user/resources/User/User.models';

export type SignInServiceModel = {
  createSignIn(user: UserModel | null | undefined): Promise<SignInModel>;

  usernameUpdate(
    input: InputModel<RESOURCE_METHOD_TYPE.CREATE, SignInModel, SignInFormModel>,
    context?: ContextModel,
  ): Promise<OutputModel<RESOURCE_METHOD_TYPE.CREATE, SignInModel>>;
} & Pick<EntityResourceServiceModel<SignInModel, SignInFormModel>, 'create'>;
