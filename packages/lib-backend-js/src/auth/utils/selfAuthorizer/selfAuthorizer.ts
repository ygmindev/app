import {
  type SelfAuthorizerModel,
  type SelfAuthorizerParamsModel,
} from '@lib/backend/auth/utils/selfAuthorizer/selfAuthorizer.models';
import { isEqual } from '@lib/shared/core/utils/isEqual/isEqual';
import { type ResourceMethodTypeModel } from '@lib/shared/resource/resource.models';
import { type EntityResourceDataModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';

export const selfAuthorizer = <
  TMethod extends ResourceMethodTypeModel,
  TType = unknown,
  TForm = EntityResourceDataModel<TType>,
>({
  context,
  input,
}: SelfAuthorizerParamsModel<TMethod, TType, TForm>): SelfAuthorizerModel =>
  isEqual(context?.user?._id, input?.root);

// import {
//   type SelfAuthorizerModel,
//   type SelfAuthorizerParamsModel,
// } from '@lib/backend/auth/utils/selfAuthorizer/selfAuthorizer.models';
// import { isEqual } from '@lib/shared/core/utils/isEqual/isEqual';
// import { type ResourceMethodTypeModel } from '@lib/shared/resource/resource.models';
// import { type EntityResourceDataModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';

// export const selfAuthorizer =
//   <
//     TMethod extends ResourceMethodTypeModel,
//     TType = unknown,
//     TForm = EntityResourceDataModel<TType>,
//   >(
//     SelfAuthorizerParamsModel<TMethod, TType, TForm> = (input) => input?.root,
//   ): SelfAuthorizerModel<TMethod, TType, TForm> =>
//   ({ context, input }) =>
//     isEqual(context?.user?._id, self(input));
