import {
  type SelfAuthorizerModel,
  type SelfAuthorizerParamsModel,
} from '#lib-backend/auth/utils/selfAuthorizer/selfAuthorizer.models';
import { isEqual } from '#lib-shared/core/utils/isEqual/isEqual';
import { type ResourceMethodTypeModel } from '#lib-shared/resource/resource.models';
import { type EntityResourceDataModel } from '#lib-shared/resource/resources/EntityResource/EntityResource.models';
import { type UserModel } from '#lib-shared/user/resources/User/User.models';

export const selfAuthorizer =
  <
    TMethod extends ResourceMethodTypeModel = ResourceMethodTypeModel,
    TType = unknown,
    TForm = EntityResourceDataModel<TType>,
    TRoot = UserModel,
  >(
    self: SelfAuthorizerParamsModel<TMethod, TType, TForm> = (input) => input?.root,
  ): SelfAuthorizerModel<TMethod, TType, TForm> =>
  // ({ context, input }) =>
  //   isEqual(context?.user?._id, self(input));
  ({ context, input }) => {
    console.warn(`@@@ ${context?.user?._id} ${input?.root} ${self(input)}`);
    return isEqual(context?.user?._id, self(input));
  };
