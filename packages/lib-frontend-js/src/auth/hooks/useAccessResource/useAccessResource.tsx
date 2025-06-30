import { type UseAccessResourceModel } from '@lib/frontend/auth/hooks/useAccessResource/useAccessResource.models';
import { useProtectedResource } from '@lib/frontend/auth/hooks/useProtectedResource/useProtectedResource';
import { ACCESS_RESOURCE_PARAMS } from '@lib/frontend/auth/resources/Access/Access.constants';
import { type AccessModel } from '@lib/model/auth/Access/Access.models';

export const useAccessResource = (): UseAccessResourceModel =>
  useProtectedResource<AccessModel>({
    ...ACCESS_RESOURCE_PARAMS,
  });
