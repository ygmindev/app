import { type UseAccessResourceModel } from '@lib/frontend/auth/hooks/useAccessResource/useAccessResource.models';
import { ACCESS_RESOURCE_PARAMS } from '@lib/frontend/auth/resources/Access/Access.constants';
import { useResource } from '@lib/frontend/resource/hooks/useResource/useResource';
import { type AccessModel } from '@lib/model/auth/Access/Access.models';

export const useAccessResource = (): UseAccessResourceModel =>
  useResource<AccessModel>({
    ...ACCESS_RESOURCE_PARAMS,
  });
