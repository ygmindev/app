import { type UseLogMessageResourceModel } from '@lib/frontend/logging/hooks/useLogMessageResource/useLogMessageResource.models';
import { LOG_MESSAGE_RESOURCE_PARAMS } from '@lib/frontend/logging/resources/LogMessage/LogMessage.constants';
import { useResource } from '@lib/frontend/resource/hooks/useResource/useResource';
import { useResourceMethod } from '@lib/frontend/resource/hooks/useResourceMethod/useResourceMethod';
import { LOG_MESSAGE_RESOURCE_NAME } from '@lib/model/logging/LogMessage/LogMessage.constants';
import { type LogMessageModel } from '@lib/model/logging/LogMessage/LogMessage.models';
import { RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.models';

export const useLogMessageResource = (): UseLogMessageResourceModel => {
  const { query: subscribe } = useResourceMethod<RESOURCE_METHOD_TYPE.SUBSCRIBE, LogMessageModel>({
    fields: [{ result: LOG_MESSAGE_RESOURCE_PARAMS.fields.map(({ id }) => id) }],
    method: RESOURCE_METHOD_TYPE.SUBSCRIBE,
    name: LOG_MESSAGE_RESOURCE_NAME,
  });

  return {
    ...useResource<LogMessageModel>({
      ...LOG_MESSAGE_RESOURCE_PARAMS,
    }),

    subscribe,
  };
};
