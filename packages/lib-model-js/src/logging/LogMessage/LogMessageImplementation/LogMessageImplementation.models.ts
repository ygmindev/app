import { type RequestContextModel } from '@lib/config/api/api.models';
import { type LogMessageModel } from '@lib/model/logging/LogMessage/LogMessage.models';
import { type IdInputModel } from '@lib/model/resource/IdInput/IdInput.models';
import { type ResourceOutputModel } from '@lib/model/resource/ResourceOutput/ResourceOutput.models';
import { type RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.models';

export type LogMessageImplementationModel = {
  subscribe(
    input?: IdInputModel,
    context?: RequestContextModel,
  ): Promise<ResourceOutputModel<RESOURCE_METHOD_TYPE.SUBSCRIBE, LogMessageModel>>;
};
