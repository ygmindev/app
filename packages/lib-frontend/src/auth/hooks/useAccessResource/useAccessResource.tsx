import { type UseAccessResourceModel } from '@lib/frontend/auth/hooks/useAccessResource/useAccessResource.models';
import { useProtectedResource } from '@lib/frontend/auth/hooks/useProtectedResource/useProtectedResource';
import { ACCESS_RESOURCE_PARAMS } from '@lib/frontend/auth/resources/Access/Access.constants';
import {
  type AccessFormModel,
  type AccessModel,
} from '@lib/shared/auth/resources/Access/Access.models';

export const useAccessResource = (): UseAccessResourceModel =>
  useProtectedResource<AccessModel, AccessFormModel>({
    ...ACCESS_RESOURCE_PARAMS,
  });
