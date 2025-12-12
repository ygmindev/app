import { type RequestContextModel } from '@lib/config/api/api.models';
import { type LogMessageModel } from '@lib/model/logging/LogMessage/LogMessage.models';
import { type ResourceInputModel } from '@lib/model/resource/ResourceInput/ResourceInput.models';
import { type ResourceOutputModel } from '@lib/model/resource/ResourceOutput/ResourceOutput.models';
import { type RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.models';

export type LogMessageImplementationModel = {
  subscribe(
    input?: ResourceInputModel<RESOURCE_METHOD_TYPE.SUBSCRIBE, LogMessageModel>,
    context?: RequestContextModel,
  ): Promise<ResourceOutputModel<RESOURCE_METHOD_TYPE.SUBSCRIBE, LogMessageModel>>;
};
