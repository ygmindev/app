import { ACCESS_FIELDS } from '#lib-frontend/auth/hooks/useAccessResource/useAccessResource.constants';
import { type UseAccessResourceModel } from '#lib-frontend/auth/hooks/useAccessResource/useAccessResource.models';
import { useResource } from '#lib-frontend/resource/hooks/useResource/useResource';
import { ACCESS_RESOURCE_NAME } from '#lib-shared/auth/resources/Access/Access.constants';
import {
  type AccessFormModel,
  type AccessModel,
} from '#lib-shared/auth/resources/Access/Access.models';

export const useAccessResource = (): UseAccessResourceModel =>
  useResource<AccessModel, AccessFormModel>({
    fields: [{ result: ACCESS_FIELDS }],
    name: ACCESS_RESOURCE_NAME,
  });
