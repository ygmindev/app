import { type ResourceParamsModel } from '@lib/frontend/resource/resource.models';
import { LOG_MESSAGE_RESOURCE_NAME } from '@lib/model/logging/LogMessage/LogMessage.constants';
import { type LogMessageModel } from '@lib/model/logging/LogMessage/LogMessage.models';

export const LOG_MESSAGE_RESOURCE_PARAMS = {
  fields: [
    { id: 'message' },
    { id: 'created' },
    { id: 'level' },
    { id: 'type' },
    { id: 'process' },
  ],
  name: LOG_MESSAGE_RESOURCE_NAME,
} satisfies ResourceParamsModel<LogMessageModel>;
