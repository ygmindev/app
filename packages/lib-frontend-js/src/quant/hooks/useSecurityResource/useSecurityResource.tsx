import { type UseSecurityResourceModel } from '@lib/frontend/quant/hooks/useSecurityResource/useSecurityResource.models';
import { useResource } from '@lib/frontend/resource/hooks/useResource/useResource';
import {
  type SecurityModel,
} from '@lib/model/quant/Security/Security.models';
import { SECURITY_RESOURCE_PARAMS } from '@lib/frontend/quant/resources/Security/Security.constants';

export const useSecurityResource = (): UseSecurityResourceModel =>
  useResource<SecurityModel>({
    ...SECURITY_RESOURCE_PARAMS,
  });
