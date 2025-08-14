import { type RefModel } from '@lib/backend/resource/utils/RefModel/RefModel.models';
import { type SECURITY_RESOURCE_NAME } from '@lib/model/quant/Security/Security.constants';
import { type SecurityModel } from '@lib/model/quant/Security/Security.models';
import { type EntityResourceModel } from '@lib/model/resource/EntityResource/EntityResource.models';

export type QuoteModel = EntityResourceModel & {
  [SECURITY_RESOURCE_NAME]: RefModel<SecurityModel>;
};
