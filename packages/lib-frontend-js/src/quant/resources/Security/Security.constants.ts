import { type ResourceParamsModel } from '@lib/frontend/resource/resource.models';
import { SECURITY_RESOURCE_NAME } from '@lib/model/quant/Security/Security.constants';
import { type SecurityModel } from '@lib/model/quant/Security/Security.models';

export const SECURITY_RESOURCE_PARAMS = {
  fields: [],
  name: SECURITY_RESOURCE_NAME,
} satisfies ResourceParamsModel<SecurityModel>;
