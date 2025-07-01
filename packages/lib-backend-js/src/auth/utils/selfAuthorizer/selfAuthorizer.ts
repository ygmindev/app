import {
  type SelfAuthorizerModel,
  type SelfAuthorizerParamsModel,
} from '@lib/backend/auth/utils/selfAuthorizer/selfAuthorizer.models';
import { isEqual } from '@lib/shared/core/utils/isEqual/isEqual';
import { type RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.models';

export const selfAuthorizer = <TMethod extends RESOURCE_METHOD_TYPE, TType>({
  context,
  input,
}: SelfAuthorizerParamsModel<TMethod, TType>): SelfAuthorizerModel =>
  isEqual(context?.user?._id, input?.root);
