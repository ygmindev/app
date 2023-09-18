import {
  type SelfAuthorizerModel,
  type SelfAuthorizerParamsModel,
} from '#lib-backend/auth/utils/selfAuthorizer/selfAuthorizer.models';
import { isEqual } from '#lib-shared/core/utils/isEqual/isEqual';
import { type ResourceMethodTypeModel } from '#lib-shared/resource/resource.models';
import { type InputModel } from '#lib-shared/resource/utils/Input/Input.models';
import { type UserModel } from '#lib-shared/user/resources/User/User.models';

export const selfAuthorizer =
  <
    TMethod extends ResourceMethodTypeModel = ResourceMethodTypeModel,
    TType = unknown,
    TForm = undefined,
    TRoot = UserModel,
  >(
    self: SelfAuthorizerParamsModel<TMethod, TType, TForm, TRoot> = (input) =>
      (input as InputModel<TMethod, TType, TForm, UserModel>).root?._id,
  ): SelfAuthorizerModel<TMethod, TType, TForm, TRoot> =>
  ({ context, input }) =>
    isEqual(context?.user?._id, self(input));
