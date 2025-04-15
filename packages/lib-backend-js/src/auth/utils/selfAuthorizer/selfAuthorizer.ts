import {
  type SelfAuthorizerModel,
  type SelfAuthorizerParamsModel,
} from '@lib/backend/auth/utils/selfAuthorizer/selfAuthorizer.models';
import { isEqual } from '@lib/shared/core/utils/isEqual/isEqual';
import { type ResourceMethodTypeModel } from '@lib/shared/resource/resource.models';

export const selfAuthorizer = <TMethod extends ResourceMethodTypeModel, TType>({
  context,
  input,
}: SelfAuthorizerParamsModel<TMethod, TType>): SelfAuthorizerModel =>
  isEqual(context?.user?._id, input?.root);
