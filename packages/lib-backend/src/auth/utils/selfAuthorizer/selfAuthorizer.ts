import type {
  SelfAuthorizerModel,
  SelfAuthorizerParamsModel,
} from '@lib/backend/auth/utils/selfAuthorizer/selfAuthorizer.models';
import { isEqual } from '@lib/shared/core/utils/isEqual/isEqual';

export const selfAuthorizer = ({
  context,
  input,
}: SelfAuthorizerParamsModel): SelfAuthorizerModel => isEqual(context?.user?._id, input.root?._id);
